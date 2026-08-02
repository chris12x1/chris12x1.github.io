export default function Portfolio() {
  const badges = ['CySA+', 'Splunk', 'Threat Detection', 'SOC Ready'];
  const projects = [
    {
      title: 'Splunk Brute Force Detection Lab',
      desc: 'Created detections for repeated failed logins, investigated suspicious source IPs, and documented response actions.'
    },
    {
      title: 'Wireshark Malware Traffic Analysis',
      desc: 'Analyzed packet captures to identify abnormal DNS requests and command-and-control patterns.'
    },
    {
      title: 'Vulnerability Assessment Lab',
      desc: 'Performed scans with OpenVAS, prioritized findings, and proposed remediation steps.'
    },
    {
      title: 'DevSecCon25 Challenge',
      desc: 'Top 5 finish using Python automation and API-based workflows in a security challenge environment.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#06b6d4,transparent_25%),radial-gradient(circle_at_80%_10%,#22c55e,transparent_20%),radial-gradient(circle_at_50%_80%,#3b82f6,transparent_25%)]" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        <header className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Christopher Diaz</p>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 leading-tight">
              SOC Analyst <span className="text-cyan-400">&amp;</span> Threat Detection
            </h1>

            <p className="mt-5 text-slate-300 text-lg">
              CySA+ certified cybersecurity professional focused on SIEM monitoring, alert triage, log analysis, incident response, and defensive security operations.
            </p>

            <div className="mt-5 p-4 rounded-2xl bg-black/40 border border-cyan-500/30 font-mono text-sm text-green-400 whitespace-pre-line">
              {'C:\\Users\\Chris&gt; monitoring threats...\n[OK] Splunk connected\n[OK] Alerts triaged\n[OK] SOC ready'}
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              {badges.map((badge) => (
                <span key={badge} className="px-3 py-1 text-sm rounded-full bg-slate-900 border border-slate-700">
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a className="px-5 py-3 rounded-2xl bg-cyan-500 text-slate-950 font-semibold hover:scale-105 transition" href="#projects">
                View Projects
              </a>
              <a className="px-5 py-3 rounded-2xl border border-slate-700 hover:bg-slate-900 transition" href="#contact">
                Contact
              </a>
              <a className="px-5 py-3 rounded-2xl border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition" href="#">
                Download Resume
              </a>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl">
            <div className="text-cyan-400 text-sm mb-3">LIVE STATUS</div>
            <ul className="space-y-3 text-slate-300">
              <li>✔ CompTIA CySA+</li>
              <li>✔ Splunk Core Certified User</li>
              <li>✔ Per Scholas Cybersecurity Program</li>
              <li>✔ Seeking Entry-Level SOC Role</li>
              <li>📍 New York City / Remote</li>
            </ul>
          </div>
        </header>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="font-semibold mb-2">Detection &amp; Monitoring</h3>
            <p className="text-slate-400 text-sm">Splunk, SIEM dashboards, alert triage, IOC review.</p>
          </div>
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="font-semibold mb-2">Network Analysis</h3>
            <p className="text-slate-400 text-sm">Wireshark, Nmap, traffic inspection, reconnaissance.</p>
          </div>
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="font-semibold mb-2">Incident Response</h3>
            <p className="text-slate-400 text-sm">Investigation workflows, documentation, containment support.</p>
          </div>
        </section>

        <section id="projects" className="space-y-5">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div key={project.title} className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-slate-400 mt-3">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
            <h2 className="text-2xl font-bold">Certifications</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>CompTIA CySA+</li>
              <li>Splunk Core Certified User</li>
              <li>Google Cybersecurity Certificate</li>
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

        <footer className="pt-6 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© 2026 Christopher Diaz • Built for hiring managers, recruiters, and SOC teams.</span>
          <span className="text-cyan-400">Available for SOC Analyst Opportunities</span>
        </footer>
      </div>
    </div>
  );
}
