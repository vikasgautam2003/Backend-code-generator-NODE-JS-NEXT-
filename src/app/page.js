'use client';
import { useState } from 'react';

export default function BackendGenerator() {
  const [prompt, setPrompt] = useState('');
  const [runtime, setRuntime] = useState('nextjs');
  const [dbType, setDbType] = useState('mongoose');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!prompt) return;
    setLoading(true);
    
    try {
      const res = await fetch('/api/generate-endpoint', {
        method: 'POST',
        body: JSON.stringify({ prompt, runtime, dbType }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      setCode(data.code);
    } catch (e) {
      alert("Error generating code");
    } finally {
      setLoading(false);
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 p-8 font-sans flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-8">
        
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Universal Backend
            </span> Generator
          </h1>
          <p className="text-slate-400">Select your stack, describe your logic, and get production-ready code.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-xl space-y-5">

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Runtime Environment
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setRuntime('nextjs')}
                    className={`p-3 rounded-lg text-sm font-semibold transition-all border ${
                      runtime === 'nextjs' 
                        ? 'bg-blue-600 border-blue-500 text-white' 
                        : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    Next.js (App)
                  </button>
                  <button
                    onClick={() => setRuntime('express')}
                    className={`p-3 rounded-lg text-sm font-semibold transition-all border ${
                      runtime === 'express' 
                        ? 'bg-green-600 border-green-500 text-white' 
                        : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    Node (Express)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Database / ORM
                </label>
                <select 
                  value={dbType}
                  onChange={(e) => setDbType(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none appearance-none"
                >
                  <option value="mongoose">MongoDB (Mongoose)</option>
                  <option value="prisma">SQL (Prisma)</option>
                  <option value="pg">PostgreSQL (Raw 'pg' lib)</option>
                  <option value="sequelize">SQL (Sequelize)</option>
                </select>
              </div>

            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex-1 bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Endpoint Logic
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what this API route should do...\ne.g. 'Create a registration endpoint. Validate email format, hash password with bcrypt, save to Users table, and return a sanitized user object.'"
                className="flex-1 w-full bg-[#0f172a] border border-slate-600 rounded-xl p-4 text-white focus:border-cyan-500 outline-none font-mono text-sm leading-relaxed resize-none min-h-[200px]"
              />
              
              <button
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className="mt-4 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
              >
                {loading ? "Generating Architecture..." : "Generate Backend Code 🚀"}
              </button>
            </div>
          </div>

        </div>

        {code && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex justify-between items-center mb-2 px-1">
                <span className="text-slate-400 text-sm font-medium">Generated Output</span>
                <button 
                  onClick={copyToClipboard}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  Copy Code
                </button>
             </div>
             <div className="relative group rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-10 bg-[#1e293b] border-b border-slate-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <pre className="pt-14 p-6 bg-[#0f172a] overflow-x-auto text-sm font-mono text-emerald-400 leading-6">
                 <code>{code}</code>
               </pre>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
