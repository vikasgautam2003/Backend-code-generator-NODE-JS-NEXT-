// 'use client';

// import { useState } from 'react';
// import RuntimeSelector from '../../components/RuntimeSelector';
// import DatabaseSelector from '../../components/DatabaseSelector';
// import PromptInput from '../../components/PromptInput';
// import GeneratedOutput from '../../components/GeneratedOutput';


// export default function BackendGenerator() {
//   const [prompt, setPrompt] = useState('');
//   const [runtime, setRuntime] = useState('nextjs');
//   const [dbType, setDbType] = useState('mongoose');
//   const [code, setCode] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [toast, setToast] = useState(null);

//   const showToast = (msg) => {
//     setToast(msg);
//     setTimeout(() => setToast(null), 2000);
//   };

//   async function handleGenerate() {
//     if (!prompt.trim()) return showToast('Please describe the endpoint first.');

//     setLoading(true);
//     setCode('');

//     try {
//       const res = await fetch('/api/generate-endpoint', {
//         method: 'POST',
//         body: JSON.stringify({ prompt, runtime, dbType }),
//         headers: { 'Content-Type': 'application/json' }
//       });

//       const data = await res.json();
//       setCode(data.code || '');
//       showToast('Generated successfully!');
//     } catch (e) {
//       showToast('Error generating. Try again.');
//     }

//     setLoading(false);
//   }

//   const copyToClipboard = async () => {
//     if (!code) return showToast('Nothing to copy');
//     await navigator.clipboard.writeText(code);
//     showToast('Copied to clipboard');
//   };

//   const downloadCode = () => {
//     if (!code) return showToast('Nothing to download');

//     const blob = new Blob([code], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `generated-${runtime}-${dbType}.js`;
//     a.click();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-8">

//       {/* Toast */}
//       {toast && (
//         <div className="fixed bottom-6 right-6 bg-black/80 border border-white/10 text-white px-4 py-3 rounded-xl shadow-lg backdrop-blur-md">
//           {toast}
//         </div>
//       )}

//       <div className="max-w-6xl mx-auto space-y-10">

//         {/* Header */}
//         <div className="text-center space-y-3">
//           <h1 className="text-5xl font-extrabold tracking-tight">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
//               Universal Backend
//             </span>
//             {' '}Generator
//           </h1>
//           <p className="text-slate-400 text-lg">
//             Generate production-grade API routes in seconds.
//           </p>
//         </div>

//         {/* Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* Sidebar */}
//           <div className="space-y-6">
//             <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
//               <RuntimeSelector runtime={runtime} setRuntime={setRuntime} />
//               <div className="mt-6">
//                 <DatabaseSelector dbType={dbType} setDbType={setDbType} />
//               </div>
//             </div>
//           </div>

//           {/* Prompt + Output */}
//           <div className="lg:col-span-2 space-y-8">

//             <PromptInput
//               prompt={prompt}
//               setPrompt={setPrompt}
//               loading={loading}
//               onGenerate={handleGenerate}
//             />

//             {code.length > 0 && (
//               <GeneratedOutput
//                 code={code}
//                 copyToClipboard={copyToClipboard}
//                 downloadCode={downloadCode}
//               />
//             )}

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }








// 'use client';

// import { useState } from 'react';
// import RuntimeSelector from '../../components/RuntimeSelector';
// import DatabaseSelector from '../../components/DatabaseSelector';
// import PromptInput from '../../components/PromptInput';
// import GeneratedOutput from '../../components/GeneratedOutput';

// export default function BackendGenerator() {
//   const [prompt, setPrompt] = useState('');
//   const [runtime, setRuntime] = useState('nextjs');
//   const [dbType, setDbType] = useState('mongoose');
//   const [code, setCode] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [toast, setToast] = useState(null);

//   const showToast = (msg) => {
//     setToast(msg);
//     setTimeout(() => setToast(null), 1800);
//   };

