import { useEffect, useState, useCallback } from 'react';

export default function Portfolio() {
  const [terminalLines, setTerminalLines] = useState([]);
  const [isTyping, setIsTyping] = useState(true);
  const [inEditor, setInEditor] = useState(false);

  const fullBio = `ABOUT CHRISTOPHER DIAZ
-------------------------------------------
Cybersecurity Analyst with hands-on experience in security 
monitoring, threat detection, and incident response. 

RECENT ACHIEVEMENTS:
• Earned CompTIA CySA+ Certification
• Investigated security alerts using Splunk & Wireshark
• Former Federal Law Enforcement background 
  (Strong investigative & documentation skills)

TECHNICAL STACK:
• SIEM: Splunk monitoring and alert triage
• NETWORK: Traffic analysis & log investigation
• FRAMEWORKS: NIST CSF and MITRE ATT&CK

Currently seeking an entry-level SOC Analyst or 
Cybersecurity Analyst role in NYC.
-------------------------------------------
^X Exit      ^O WriteOut     ^W Where Is`;

  const script = [
    { command: "cd /users/chris/portfolio", delay: 600 },
    { command: "ls -la", delay: 800, output: "total 42\n-rw-r--r--  1 chris  staff  2048 Apr 29 2026 about_me.md" },
    { command: "nano about_me.md", delay: 1000 },
  ];

  const runTerminalScript = useCallback(async () => {
    setInEditor(false);
    setIsTyping(true);
    setTerminalLines(["C:\\Users\\Chris> "]);
    
    await new Promise(r => setTimeout(r, 1000));

    for (const step of script) {
      for (let i = 0; i <= step.command.length; i++) {
        setTerminalLines(prev => {
          const lastLine = `C:\\Users\\Chris> ${step.command.slice(0, i)}`;
          return [...prev.slice(0, -1), lastLine];
        });
        await new Promise(r => setTimeout(r, 40));
      }

      if (step.output) {
        await new Promise(r => setTimeout(r, 200));
        setTerminalLines(prev => [...prev, step.output, ""]);
      } else if (step.command.includes("nano")) {
        await new Promise(r => setTimeout(r, 500));
        setInEditor(true);
        setIsTyping(false);
        await new Promise(r => setTimeout(r, 45000));
        runTerminalScript();
        return; 
      } else {
        setTerminalLines(prev => [...prev, ""]);
      }
      await new Promise(r => setTimeout(r, step.delay));
      setTerminalLines(prev => [...prev, "C:\\Users\\Chris> "]);
    }
  }, []);

  useEffect(() => {
    runTerminalScript();
  }, [runTerminalScript]);

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200 font-sans">
      {/* SIDEBAR NAVIGATION */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-950/90 border-r border-slate-800 hidden lg:flex flex-col p-6 z-50">
        <div className="mb-10 text-center">
          <h2 className="text-cyan-400 font-bold text-xl tracking-tighter">ALSEC // SOC</h2>
          <div className="mt-4 p-3 bg-slate-900 border border-slate-700 rounded-lg">
            <p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Analyst Profile</p>
            <p className="text-sm font-bold text-white">Christopher Diaz</p>
            <p className="text-[10px] text-cyan-500/80 mt-1 italic">Active SOC Session</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          {['Overview', 'Projects', 'Repos', 'Certs', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block px-4 py-2 text-sm text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded transition-all border-l-2 border-transparent hover:border-cyan-500">
              {item}
            </a>
          ))}
        </nav>
        <div className="mt-auto p-3 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] text-emerald-400 font-mono">
          LOCATION: NEW YORK CITY <br /> STATUS: MONITORING...
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="lg:ml-64 flex-1 relative p-6 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <header className="space-y-4" id="overview">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400 text-xs font-bold uppercase tracking-widest">
              Analyst Portfolio v2.0
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight">
              Cybersecurity <span className="text-cyan-500">Analyst</span>
            </h1>
          </header>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT SIDE: CYBER CAFE IMAGE */}
            <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl min-h-[400px]">
              <div className="absolute top-0 left-0 w-full p-4 z-20 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <span className="text-xs font-mono text-cyan-400 underline tracking-widest">LIVE_FEED: NODE_NYC_01</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase">Secure Connection</span>
                </div>
              </div>
              <img src="/cyber-cafe.jpg" alt="Cyber Cafe" className="w-full h-full object-cover opacity-80" />
            </div>

            {/* RIGHT SIDE: TERMINAL */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-black border border-slate-800 rounded-2xl flex-1 flex flex-col overflow-hidden shadow-2xl min-h-[500px]">
                <div className="bg-slate-900 px-4 py-2 flex justify-between items-center border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 italic">
                    {inEditor ? 'GNU nano 5.4' : 'zsh — chris@soc-node'}
                  </span>
                </div>
                <div className={`flex-1 p-4 font-mono text-sm leading-relaxed ${inEditor ? 'bg-[#0a0a0a]' : ''}`}>
                  {!inEditor ? (
                    <div className="text-emerald-500">
                      {terminalLines.map((line, idx) => <div key={idx}>{line}</div>)}
                      {isTyping && <span className="inline-block w-2 h-4 bg-emerald-500 animate-pulse ml-1" />}
                    </div>
                  ) : (
                    <div className="text-slate-200">
                      <div className="text-white bg-slate-800 px-2 mb-2 inline-block">File: about_me.md</div>
                      <div className="whitespace-pre-wrap">{fullBio}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CLICKABLE FEATURED PROJECTS */}
          <section id="projects" className="space-y-8">
             <h2 className="text-3xl font-bold border-l-4 border-cyan-500 pl-4 text-white">Featured Projects</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'SOC Alert Triage Lab', desc: 'Investigated simulated alerts using Splunk, validated indicators, and documented next-step response actions.', url: 'https://github.com/chris12x1/cybersecurity-projects' },
                  { title: 'Splunk Detection Lab', desc: 'Built detections for brute-force login attempts and suspicious authentication behavior.', url: 'https://github.com/chris12x1/cybersecurity-projects' },
                  { title: 'Wireshark Threat Hunt', desc: 'Analyzed packet captures to identify DNS anomalies and C2 traffic.', url: 'https://github.com/chris12x1/Foundations_Lab_Final' }
                ].map((p, i) => (
                  <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/40 hover:bg-slate-900 transition-all group block">
                    <h3 className="text-white font-bold mb-3 group-hover:text-cyan-400 flex justify-between items-center">
                      {p.title}
                      <span className="text-xs text-slate-600 group-hover:text-cyan-600">VIEW REPO →</span>
                    </h3>
                    <p className="text-sm text-slate-400">{p.desc}</p>
                  </a>
                ))}
             </div>
          </section>

          {/* CLICKABLE REPOS AND CERTS */}
          <div className="grid md:grid-cols-2 gap-12">
            <section id="repos" className="space-y-6">
              <h2 className="text-2xl font-bold text-white">GitHub Repositories</h2>
              <div className="space-y-3">
                {[
                  { name: 'cybersecurity-projects', url: 'https://github.com/chris12x1/cybersecurity-projects' },
                  { name: 'devseccon25-proof', url: 'https://github.com/chris12x1/devseccon25-proof' },
                  { name: 'Foundations_Lab_Final', url: 'https://github.com/chris12x1/Foundations_Lab_Final' }
                ].map(repo => (
                  <a key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-900/30 border border-slate-800 rounded-xl text-sm font-mono text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all">
                    {repo.name}
                  </a>
                ))}
              </div>
            </section>

            <section id="certs" className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Certifications</h2>
              <ul className="space-y-3">
                {[
                  { name: '🏆 CompTIA CySA+', url: 'https://www.credly.com/' },
                  { name: '🏆 Splunk Core Certified User', url: 'https://www.credly.com/' },
                  { name: '🏆 Google Cybersecurity Certificate', url: 'https://www.coursera.org/' }
                ].map(cert => (
                  <li key={cert.name}>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-slate-300 text-sm hover:text-cyan-400 hover:underline">
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* CONTACT */}
          <section id="contact" className="p-10 bg-slate-900 border border-slate-800 rounded-3xl text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Contact Analyst</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">Actively pursuing SOC Analyst and Cybersecurity Analyst roles in NYC.</p>
            <div className="flex justify-center gap-6 text-cyan-400 font-mono text-sm">
              <a href="mailto:christopher.diaz87@yahoo.com" className="hover:underline">Email</a>
              <a href="https://linkedin.com/in/christopherdiaz87" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://github.com/chris12x1" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            </div>
          </section>

          <footer className="text-center text-slate-600 text-xs pb-10">
            © 2026 Christopher Diaz // Designed for Security Operations
          </footer>
        </div>
      </main>
    </div>
  );
}