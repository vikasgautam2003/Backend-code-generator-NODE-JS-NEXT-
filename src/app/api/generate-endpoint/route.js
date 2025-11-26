



import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(req) {
  try {
    const { prompt, runtime, dbType } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const systemPrompt = `
You are BackNest AI — a Senior Backend Architect and STRICT JSON generator.

YOU MUST ALWAYS output valid JSON in THIS exact structure:

{
  "files": {
    "filename.ext": "file content as a JSON string"
  }
}

===========================
ABSOLUTE NON-NEGOTIABLE RULES
===========================
- Your ENTIRE response MUST be valid JSON.
- NO markdown.
- NO backticks.
- NO additional explanations.
- NO prose.
- NO comments outside JSON.
- All file contents MUST be one JSON string.
- Escape internal double quotes using \\".
- Never escape single quotes.
- No trailing commas.
- "files" object is 100% mandatory.

===========================
ALWAYS RETURN MULTIPLE FILES
===========================
Never return only one file. Even for small tasks.

Use real backend architecture:

{
  "files": {
    "server.js": "<server setup code>",
    "routes/app.routes.js": "<Express or Next.js route>",
    "controllers/app.controller.js": "<controller logic>",
    "models/app.model.js": "<DB model>",
    "middleware/auth.js": "<middleware if needed>",
    "services/app.service.js": "<business logic service>",
    "utils/helpers.js": "<utility functions>"
  }
}

===========================
RUNTIME RULES
===========================
If runtime = "express":
- Use express(), express.Router(), module.exports.
- Use req, res, next.
- Use modular route + controller files.

If runtime = "nextjs":
- Use NextResponse from "next/server".
- Export async GET/POST/PUT/DELETE.
- Use route.js format.

===========================
DATABASE RULES
===========================
If mongoose → Schema, model, find(), save(), updateOne().
If prisma → PrismaClient() and prisma.modelName.
If pg → Pool + SQL parameterized queries.
If sequelize → Sequelize model methods.

===========================
FAILSAFE (MANDATORY)
===========================
If user request is unclear or incomplete:

Return MULTI-FILE JSON anyway:

{
  "files": {
    "server.js": "// Unable to process request. Missing details.",
    "routes/app.routes.js": "// Missing details.",
    "controllers/app.controller.js": "// Missing details."
  }
}

You MUST ALWAYS return valid JSON with a "files" object.
`;

    const result = await model.generateContent([
      systemPrompt,
      `USER REQUEST: ${prompt}`,
      `RUNTIME: ${runtime}`,
      `DATABASE: ${dbType}`
    ]);

    const responseText = result.response.text().trim();

    let parsed;

    try {
      parsed = JSON.parse(responseText);
    } catch (e) {
      return NextResponse.json(
        {
          files: {
            "server.js": "// AI did not return valid JSON.",
            "routes/app.routes.js": "// AI output invalid JSON.",
            "controllers/app.controller.js": "// Generation failed."
          }
        },
        { status: 200 }
      );
    }

    if (!parsed.files || typeof parsed.files !== "object") {
      return NextResponse.json(
        {
          files: {
            "server.js": "// AI output missing 'files' key.",
            "routes/app.routes.js": "// Invalid output structure.",
            "controllers/app.controller.js": "// Auto-recovered."
          }
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      files: parsed.files
    });

  } catch (error) {
    return NextResponse.json(
      {
        files: {
          "server.js": "// Server crashed.",
          "routes/app.routes.js": "// Internal server error.",
          "controllers/app.controller.js": "// Recovery mode enabled."
        }
      },
      { status: 200 }
    );
  }
}
