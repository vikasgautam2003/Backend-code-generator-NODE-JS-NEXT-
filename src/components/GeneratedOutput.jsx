// import { useMemo, useState } from "react";

// function LineNumbers({ text }) {
//   const lines = useMemo(() => text.split("\n").length, [text]);
//   return (
//     <div className="select-none text-right pr-5 text-[11px] text-slate-600/70 tracking-tight">
//       {Array.from({ length: lines }).map((_, i) => (
//         <div key={i} className="leading-7">{i + 1}</div>
//       ))}
//     </div>
//   );
// }

// export default function GeneratedOutput({ code, copyToClipboard, downloadCode }) {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div
//       className={`
//         relative rounded-2xl overflow-hidden border border-white/10 
//         backdrop-blur-2xl transition-all duration-500
//         bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-800/60
//         shadow-[0_0_60px_rgba(0,0,0,0.65)]
//         ${expanded ? "fixed inset-0 z-[90] m-4" : ""}
//       `}
//     >
//       <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
//         <div className="flex items-center gap-4">
//           <div className="flex gap-2">
//             <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
//             <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
//             <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
//           </div>
//           <div>
//             <div className="text-sm font-semibold text-slate-200 tracking-tight">Generated Code</div>
//             <div className="text-[11px] text-slate-400">Copy, Download, Expand</div>
//           </div>
//         </div>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-xs text-slate-200"
//           >
//             {expanded ? "Close" : "Expand"}
//           </button>
//           <button
//             onClick={copyToClipboard}
//             className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-xs text-slate-200"
//           >
//             Copy
//           </button>
//           <button
//             onClick={downloadCode}
//             className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-cyan-400 text-black rounded-lg text-xs font-semibold shadow-xl"
//           >
//             Download
//           </button>
//         </div>
//       </div>

//       <div
//         className="flex overflow-hidden relative"
//         style={{ maxHeight: expanded ? "85vh" : "440px" }}
//       >
//         <div className="hidden md:block border-r border-white/10 bg-slate-900/40 px-5 py-6">
//           <LineNumbers text={code} />
//         </div>

//         <pre
//           className="
//             relative flex-1 px-6 py-6 text-[13px] leading-7 overflow-auto font-mono text-emerald-300
//             bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/70
//           "
//         >
//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
//           <code>{code}</code>
//         </pre>
//       </div>
//     </div>
//   );
// }


import { useMemo, useState } from "react";

function LineNumbers({ text }) {
  const lines = useMemo(() => text.split("\n").length, [text]);
  return (
    <div className="select-none text-right pr-5 text-[11px] text-slate-600/70 tracking-tight">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="leading-7">{i + 1}</div>
      ))}
    </div>
  );
}

export default function GeneratedOutput({ code, copyToClipboard, downloadCode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`
        relative h-full w-full rounded-2xl border border-white/10 
        overflow-hidden bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-800/60
        backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500
        ${expanded ? "fixed inset-0 z-[999] m-6" : ""}
      `}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500/80 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400/80 rounded-full" />
            <div className="w-3 h-3 bg-green-500/80 rounded-full" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-200">Generated Output</div>
            <div className="text-[11px] text-slate-400">Scrollable • Fixed Pane</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-3 py-2 bg-white/10 border border-white/10 hover:bg-white/20 text-xs rounded-lg"
          >
            {expanded ? "Close" : "Expand"}
          </button>

          <button
            onClick={copyToClipboard}
            className="px-3 py-2 bg-white/10 border border-white/10 hover:bg-white/20 text-xs rounded-lg"
          >
            Copy
          </button>

          <button
            onClick={downloadCode}
            className="px-3 py-2 bg-gradient-to-r from-indigo-500 to-cyan-400 text-black rounded-lg text-xs font-semibold shadow"
          >
            Download
          </button>
        </div>
      </div>

      <div className="absolute inset-0 top-[58px] flex overflow-auto">

  <div className="hidden md:block border-r border-white/10 bg-slate-900/40 px-5 py-6 flex-none">
    <LineNumbers text={code} />
  </div>

 <pre
  className="
    flex-1 px-6 py-6 text-[13px] leading-7 font-mono text-emerald-300
    whitespace-pre-wrap break-words
    scrollbar-thin 
    scrollbar-thumb-[#3b82f680] 
    scrollbar-thumb-rounded-full 
    scrollbar-track-[#1a1f29]

    hover:scrollbar-thumb-[#60a5faAA]
    bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/70
  "
>

    <code>{code}</code>
  </pre>

</div>

    </div>
  );
}
