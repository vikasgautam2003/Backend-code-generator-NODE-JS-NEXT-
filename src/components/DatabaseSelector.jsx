import { useState } from "react";

export default function DatabaseSelector({ dbType, setDbType }) {
  const [open, setOpen] = useState(true);

  const options = [
    {
      id: "mongoose",
      label: "MongoDB (Mongoose)",
      desc: "Schema-based NoSQL documents",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-80">
          <path fill="currentColor" d="M12 2l4 6-4 14-4-14 4-6z" />
        </svg>
      ),
      gradient: "from-emerald-400 to-green-500"
    },
    {
      id: "prisma",
      label: "SQL (Prisma)",
      desc: "Typesafe ORM with migrations",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-80">
          <path fill="currentColor" d="M12 2l9 16H3l9-16z" />
        </svg>
      ),
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      id: "pg",
      label: "PostgreSQL (pg)",
      desc: "Raw SQL with max performance",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-80">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      gradient: "from-cyan-400 to-sky-500"
    },
    {
      id: "sequelize",
      label: "SQL (Sequelize)",
      desc: "ORM for SQL dialects",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-80">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      gradient: "from-purple-400 to-fuchsia-500"
    }
  ];

  return (
    <div className="space-y-3 select-none">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h3 className="text-sm font-semibold text-slate-200">Database / ORM</h3>
        <svg
          className={`w-4 h-4 text-slate-300 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
        >
          <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-3 mt-2">
          {options.map((opt) => {
            const active = opt.id === dbType;
            return (
              <button
                key={opt.id}
                onClick={() => setDbType(opt.id)}
                className={`
                  w-full p-4 rounded-xl flex items-center justify-between transition-all
                  border shadow-sm backdrop-blur-md
                  ${active
                    ? `bg-gradient-to-r ${opt.gradient} text-black border-transparent shadow-xl scale-[1.01]`
                    : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10"}
                `}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      active ? "bg-white/40" : "bg-white/10"
                    }`}
                  >
                    {opt.icon}
                  </div>

                  <div className="text-left">
                    <div className="font-semibold text-sm">{opt.label}</div>
                    <div
                      className={`text-xs ${
                        active ? "text-black/70" : "text-slate-400"
                      } mt-0.5`}
                    >
                      {opt.desc}
                    </div>
                  </div>
                </div>

                {active ? (
                  <div className="w-3 h-3 rounded-full bg-black/70" />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-slate-400">
        Models, schemas, and connection logic adapt automatically.
      </p>
    </div>
  );
}
