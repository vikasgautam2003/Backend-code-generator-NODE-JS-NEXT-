





'use client';

import { useState } from 'react';
import RuntimeSelector from '../../components/RuntimeSelector';
import DatabaseSelector from '../../components/DatabaseSelector';
import PromptInput from '../../components/PromptInput';
import GeneratedOutput from '../../components/GeneratedOutput';

export default function BackendGenerator() {
  const [prompt, setPrompt] = useState('');
  const [runtime, setRuntime] = useState('nextjs');
  const [dbType, setDbType] = useState('mongoose');

  const [files, setFiles] = useState(null);
  const [activeFile, setActiveFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (m) => {
    setToast(m);
    setTimeout(() => setToast(null), 1800);
  };

  async function handleGenerate() {
    if (!prompt.trim()) return showToast('Describe your endpoint');

    setLoading(true);
    setFiles(null);
    setActiveFile(null);

    try {
      const r = await fetch('/api/generate-endpoint', {
        method: 'POST',
        body: JSON.stringify({ prompt, runtime, dbType }),
        headers: { 'Content-Type': 'application/json' }
      });

      const d = await r.json();

      if (d.files) {
        Object.keys(d.files).forEach((name) => {
          const val = d.files[name];
          d.files[name] =
            typeof val === 'string'
              ? val
              : JSON.stringify(val ?? '', null, 2);
        });
      }

      setFiles(d.files || {});
      const first = Object.keys(d.files || {})[0];
      setActiveFile(first);

      showToast('Generated');
    } catch {
      showToast('Failed');
    }

    setLoading(false);
  }

  const copyCurrent = () => {
    if (!files || !activeFile) return;
    navigator.clipboard.writeText(files[activeFile] || '');
    showToast('Copied');
  };

  const downloadCurrent = () => {
    if (!files || !activeFile) return;
    const blob = new Blob([files[activeFile] || ''], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = activeFile;
    a.click();
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-200 flex flex-col">
      {toast && (
        <div className="fixed bottom-6 right-6 bg-black/70 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-xl shadow-xl">
          {toast}
        </div>
      )}

      <div className="w-full h-14 border-b border-white/10 bg-[#0f131b]/70 backdrop-blur-xl flex items-center justify-between px-6 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm tracking-wider text-slate-400">Backend Studio</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden min-h-0">
        <div className="w-[300px] min-w-[300px] h-full bg-[#0d1117] border-r border-white/10 p-5 space-y-6 overflow-y-auto">
          <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-lg shadow-lg">
            <RuntimeSelector runtime={runtime} setRuntime={setRuntime} />
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-lg shadow-lg">
            <DatabaseSelector dbType={dbType} setDbType={setDbType} />
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-hidden min-h-0">
          <div className="flex-1 border-b border-white/10 bg-[#0e121a]/60 backdrop-blur-xl p-4 min-h-0 overflow-hidden flex flex-col h-0">
            {files && (
              <div className="w-full flex-none flex gap-2 p-2 border-b border-white/10 bg-[#0d1017]">
                {Object.keys(files).map((name) => (
                  <button
                    key={name}
                    onClick={() => setActiveFile(name)}
                    className={`px-3 py-1 text-xs rounded ${
                      activeFile === name
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'text-slate-400'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}

            <div className="w-full h-full rounded-xl border border-white/10 bg-[#0d1017] shadow-2xl overflow-hidden min-h-0">
              <GeneratedOutput
                code={files?.[activeFile] || ''}
                copyToClipboard={copyCurrent}
                downloadCode={downloadCurrent}
              />
            </div>
          </div>

          <div className="h-[260px] bg-[#0d1117]/70 border-t border-white/10 p-4">
            <div className="w-full h-full rounded-xl border border-white/10 bg-[#0b0f14] shadow-xl overflow-hidden">
              <PromptInput
                prompt={prompt}
                setPrompt={setPrompt}
                loading={loading}
                onGenerate={handleGenerate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
