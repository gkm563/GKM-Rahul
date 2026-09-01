import React, { useState, useEffect, useMemo } from 'react';
import { 
  GitPullRequest, 
  GitBranch, 
  GitCommit, 
  Rocket, 
  CheckCircle2, 
  Copy, 
  Check, 
  Users, 
  Code, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  ExternalLink, 
  PlusCircle, 
  Sun, 
  Moon, 
  Search, 
  Sparkles, 
  Play, 
  RefreshCw,
  FolderGit2,
  Cpu
} from 'lucide-react';
import { CONTRIBUTORS, WORKFLOW_STEPS } from './data/contributors';

export default function App() {
  // Theme state: checks localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Sync theme changes with HTML document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [contributorsList, setContributorsList] = useState(CONTRIBUTORS);
  const [copiedStep, setCopiedStep] = useState(null);
  const [activePipelineTab, setActivePipelineTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Form State for local live submission test
  const [formData, setFormData] = useState({
    name: '',
    github: '',
    role: 'Frontend Developer',
    bio: '',
    skills: 'React, Tailwind CSS, Git'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(index);
    setTimeout(() => setCopiedStep(null), 2500);
  };

  const fillSampleData = (type) => {
    if (type === 'rahul') {
      setFormData({
        name: 'Rahul Kushwaha',
        github: 'Dominus005era',
        role: 'Full Stack Engineer',
        bio: 'Implemented modern UI overhaul with responsive light/dark theme switch and live preview sandbox.',
        skills: 'React, Tailwind CSS, Vite, Git, GitHub Actions'
      });
    } else {
      setFormData({
        name: 'Alex Rivera',
        github: 'alex-dev',
        role: 'DevOps & Cloud Engineer',
        bio: 'Automating multi-stage CI/CD pipelines, preview deployments, and branch protections.',
        skills: 'Docker, Vercel, Node.js, GitHub CI'
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.github) return;

    const newEntry = {
      id: Date.now(),
      name: formData.name.trim(),
      github: formData.github.trim(),
      role: formData.role.trim() || 'Software Contributor',
      avatar: `https://github.com/${formData.github.trim()}.png`,
      bio: formData.bio.trim() || 'New contributor practiced creating branches and opening Pull Requests.',
      skills: formData.skills 
        ? formData.skills.split(',').map(s => s.trim()).filter(Boolean)
        : ['React', 'Git'],
      status: 'pending',
      mergedDate: 'Just Now (Local Sandbox)'
    };

    setContributorsList([newEntry, ...contributorsList]);
    setSubmitted(true);
    setFormData({ name: '', github: '', role: 'Frontend Developer', bio: '', skills: 'React, Tailwind CSS, Git' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  // Filtered contributors
  const filteredContributors = useMemo(() => {
    return contributorsList.filter(c => {
      const matchesSearch = 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.github.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesStatus = 
        filterStatus === 'all' ? true : c.status === filterStatus;

      return matchesSearch && matchesStatus;
    });
  }, [contributorsList, searchQuery, filterStatus]);

  // Simulated CI/CD Pipeline Stages
  const pipelineStages = [
    {
      name: '1. Git Commit & Push',
      icon: GitCommit,
      status: 'Passed',
      time: '1.2s',
      log: '$ git checkout -b feature/rahul-ui\n$ git commit -m "feat: add light mode & UI overhaul"\n$ git push origin feature/rahul-ui\n✔ Remote ref created: refs/heads/feature/rahul-ui'
    },
    {
      name: '2. GitHub Actions Lint & CI',
      icon: ShieldCheck,
      status: 'Passed',
      time: '3.4s',
      log: 'Running CI Verification Suite...\n✔ npm run lint: CI Linting Passed Cleanly\n✔ Dependencies verified: 0 security alerts\n✔ Branch analysis: clean diff against main'
    },
    {
      name: '3. Vite Production Build',
      icon: Cpu,
      status: 'Passed',
      time: '2.1s',
      log: '$ vite build\n✔ 135 modules transformed\ndist/index.html                   0.85 kB\ndist/assets/index-D7h.css        14.20 kB\ndist/assets/index-Bk9.js        184.60 kB\n✔ Build completed in 420ms'
    },
    {
      name: '4. Vercel Preview Deploy',
      icon: Rocket,
      status: 'Active',
      time: '2.8s',
      log: 'Building deployment with Vercel CLI...\nDeploying to preview environment:\nhttps://gkm-rahul-preview.vercel.app\n✔ Status: Ready (Instant Edge CDN Cache Warm)'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      
      {/* 1. GLASSMORPHISM NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl transition-colors duration-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
              <GitPullRequest className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                  GKM-Rahul <span className="text-sky-600 dark:text-sky-400 font-semibold text-sm">Hub</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border dark:border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  LIVE CI/CD
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
                <FolderGit2 className="w-3 h-3 text-slate-400" />
                <span>github.com/gkm563/GKM-Rahul</span>
              </p>
            </div>
          </div>

          {/* Quick Nav Links & Theme Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all cursor-pointer shadow-sm"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600" />
              )}
            </button>

            {/* GitHub Repo Link */}
            <a 
              href="https://github.com/gkm563/GKM-Rahul" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <Code className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="hidden sm:inline">GitHub Repository</span>
              <span className="sm:hidden">Repo</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {/* Open PR Action */}
            <a 
              href="https://github.com/gkm563/GKM-Rahul/pulls"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-sky-500/20 transition-all cursor-pointer"
            >
              <GitPullRequest className="w-4 h-4" />
              <span>New PR</span>
            </a>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-20 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/30 text-sky-700 dark:text-sky-400 font-mono text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 animate-pulse" />
            <span>INTERACTIVE GIT & CI/CD COLLABORATION WORKBENCH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.15]">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-300">Git Pull Requests</span> & Automated Deployments.
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Collaborative sandbox for team workflows: branch creation, pull request submissions, code reviews, automated CI testing, and instant Vercel live deployments.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-left">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Contributors</div>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
                <span>{contributorsList.length} Active</span>
                <Users className="w-4 h-4 text-sky-500" />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">PR Workflow</div>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
                <span>6 Stages</span>
                <GitBranch className="w-4 h-4 text-indigo-500" />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">CI Pipeline</div>
              <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mt-0.5">
                <span>Passing</span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Deployment</div>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
                <span>Vercel Edge</span>
                <Rocket className="w-4 h-4 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* 3. INTERACTIVE TUTORIAL WORKFLOW */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-4 gap-2">
            <div>
              <div className="font-mono text-xs text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>STEP-BY-STEP PRACTICAL TUTORIAL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                How Rahul & Team Contribute via Git PR
              </h2>
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              <GitBranch className="w-3.5 h-3.5 text-sky-500" />
              <span>Branch → Commit → PR → Preview → Merge</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORKFLOW_STEPS.map((ws, i) => (
              <div 
                key={ws.step} 
                className="group bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 hover:border-sky-400 dark:hover:border-sky-500/60 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 px-3 py-1 rounded-lg border border-sky-200 dark:border-sky-500/30">
                      STEP {ws.step}
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {ws.badge || 'Workflow'}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>

                {/* Command box with copy */}
                <div className="bg-slate-100 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800/90 flex items-center justify-between gap-2 font-mono text-xs text-slate-800 dark:text-slate-300">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-sky-500 select-none font-bold">$</span>
                    <span className="truncate">{ws.command || ws.desc}</span>
                  </div>
                  <button 
                    onClick={() => handleCopy(ws.command || ws.desc, i)}
                    className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy command"
                  >
                    {copiedStep === i ? (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. LIVE PIPELINE SIMULATOR WIDGET */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold uppercase">
                <Play className="w-3.5 h-3.5" />
                <span>AUTOMATED CI/CD PIPELINE SIMULATOR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">What Happens When You Open A Pull Request</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Vercel Bot Webhook: Ready</span>
            </div>
          </div>

          {/* Pipeline stage tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activePipelineTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePipelineTab(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-sky-500/15 border-sky-400/50 text-white' 
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
                    <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {stage.status}
                    </span>
                  </div>
                  <div className="text-xs font-bold truncate">{stage.name}</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">Execution: {stage.time}</div>
                </button>
              );
            })}
          </div>

          {/* Terminal log output */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800/90 p-4 font-mono text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-slate-400 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="ml-1 text-slate-400">Terminal — {pipelineStages[activePipelineTab].name}</span>
              </div>
              <span className="text-sky-400">stdout</span>
            </div>
            <pre className="text-emerald-400 whitespace-pre-wrap leading-relaxed overflow-x-auto py-1">
              {pipelineStages[activePipelineTab].log}
            </pre>
          </div>
        </section>

        {/* 5. PR SANDBOX & CONTRIBUTORS SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form with Real-time Card Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5 shadow-lg dark:shadow-2xl">
              
              <div className="space-y-1.5">
                <div className="font-mono text-xs text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <PlusCircle className="w-4 h-4" />
                  <span>LOCAL SANDBOX SIMULATION</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Submit Contributor Profile</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill out this form to test how your profile card renders live, or follow Step 3 to add it directly to GitHub via PR!
                </p>
              </div>

              {/* Quick Fill Preset Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-slate-500">Quick fill:</span>
                <button
                  type="button"
                  onClick={() => fillSampleData('rahul')}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                >
                  Rahul Preset
                </button>
                <button
                  type="button"
                  onClick={() => fillSampleData('alex')}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                >
                  Dev Preset
                </button>
              </div>

              {submitted && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-2xl text-emerald-800 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Profile merged into local state! Check the directory on the right.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs font-mono">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Developer Name *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Kushwaha"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">GitHub Username *</label>
                  <input 
                    type="text" 
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="e.g. Dominus005era"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Role / Specialization</label>
                  <input 
                    type="text" 
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Full Stack Developer"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Bio / Contribution Details</label>
                  <textarea 
                    rows={2}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    placeholder="Briefly describe what feature or PR was worked on..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans text-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Skills (comma separated)</label>
                  <input 
                    type="text" 
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="React, Git, Vercel, Tailwind"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors font-sans"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs font-sans shadow-md shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Simulate Card Addition</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Live Interactive Preview Card */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-semibold text-slate-500 flex items-center justify-between px-1">
                <span>LIVE REAL-TIME PREVIEW:</span>
                <span className="text-sky-500 font-bold">Dynamic Rendering</span>
              </div>
              <div className="bg-white dark:bg-slate-900/80 border border-dashed border-sky-300 dark:border-sky-500/40 rounded-2xl p-5 shadow-sm space-y-3">
                <div className="flex items-start gap-3.5">
                  <img 
                    src={formData.github ? `https://github.com/${formData.github.trim()}.png` : `https://api.dicebear.com/7.x/avataaars/svg?seed=Preview`}
                    alt="Preview Avatar"
                    className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                    onError={(e) => {
                      e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name || 'Preview'}`;
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">
                        {formData.name || 'Contributor Name'}
                      </h4>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400 dark:border dark:border-amber-500/30">
                        Preview
                      </span>
                    </div>
                    <p className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold truncate">
                      @{formData.github || 'username'} • {formData.role || 'Contributor Role'}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {formData.bio || 'Your short biography or feature contribution will appear right here in real-time.'}
                </p>
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {(formData.skills || 'React, Git').split(',').map((skill, idx) => (
                    <span key={idx} className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contributors Showcase Directory with Search & Filters */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Header & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 gap-3">
              <div>
                <div className="font-mono text-xs text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>COMMUNITY DIRECTORY</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  Contributors & Pull Requests ({filteredContributors.length})
                </h3>
              </div>

              {/* Status Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 self-start sm:self-auto text-xs font-mono">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    filterStatus === 'all' 
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterStatus('merged')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    filterStatus === 'merged' 
                      ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-bold shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Merged
                </button>
                <button
                  onClick={() => setFilterStatus('pending')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    filterStatus === 'pending' 
                      ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 font-bold shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Pending PR
                </button>
              </div>
            </div>

            {/* Search Input Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search contributors by name, github, role, or skill..."
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm"
              />
            </div>

            {/* Contributor List Cards */}
            <div className="space-y-4">
              {filteredContributors.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl">
                  <Users className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">No contributors matched your filter</p>
                  <p className="text-xs text-slate-400 mt-1">Try changing your search query or filter tab.</p>
                </div>
              ) : (
                filteredContributors.map((contributor) => (
                  <div 
                    key={contributor.id} 
                    className="group bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 hover:border-sky-400 dark:hover:border-sky-500/50 transition-all shadow-sm hover:shadow-md flex flex-col sm:flex-row items-start gap-4"
                  >
                    <img 
                      src={contributor.avatar} 
                      alt={contributor.name}
                      className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                      onError={(e) => {
                        e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${contributor.name}`;
                      }}
                    />

                    <div className="space-y-2.5 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <div>
                          <h4 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            {contributor.name}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-sky-600 dark:text-sky-400 font-medium">
                            <a 
                              href={`https://github.com/${contributor.github}`} 
                              target="_blank" 
                              rel="noreferrer"
                              className="hover:underline flex items-center gap-1"
                            >
                              <span>@{contributor.github}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                            <span className="text-slate-300 dark:text-slate-700">•</span>
                            <span className="text-slate-600 dark:text-slate-400">{contributor.role}</span>
                          </div>
                        </div>

                        <span className={`font-mono text-[10px] px-2.5 py-1 rounded-md self-start sm:self-auto font-semibold border ${
                          contributor.status === 'merged' 
                            ? 'text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/30' 
                            : 'text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/30'
                        }`}>
                          {contributor.status === 'merged' ? `Merged: ${contributor.mergedDate}` : `Status: ${contributor.mergedDate}`}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                        {contributor.bio}
                      </p>

                      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                        {contributor.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="font-mono text-[10px] text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>

      </main>

      {/* 6. MODERN RESPONSIVE FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-10 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-bold text-slate-700 dark:text-slate-300">GKM-Rahul CI/CD Showcase</p>
            <p>Built for practicing Git Branching, Pull Requests, Reviews & Automated Vercel Deployments.</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="https://github.com/gkm563/GKM-Rahul" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://github.com/gkm563/GKM-Rahul/pulls" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <span>Pull Requests</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

