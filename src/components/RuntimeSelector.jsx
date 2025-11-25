export default function RuntimeSelector({ runtime, setRuntime }) {
  const items = [
    {
      id: 'nextjs',
      title: 'Next.js (App Router)',
      desc: 'Edge-ready, server components, modern routing',
      gradient: 'from-indigo-500 to-cyan-400'
    },
    {
      id: 'express',
      title: 'Node + Express',
      desc: 'Classic server runtime with full control',
      gradient: 'from-emerald-500 to-green-400'
    }
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-slate-300">Runtime</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {items.map(item => {
          const active = item.id === runtime;
          return (
            <button
              key={item.id}
              onClick={() => setRuntime(item.id)}
              className={`
                p-4 rounded-xl text-left shadow-md transition
                ${active
                  ? `bg-gradient-to-r ${item.gradient} text-black`
                  : 'bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10'}
              `}
            >
              <div className="font-semibold">{item.title}</div>
              <div className="text-xs opacity-70 mt-1">{item.desc}</div>
            </button>
          );
        })}

      </div>
    </div>
  );
}
