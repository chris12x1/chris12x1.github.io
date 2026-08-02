import { useEffect, useState } from 'react';

export default function Portfolio() {
  const badges = ['CySA+', 'Splunk', 'Threat Detection', 'SOC Ready', 'Incident Response'];
  const repos = [
    'cybersecurity-projects',
    'devseccon25-proof',
    'Foundations_Lab_Final',
    'TKH-Phase1'
  ];
  const fullText = 'C:\\Users\\Chris> monitoring threats...';
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i += 1;
      if (i >= fullText.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    { title: 'Splunk Detection Lab', desc: 'Built detections for brute-force login attempts and suspicious authentication behavior.' },
    { title: 'Wireshark Threat Hunt', desc: 'Analyzed packet captures to identify DNS anomalies and command-and-control traffic.' },
    { title: 'OpenVAS Assessment', desc: 'Ran scans, prioritized findings, and recommended remediation actions.' },
    { title: 'DevSecCon25 Top 5', desc: 'Used Python automation and APIs to place top 5 in a security challenge.' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#06b6d4,transparent_25%),radial-gradient(circle_at_80%_10%,#22c55e,transparent_20%),radial-gradient(circle_at_50%_80%,#3b82f6,transparent_25%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto p-6 md:p-12 relative z-10 space-y-10">
        <nav className="flex justify-between items-center">
          <div className="font-bold text-cyan-400 text-xl">Christopher Diaz</div>
          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#projects">Projects</a>
            <a href="#repos">GitHub</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <header className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">Cybersecurity Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight">SOC Analyst & Threat Detection</h1>
            <p className="mt-5 text-slate-300 text-lg max-w-xl">CySA+ certified analyst focused on SIEM monitoring, alert triage, incident response, vulnerability management, and blue-team operations.</p>

            <div className="mt-6 p-5 rounded-2xl bg-black/50 border border-cyan-500/30 font-mono text-green-400 min-h-[120px]">
              <div>{typed}<span className="animate-pulse">|</span></div>
              <div className="mt-2">[OK] Splunk Connected</div>
              <div>[OK] Alerts Triaged</div>
              <div>[OK] Ready for Hire</div>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              {badges.map((b) => <span key={b} className="px-3 py-1 rounded-full text-sm border border-slate-700 bg-slate-900">{b}</span>)}
            </div>

            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#projects" className="px-5 py-3 rounded-2xl bg-cyan-500 text-slate-950 font-bold hover:scale-105 transition">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-2xl border border-slate-700 hover:bg-slate-900">Hire Me</a>
              <a href="#" className="px-5 py-3 rounded-2xl border border-emerald-500 text-emerald-400">Download Resume</a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div className="text-cyan-400 text-sm mb-4">LIVE STATUS</div>
              <ul className="space-y-3 text-slate-300">
                <li>✔ CompTIA CySA+</li>
                <li>✔ Splunk Core Certified User</li>
                <li>✔ Per Scholas Graduate</li>
                <li>✔ Open to Remote / NYC / NJ</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <div className="text-cyan-400 text-sm mb-3">Mock SOC Dashboard</div>
              <div className="space-y-3">
                <div className="h-3 bg-slate-700 rounded w-full"><div className="h-3 bg-cyan-400 rounded w-4/5"></div></div>
                <div className="h-3 bg-slate-700 rounded w-full"><div className="h-3 bg-emerald-400 rounded w-2/3"></div></div>
                <div className="h-3 bg-slate-700 rounded w-full"><div className="h-3 bg-red-400 rounded w-1/3"></div></div>
              </div>
            </div>
          </div>
        </header>

        <section id="projects">
          <h2 className="text-3xl font-bold mb-5">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p) => (
              <div key={p.title} className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:-translate-y-1 transition">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-slate-400 mt-3">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="repos">
          <h2 className="text-3xl font-bold mb-5">GitHub Repositories</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {repos.map((repo) => (
              <div key={repo} className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
                <div className="font-semibold">{repo}</div>
                <div className="text-sm text-slate-400 mt-2">GitHub portfolio repository showcasing hands-on security work.</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
            <h2 className="text-2xl font-bold">Certifications</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>🏆 CompTIA CySA+</li>
              <li>🏆 Splunk Core Certified User</li>
              <li>🏆 Google Cybersecurity Certificate</li>
            </ul>
          </div>

          <div id="contact" className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
            <h2 className="text-2xl font-bold">Contact</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>GitHub: chris12x1</li>
              <li>LinkedIn: /in/christopherdiaz87</li>
              <li>Email: christopher.diaz87@yahoo.com</li>
            </ul>
          </div>
        </section>

        <footer className="pt-6 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-3">
          <span>© 2026 Christopher Diaz</span>
          <span className="text-cyan-400">Ready for SOC Analyst Opportunities</span>
        </footer>
      </div>
    </div>
  );
}
