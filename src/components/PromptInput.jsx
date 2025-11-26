



export default function PromptInput({ prompt, setPrompt, loading, onGenerate }) {
  return (
    <div className="flex flex-col h-full bg-[#0a0f16] border border-[#1a2332] rounded-xl overflow-hidden">

      <div className="px-4 py-2 flex items-center gap-3 border-b border-[#1a2332] bg-[#0c111b]">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />

        <span className="text-xs text-slate-400 uppercase">
          Input
        </span>

        
        <span className="ml-auto text-[10px] px-3 py-1 rounded-lg border border-cyan-500/20 text-cyan-400 bg-[#0d1522]">
          Multi-File Mode
        </span>
      </div>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={`# Describe the backend logic\n# Example:\n# Create user, validate email, hash password, save to DB`}
        className="
          flex-1 bg-transparent p-4 text-[#8af2ff]
          font-mono text-sm leading-relaxed outline-none resize-none
          placeholder:text-slate-600
        "
      />

      <div className="flex justify-end px-4 py-3 border-t border-[#1a2332] bg-[#0d1522]">
        <button
          onClick={onGenerate}
          disabled={loading || !prompt}
          className="
            px-4 py-2 font-mono text-sm tracking-wide
            rounded-lg border border-cyan-500/30
            text-cyan-300
            hover:bg-cyan-500/10 hover:border-cyan-400/50
            transition-all
            disabled:opacity-30 disabled:cursor-not-allowed
          "
        >
          {loading ? "Running..." : "Generate →"}
        </button>
      </div>
    </div>
  );
}
