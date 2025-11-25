"use client";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">

      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.72]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/ai.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <nav className="relative z-20 w-full px-12 py-6 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="text-[26px] font-bold tracking-tight">
          BackNest<span className="text-neutral-300">.ai</span>
        </div>
        <a
          href="/Backend"
          className="px-6 py-2.5 rounded-lg bg-neutral-200 text-black font-medium hover:bg-white transition"
        >
          Get Started
        </a>
      </nav>

      <section className="relative z-20 flex flex-col items-center text-center px-8 mt-32">
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-neutral-100">
          Backend Generation.
          <br />
          Reimagined with Precision.
        </h1>

        <p className="mt-8 text-lg max-w-2xl text-neutral-400 leading-relaxed">
          BackNest.ai builds production-grade APIs, data models, and backend logic 
          with the rigor and reliability of a senior engineer—powered by AI.
        </p>

        <a
          href="/Backend"
          className="mt-12 px-8 py-3 rounded-lg bg-neutral-200 text-black text-base font-medium hover:bg-white transition"
        >
          Start Building →
        </a>
      </section>

     <section className="relative mt-40 px-10 pb-32">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
                    overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br 
                      from-cyan-400/10 to-blue-500/10 pointer-events-none" />
      <div className="text-xl font-semibold mb-3">AI-Native Backend Generation</div>
      <p className="text-slate-400 text-sm leading-relaxed">
        Generate entire backend architectures, routes, and logic through natural language. 
        No boilerplate. No scaffolding. Instant production code.
      </p>
    </div>

    <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
                    overflow-hidden hover:border-indigo-400/40 transition-all duration-300">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br 
                      from-indigo-400/10 to-purple-500/10 pointer-events-none" />
      <div className="text-xl font-semibold mb-3">Autonomous Logic Engine</div>
      <p className="text-slate-400 text-sm leading-relaxed">
        Your instructions are interpreted by an autonomous AI reasoning system that builds 
        logic like a real engineer — validations, models, controllers, flows.
      </p>
    </div>

    <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
                    overflow-hidden hover:border-fuchsia-400/40 transition-all duration-300">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br 
                      from-fuchsia-400/10 to-rose-500/10 pointer-events-none" />
      <div className="text-xl font-semibold mb-3">Production-Ready Output</div>
      <p className="text-slate-400 text-sm leading-relaxed">
        Outputs clean, structured, industry-grade backend code compatible with Node, 
        Express, Next.js, MongoDB, Postgres, Prisma, and more.
      </p>
    </div>

  </div>

</section>

    </div>
  );
}
