import React, { useState } from 'react';
import { GitPullRequest, GitBranch, GitCommit, Rocket, CheckCircle2, Copy, Check, Users, Code, ArrowRight, ShieldCheck, Terminal, ExternalLink, PlusCircle } from 'lucide-react';
import { CONTRIBUTORS, WORKFLOW_STEPS } from './data/contributors';

export default function App() {
  const [contributorsList, setContributorsList] = useState(CONTRIBUTORS);
  const [copiedStep, setCopiedStep] = useState(null);
  
  // Form State for local live submission test
  const [formData, setFormData] = useState({
    name: '',
    github: '',
    role: 'Frontend Developer',
    bio: '',
    skills: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(index);
    setTimeout(() => setCopiedStep(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.github) return;

    const newEntry = {
      id: Date.now(),
      name: formData.name,
      github: formData.github,
      role: formData.role,
      avatar: `https://github.com/${formData.github}.png`,
      bio: formData.bio || 'New team contributor via Git Pull Request practice.',
      skills: formData.skills ? formData.skills.split(',').map(s => s.trim()) : ['React', 'Git'],
      mergedDate: new Date().toISOString().split('T')[0]
    };

    setContributorsList([newEntry, ...contributorsList]);
    setSubmitted(true);
    setFormData({ name: '', github: '', role: 'Frontend Developer', bio: '', skills: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 selection:bg-sky-500 selection:text-white">
      
      {/* 1. HERO HEADER WITH CI/CD BADGES */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
              <GitPullRequest className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-white tracking-tight flex items-center gap-2">
                <span>GKM-Rahul CI/CD Showcase</span>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
                  LIVE DEPLOYED
                </span>
              </h1>
              <p className="text-xs text-slate-400 font-mono">Repository: github.com/gkm563/GKM-Rahul</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/gkm563/GKM-Rahul" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <Code className="w-4 h-4 text-sky-400" />
              <span>View GitHub Repo</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. MAIN HERO SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 font-mono text-xs font-semibold">
            <Rocket className="w-4 h-4 text-sky-400" />
            <span>LEARN GITHUB BRANCHES, PRs & VERCEL AUTOMATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">Git Pull Requests</span> & CI/CD Pipelines Live.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            This repository is created specifically for practicing Git collaboration: creating branches, submitting Pull Requests (PRs), reviewing code, merging PRs, and watching Vercel automatically build and deploy!
          </p>
        </div>

        {/* 3. STEP-BY-STEP PRACTICAL PULL REQUEST WORKFLOW GUIDE */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>PRACTICAL HANDS-ON TUTORIAL</span>
              </div>
              <h3 className="text-2xl font-bold text-white">How Rahul & Friends Can Contribute via PR</h3>
            </div>
            <span className="hidden sm:inline-block font-mono text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
              Workflow: Branch ➔ Commit ➔ PR ➔ Vercel Preview ➔ Merge
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFLOW_STEPS.map((ws, i) => (
              <div key={ws.step} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-sky-500/50 transition-all flex flex-col justify-between shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-lg border border-sky-400/20">
                      STEP {ws.step}
                    </span>
                    {i === 4 && <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-400/30">Vercel Auto-Preview</span>}
                    {i === 5 && <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/30">Production Deploy</span>}
                  </div>

                  <h4 className="font-bold text-lg text-white">{ws.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{ws.desc}</p>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 flex items-center justify-between gap-2 font-mono text-xs text-slate-400">
                  <span className="truncate">{ws.desc.split(': ')[1] || ws.desc}</span>
                  <button 
                    onClick={() => handleCopy(ws.desc.split(': ')[1] || ws.desc, i)}
                    className="p-1.5 hover:bg-slate-800 rounded text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy command"
                  >
                    {copiedStep === i ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. LIVE CONTRIBUTOR SUBMISSION FORM & CONTRIBUTOR SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Form to Test Local Addition / PR Sandbox */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
            <div className="space-y-1">
              <div className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <PlusCircle className="w-4 h-4" />
                <span>PRACTICE FORM / LOCAL SUBMISSION</span>
              </div>
              <h3 className="text-xl font-bold text-white">Add Developer Contribution</h3>
              <p className="text-xs text-slate-400">
                Submit your details here to test live card generation, or follow the PR guide to merge it via GitHub!
              </p>
            </div>

            {submitted && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Contribution card generated live! Merged to local state.</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Developer Name *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  required
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">GitHub Username *</label>
                <input 
                  type="text" 
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  placeholder="e.g. rahul-dev"
                  required
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Role / Tech Stack</label>
                <input 
                  type="text" 
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Full Stack Developer"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Bio</label>
                <textarea 
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Briefly describe what feature or PR you contributed..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Skills (comma separated)</label>
                <input 
                  type="text" 
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="React, Git, Vercel, Tailwind"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs font-sans shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Add Contribution Card</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right: Live Contributors Showcase Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="space-y-1">
                <div className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>COMMUNITY MEMBERS & PR MERGES</span>
                </div>
                <h3 className="text-xl font-bold text-white">Project Contributors ({contributorsList.length})</h3>
              </div>
            </div>

            <div className="space-y-4">
              {contributorsList.map((contributor) => (
                <div 
                  key={contributor.id} 
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-sky-500/40 transition-all shadow-md flex flex-col sm:flex-row items-start gap-4"
                >
                  <img 
                    src={contributor.avatar} 
                    alt={contributor.name}
                    className="w-14 h-14 rounded-2xl bg-slate-800 object-cover border border-slate-700 shrink-0"
                    onError={(e) => {
                      e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${contributor.name}`;
                    }}
                  />

                  <div className="space-y-2 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="font-bold text-base text-white">{contributor.name}</h4>
                        <span className="font-mono text-xs text-sky-400 font-semibold">@{contributor.github} • {contributor.role}</span>
                      </div>

                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-md self-start sm:self-auto font-semibold">
                        Merged: {contributor.mergedDate}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {contributor.bio}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {contributor.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="font-mono text-[10px] text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-slate-800/80 py-8 text-center text-xs font-mono text-slate-500">
        <p>Built for Learning GitHub PRs, Branching, Vercel CI/CD & Team Collaboration.</p>
        <p className="mt-1 text-slate-400">Repository: github.com/gkm563/GKM-Rahul</p>
      </footer>

    </div>
  );
}