//   async function handleGenerate() {
//     if (!prompt.trim()) return showToast('Describe the endpoint first');
//     setLoading(true);
//     setCode('');
//     try {
//       const r = await fetch('/api/generate-endpoint', {
//         method: 'POST',
//         body: JSON.stringify({ prompt, runtime, dbType }),
//         headers: { 'Content-Type': 'application/json' }
//       });
//       const d = await r.json();
//       setCode(d.code || '');
//       showToast('Generated');
//     } catch (e) {
//       showToast('Generation failed');
//     }
//     setLoading(false);
//   }

//   const copyToClipboard = async () => {
//     if (!code) return showToast('Nothing to copy');
//     await navigator.clipboard.writeText(code);
//     showToast('Copied');
//   };

//   const downloadCode = () => {
//     if (!code) return showToast('Nothing to download');
//     const blob = new Blob([code], { type: 'text/plain' });
//     const a = document.createElement('a');
//     a.href = URL.createObjectURL(blob);
//     a.download = `generated-${runtime}-${dbType}.js`;
//     a.click();
//   };

//   return (
//     <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex flex-col">
//       {toast && (
//         <div className="fixed bottom-6 right-6 bg-black/70 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md shadow-xl">
//           {toast}
//         </div>
//       )}

//       <div className="w-full py-3 px-6 border-b border-white/10 bg-[#0d1117]/60 backdrop-blur-xl flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
//           <span className="text-sm text-slate-400">Backend Generator</span>
//         </div>
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"
//         >
//           {sidebarOpen ? 'Hide Panel' : 'Show Panel'}
//         </button>
//       </div>

//       <div className="flex flex-1 overflow-hidden">

//         <div
//           className={`
//             h-full border-r border-white/10 bg-[#0d1117]/50 backdrop-blur-xl
//             transition-all duration-500 overflow-hidden
//             ${sidebarOpen ? 'w-[320px] min-w-[320px] opacity-100' : 'w-0 opacity-0'}
//           `}
//         >
//           <div className="p-5 space-y-6">
//             <div className="bg-white/5 rounded-xl p-5 border border-white/10">
//               <RuntimeSelector runtime={runtime} setRuntime={setRuntime} />
//             </div>

//             <div className="bg-white/5 rounded-xl p-5 border border-white/10">
//               <DatabaseSelector dbType={dbType} setDbType={setDbType} />
//             </div>

//             <div className="bg-white/5 rounded-xl p-5 border border-white/10">
//               <PromptInput
//                 prompt={prompt}
//                 setPrompt={setPrompt}
//                 loading={loading}
//                 onGenerate={handleGenerate}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 overflow-hidden p-4">
//           <div className="w-full h-full rounded-2xl border border-white/10 bg-[#0f121a]/70 backdrop-blur-xl shadow-2xl">
//             <GeneratedOutput
//               code={code}
//               copyToClipboard={copyToClipboard}
//               downloadCode={downloadCode}
//             />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }






// 'use client';

// import { useState } from 'react';
// import RuntimeSelector from '../../components/RuntimeSelector';
// import DatabaseSelector from '../../components/DatabaseSelector';
// import PromptInput from '../../components/PromptInput';
// import GeneratedOutput from '../../components/GeneratedOutput';

// export default function BackendGenerator() {
//   const [prompt, setPrompt] = useState('');
//   const [runtime, setRuntime] = useState('nextjs');
//   const [dbType, setDbType] = useState('mongoose');
//   const [code, setCode] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [toast, setToast] = useState(null);

//   const showToast = (m) => {
//     setToast(m);
//     setTimeout(() => setToast(null), 1800);
//   };

