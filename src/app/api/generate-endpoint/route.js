import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);


export async function POST(req) {
    try{
       const { prompt, runtime, dbType } = await req.json();

       const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const systemPrompt = `
        You are a Senior Backend Architect. Write a production-ready API file based on the user's stack.

        STACK CONFIGURATION:
        - Runtime: ${runtime}
        - Database/ORM: ${dbType}

        RULES:
        1. If Runtime is 'nextjs':
            - Use 'next/server' for NextResponse.
            - Export async functions like GET, POST, etc.
            - Follow Next.js App Router conventions (route.js).
        
        2. If Runtime is 'express':
            - Use standard (req, res) pattern.
            - Output a complete router file (e.g., const router = express.Router(); ... module.exports = router;).
        
        3. Database Specifics:
            - 'mongoose': Assume models are imported. Use async/await.
            - 'prisma': Import and use 'prisma' client.
            - 'pg' (Raw SQL): Use 'pg' pool for queries (e.g., await pool.query('SELECT...')).
            - 'sequelize': Use Model.findAll() style.

        4. General:
            - Include try/catch blocks with proper error status codes (500 for server, 400 for bad input).
            - Add comments explaining the logic.
            - Return ONLY the raw code string. No markdown formatting.
        `;

        const result = await model.generateContent([
            systemPrompt,
            `User Request:' ${prompt}` 
        ])

        const responseText = result.response.text();
        
        const cleanCode = responseText.replace(/```javascript|```js|```/g, "").trim();

        return NextResponse.json({ code: cleanCode });


    }  catch (error) {

    console.error("Generator Error:", error);
    return NextResponse.json({ error: "Generation Failed" }, { status: 500 });
    
  }
}