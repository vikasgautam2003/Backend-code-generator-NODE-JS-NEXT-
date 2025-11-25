// export default function PromptInput({ prompt, setPrompt, loading, onGenerate }) {
//   return (
//     <div className="flex flex-col h-full bg-[#0a0f16] border border-[#1a2332] rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.6)] overflow-hidden">

//       <div className="px-4 py-2 flex items-center gap-2 border-b border-[#1a2332] bg-[#0c111b] flex-none">
//         <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
//         <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
//         <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
//         <span className="ml-3 text-xs tracking-wider text-slate-400 uppercase">
//           Input
//         </span>
//       </div>

//       <textarea
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder={`# Describe the backend logic\n# Example:\n# create user, validate email, hash password, save to DB`}
//         className="
//           flex-1 w-full bg-transparent p-4 text-[#8af2ff]
//           font-mono text-sm leading-relaxed outline-none resize-none
//           placeholder:text-slate-600
//         "
//       />

    
//       <div className="flex items-center justify-end gap-3 px-4 py-3 border-t border-[#1a2332] bg-[#0d1522] flex-none">

//         <button
//           onClick={onGenerate}
//           disabled={loading || !prompt}
//           className="
//             px-4 py-2 font-mono text-sm tracking-wide
//             rounded-lg border border-cyan-500/30
//             text-cyan-300
//             hover:bg-cyan-500/10 hover:border-cyan-400/50
//             transition-all
//             disabled:opacity-30 disabled:cursor-not-allowed
//           "
//         >
//           {loading ? "Running..." : "Generate →"}
//         </button>
//       </div>
//     </div>
//   );
// }






export default function PromptInput({ prompt, setPrompt, loading, onGenerate, mode, setMode }) {
  return (
    <div className="flex flex-col h-full bg-[#0a0f16] border border-[#1a2332] rounded-xl overflow-hidden">

      <div className="px-4 py-2 flex items-center gap-3 border-b border-[#1a2332] bg-[#0c111b]">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="text-xs text-slate-400 uppercase">Input</span>

        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="ml-auto px-3 py-1 bg-[#0d1522] border border-cyan-500/30 text-cyan-300 rounded-lg text-xs"
        >
          <option value="single">Single File</option>
          <option value="multi">Multi File</option>
        </select>
      </div>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="flex-1 bg-transparent p-4 text-[#8af2ff] font-mono"
      />

      <div className="flex justify-end px-4 py-3 border-t border-[#1a2332] bg-[#0d1522]">
        <button
          onClick={onGenerate}
          disabled={loading || !prompt}
          className="px-4 py-2 border border-cyan-500/30 text-cyan-300 rounded-lg"
        >
          {loading ? "Running..." : "Generate →"}
        </button>
      </div>

    </div>
  );
}