//   async function handleGenerate() {
//     if (!prompt.trim()) return showToast('Describe your endpoint');
//     setLoading(true);
//     setCode('');
//     try {
//       const r = await fetch('/api/generate-endpoint', {
//         method: 'POST',
//         body: JSON.stringify({ prompt, runtime, dbType }),
//         headers: { 'Content-Type': 'application/json' }
//       });
//       const d = await r.json();
//       setCode(d.code || '');
//       showToast('Generated');
//     } catch {
//       showToast('Failed');
//     }
//     setLoading(false);
//   }

//   const copy = async () => {
//     if (!code) return showToast('Nothing to copy');
//     await navigator.clipboard.writeText(code);
//     showToast('Copied');
//   };

//   const download = () => {
//     if (!code) return showToast('Nothing to download');
//     const blob = new Blob([code], { type: 'text/plain' });
//     const a = document.createElement('a');
//     a.href = URL.createObjectURL(blob);
//     a.download = `generated-${runtime}-${dbType}.js`;
//     a.click();
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0d14] text-slate-200 flex flex-col">

//       {toast && (
//         <div className="fixed bottom-6 right-6 bg-black/70 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-xl shadow-xl">
//           {toast}
//         </div>
//       )}

//       <div className="w-full h-14 border-b border-white/10 bg-[#0f131b]/70 backdrop-blur-xl flex items-center justify-between px-6 shadow-lg">
//         <div className="flex items-center gap-3">
//           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
//           <span className="text-sm tracking-wider text-slate-400">Backend Studio</span>
//         </div>
//         <div className="flex items-center gap-3">
//           <button className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg">⌘K</button>
//           <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20"></div>
//         </div>
//       </div>

//       <div className="flex flex-1 overflow-hidden">

//         <div className="w-[300px] min-w-[300px] h-full bg-[#0d1117] border-r border-white/10 p-5 space-y-6">
//           <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-lg shadow-lg">
//             <RuntimeSelector runtime={runtime} setRuntime={setRuntime} />
//           </div>
//           <div className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-lg shadow-lg">
//             <DatabaseSelector dbType={dbType} setDbType={setDbType} />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1 overflow-hidden">

//           <div className="flex-1 border-b border-white/10 bg-[#0e121a]/60 backdrop-blur-xl p-4">
//             <div className="w-full h-full rounded-xl border border-white/10 bg-[#0d1017] shadow-2xl overflow-hidden">
//               <GeneratedOutput code={code} copyToClipboard={copy} downloadCode={download} />
//             </div>
//           </div>

//           <div className="h-[260px] bg-[#0d1117]/70 border-t border-white/10 p-4">
//             <div className="w-full h-full rounded-xl border border-white/10 bg-[#0b0f14] shadow-xl overflow-hidden">
//               <PromptInput
//                 prompt={prompt}
//                 setPrompt={setPrompt}
//                 loading={loading}
//                 onGenerate={handleGenerate}
//               />
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }





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
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (m) => {
    setToast(m);
    setTimeout(() => setToast(null), 1800);
  };

  async function handleGenerate() {
    if (!prompt.trim()) return showToast('Describe your endpoint');
    setLoading(true);
    setCode('');
    try {
      const r = await fetch('/api/generate-endpoint', {
        method: 'POST',
        body: JSON.stringify({ prompt, runtime, dbType }),
        headers: { 'Content-Type': 'application/json' }
      });
      const d = await r.json();
      setCode(d.code || '');
      showToast('Generated');
    } catch {
      showToast('Failed');
    }
    setLoading(false);
  }

  const copy = async () => {
    if (!code) return showToast('Nothing to copy');
    await navigator.clipboard.writeText(code);
    showToast('Copied');
  };

  const download = () => {
    if (!code) return showToast('Nothing to download');
    const blob = new Blob([code], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `generated-${runtime}-${dbType}.js`;
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
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg">⌘K</button>
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20"></div>
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
            <div className="w-full h-full rounded-xl border border-white/10 bg-[#0d1017] shadow-2xl overflow-hidden min-h-0">
              <GeneratedOutput
                code={code}
                copyToClipboard={copy}
                downloadCode={download}
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
