import { useEffect, useState, useCallback } from 'react';

export default function Portfolio() {
  const [terminalLines, setTerminalLines] = useState([]);
  const [isTyping, setIsTyping] = useState(true);
  const [inEditor, setInEditor] = useState(false);

  // Re-Adding your Education history as data for easy maintenance
  const educationData = [
    {
      school: 'CUNY School of Professional Studies',
      track: 'B.S. Information Science | Sep \'26 – Present',
      details: [
        'Pursuing a Bachelor of Science in Information Science, building on my Associate\'s degree in Computer Programming.',
        'Coursework spans cybersecurity, database management, and information architecture.'
      ]
    },
    {
      school: 'University of Arizona',
      track: 'CyberSkills2Work — Security Control Assessor | Mar \'26 – Jul \'26',
      details: [
        'National Cybersecurity Workforce Development program focused on Security Control Assessment and Vulnerability Assessment.',
        'Trained on NIST SP 800-53/800-37, SSP review, and security documentation/reporting.'
      ]
    },
    {
      school: 'The Knowledge House',
      track: 'Cybersecurity Fellow | Feb \'26 – Sep \'26',
      details: [
        '24-week Cybersecurity & Cloud Security Engineering fellowship preparing fellows for Security Operations, Cloud Security, and DevSecOps roles.',
        'Hands-on training in Linux hardening, network traffic analysis (Wireshark/tcpdump), IDS (Suricata/Snort), and AWS cloud security.'
      ]
    },
    {
      school: 'Per Scholas',
      track: 'SOC Analyst Track | Nov \'25 – Mar \'26',
      details: [
        'Monitored alerts using Splunk SIEM; analyzed logs, network traffic, and endpoint activity.',
        'Performed root cause analysis and built SIEM dashboards.',
        'Executed IR playbooks aligned with NIST/MITRE ATT&CK.'
      ]
    },
    {
      school: 'Wood Tobe Coburn',
      track: 'Associate\'s Degree, Computer Programming | Sep \'12 – Jan \'14',
      details: [
        'Overall GPA ≈ 3.34.',
        'Mastered Java, Visual Basic, and object-oriented programming concepts.'
      ]
    }
  ];

  // The simplified bio from image_17.png without forced newlines for cleaner text flow
  const refinedBioText = `ABOUT CHRISTOPHER DIAZ
-------------------------------------------
Cybersecurity Analyst with hands-on experience in security monitoring, threat detection, and incident response through multiple cybersecurity training programs including Per Scholas, The Knowledge House, and CyberSkills2Work (University of Arizona).

I hold CompTIA Security+, CySA+, and the CSAP stackable certification, with practical experience investigating security alerts, analyzing logs, and identifying indicators of compromise using tools such as Splunk, Wireshark, and Nmap.

My background in federal law enforcement strengthened my investigative, analytical, and documentation skills — all critical in modern Security Operations Centers.

I am currently seeking an entry-level SOC Analyst or Cybersecurity Analyst role where I can contribute to threat detection, incident response, and security monitoring while continuing to grow in security operations.
-------------------------------------------
^X Exit      ^O WriteOut     ^W Where Is`;

  const script = [
    { command: "cd /users/chris/portfolio", delay: 600 },
    { command: "ls -la", delay: 800, output: "total 42\n-rw-r--r--  1 chris  staff  1024 Apr 29 2026 about_me.md" },
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
        await new Promise(r => setTimeout(r, 50000)); // Show for 50s
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
          {['Overview', 'Skills', 'Projects', 'Repos', 'Certs', 'Education', 'Contact'].map((item) => (
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
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <header className="space-y-4" id="overview">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400 text-xs font-bold uppercase tracking-widest">
              Analyst Portfolio v2.0
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-[0.9]">
              Cybersecurity <span className="text-cyan-500">Analyst</span>
            </h1>
          </header>

          {/* Restoring the ANALYTICS BAR (image_12.png data) */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/30 p-6 rounded-2xl border border-slate-800 shadow-xl">
              {[
                  { label: "Credentials", value: "CySA+ · CSAP", color: "text-amber-400" },
                  { label: "SIEM Tool", value: "Splunk", color: "text-cyan-400" },
                  { label: "Lab Work", value: "8+ Repos", color: "text-emerald-400" },
                  { label: "SecOps", value: "n8n + AI", color: "text-purple-400" },
              ].map((ver) => (
                  <div key={ver.label} className="bg-slate-950 p-5 rounded-xl border border-slate-700 text-center space-y-1">
                      <p className="text-[11px] text-slate-500 uppercase font-bold tracking-widest">{ver.label}</p>
                      <p className={`text-2xl font-mono ${ver.color}`}>{ver.value}</p>
                  </div>
              ))}
          </section>

          {/* CYBER CAFE & TERMINAL GRID (with cleaner text flow) */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT SIDE: CYBER CAFE */}
            <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl min-h-[400px]">
              <div className="absolute top-0 left-0 w-full p-4 z-20 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <span className="text-xs font-mono text-cyan-400 underline tracking-widest">LIVE_FEED: NODE_NYC_01</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase">Secure Connection</span>
                </div>
              </div>
              <img src="/cyber-cafe.jpg" alt="Cyber Cafe Visual Intel" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" />
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
                <div className={`flex-1 p-4 font-mono text-sm leading-relaxed overflow-y-auto ${inEditor ? 'bg-[#0a0a0a]' : ''}`}>
                  {!inEditor ? (
                    <div className="text-emerald-500">
                      {terminalLines.map((line, idx) => <div key={idx} className="whitespace-pre-wrap">{line}</div>)}
                      {isTyping && <span className="inline-block w-2 h-4 bg-emerald-500 animate-pulse ml-1" />}
                    </div>
                  ) : (
                    <div className="text-slate-200">
                      <div className="text-white bg-slate-800 px-2 mb-2 inline-block">File: about_me.md</div>
                      {/* Cleaner flowing text for about_me.md */}
                      <div className="whitespace-pre-wrap leading-loose">
                        {refinedBioText}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Restoring the SKILLS MATRIX (LinkedIn Update) */}
          <section id="skills" className="space-y-8 pt-10">
              <h2 className="text-3xl font-bold border-l-4 border-cyan-500 pl-4 text-white">Skills Matrix</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { category: "SecOps", icon: "🛡️", skills: ["SIEM Monitoring", "Alert Triage", "Log Analysis", "Vulnerability Management", "SOC Operations", "Security Monitoring", "Vulnerability Assessment"] },
                      { category: "Threat Management", icon: "🎯", skills: ["Threat Detection", "Incident Response", "IOC Identification", "Malware Analysis (Basic)", "MITRE ATT&CK Framework", "Threat Hunting", "Threat Intelligence"] },
                      { category: "Tools & Infra", icon: "🛠️", skills: ["Splunk", "Wireshark", "Nmap", "Active Directory", "Docker", "Cloud Security (AWS)", "tcpdump", "Linux", "Network Security", "Windows System Admin"] },
                      { category: "Engineering", icon: "⚙️", skills: ["Python", "Bash", "Security Automation", "DevSecOps", "Risk Assessment", "NIST RMF", "NIST SP 800-53", "IaC (Terraform)"] },
                  ].map((skillBlock) => (
                      <div key={skillBlock.category} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col hover:border-cyan-500/30 transition-all group">
                          <div className="flex items-center gap-3">
                              <span className="text-2xl">{skillBlock.icon}</span>
                              <h3 className="text-white font-bold text-lg">{skillBlock.category}</h3>
                          </div>
                          <div className="flex flex-wrap gap-2 flex-1">
                              {skillBlock.skills.map((skill) => (
                                  <span key={skill} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-medium">{skill}</span>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </section>

          {/* PROJECT DEEP DIVE (6 BOXES, Clickable) */}
          <section id="projects" className="pt-10 space-y-8 border-t border-slate-800">
             <h2 className="text-3xl font-bold pl-4 text-white">Security Operations Projects</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                {[
                  // Restore core labs
                  { title: 'T-LAB 03: Operational Automated Hunt', tech: 'Python / Subprocess / JSON', desc: 'Analyzed failed login logs, isolated attacker IPs via Python, and generated JSON threat reports.', url: 'https://github.com/chris12x1/TKH-Phase1/tree/main/Week3-Artifact' },
                  { title: 'T-LAB 04: Secure Containerized Node', tech: 'Docker / Nmap / Docker Compose', desc: 'Designed hardened multi-tier architecture, engineered network segmentation frontend/backend, and validated isolated environments.', url: 'https://github.com/chris12x1/TKH-Phase1/tree/main/Week4-Artifact' },
                  { title: 'T-LAB 05: Enterprise Identity & AD', tech: 'Windows Server 2022 / GPO / Ubuntu', desc: 'Built a multi-platform Active Directory environment (titan.local), automated provisioning with PowerShell, and configured centralized privilege escalation.', url: 'https://github.com/chris12x1/TKH-Phase1/tree/main/Week5-Artifact' },
                  
                  // NEW LAB SWAP: Autonomous Discovery
                  { title: 'AI Orchestration: Autonomous Discovery', tech: 'MCP / Claude / WSL2 / Nuclei', desc: 'Engineered a custom bridge (Windows/WSL2) using MCP. An AI agent (Claude) autonomously selects and executes Nmap/Nuclei based on live reconnaissance data.', url: 'https://github.com/chris12x1/cybersecurity-projects/blob/main/vulnerability-management/Autonomous%20Vulnerability%20Discovery%20%26%20AI%20Orchestration.md' },
                  
                  // Keep automation and remaining lab
                  { title: 'Phishing Triage Automation', tech: 'n8n / Gemini AI / VirusTotal', desc: 'Engineered n8n SecOps pipeline. Automated phishing analysis with AI, defanged URLs, ran VT scans, and wrote logic to detect urgency tactics.', url: 'https://github.com/chris12x1/cybersecurity-projects/blob/main/secops-automation/phishing-triage-ai.md' },
                  { title: 'T-LAB 06: Troubleshooting & Hardening', tech: 'OSI Model / Linux / UFW / Docker', desc: 'Diagnosed L3–L7 system failures using OSI model, performed multi-container remediation, and implemented SSH/Firewall hardening best practices.', url: 'https://github.com/chris12x1/TKH-Phase1/tree/main/Week6-Artifact' }
                ].map((p, i) => (
                  <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/40 hover:bg-slate-900 transition-all group block space-y-4">
                    <div className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest">{p.tech}</div>
                    <h3 className="text-white font-bold group-hover:text-cyan-400 text-xl flex justify-between items-center leading-tight">
                      {p.title}
                      <span className="text-xs text-slate-600 group-hover:text-cyan-600 whitespace-nowrap ml-2">VIEW REPO →</span>
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.desc}</p>
                  </a>
                ))}
             </div>
          </section>

          {/* Restoring Clickable REPOS AND CERTS */}
          <div className="grid md:grid-cols-2 gap-12 pt-10 border-t border-slate-800">
            <section id="repos" className="space-y-6">
              <h2 className="text-2xl font-bold text-white pl-4">GitHub Repositories</h2>
              <div className="space-y-3">
                {[
                  { name: 'cybersecurity-projects', url: 'https://github.com/chris12x1/cybersecurity-projects' },
                  { name: 'TKH-Phase1', url: 'https://github.com/chris12x1/TKH-Phase1' },
                  { name: 'CTF-Writeups', url: 'https://github.com/chris12x1/CTF-Writeups' },
                  { name: 'devseccon25-proof', url: 'https://github.com/chris12x1/devseccon25-proof' },
                ].map(repo => (
                  <a key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-900/30 border border-slate-800 rounded-xl text-sm font-mono text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all">
                    {repo.name}
                  </a>
                ))}
              </div>
            </section>

            <section id="certs" className="space-y-6">
              <h2 className="text-2xl font-bold text-white pl-4">Validated Credentials</h2>
              <ul className="space-y-3 text-slate-300 text-sm">
                {[
                  { name: '🏆 CompTIA Security Analytics Professional (CSAP)', url: 'https://www.credly.com/badges/aebb286d-8a5d-41cd-83ae-239582d54371/public_url' },
                  { name: '🏆 CompTIA CySA+', url: 'https://www.credly.com/badges/4486a634-ee2e-4c99-8af9-ac6820c38343/linked_in_profile' },
                  { name: '🏆 CompTIA Security+', url: 'https://www.credly.com/badges/b8e73a4d-6ff6-42b7-b4ac-0645108ab5a2/public_url' },
                  { name: '🏆 Splunk Core Certified User', url: 'https://www.credly.com/badges/01cc4b8c-4646-4232-bdd0-54b12b1336d5/public_url' },
                  { name: '🏆 Google Cybersecurity Certificate', url: 'https://www.credly.com/badges/92069620-a4f1-49d8-86bd-013b2279aa9c/public_url' },
                  { name: '🏆 Cisco CyberOps Associate', url: 'https://www.credly.com/badges/204e191f-d79b-4cd4-a1a1-f611090e4326/public_url' },
                  { name: '🏆 Cisco Network Defense', url: 'https://www.credly.com/badges/41780a5a-e5d6-402a-a3c0-cc8714016e73/linked_in_profile' },
                  { name: '🏆 Mastercard Cybersecurity Simulation', url: 'https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_69264a9a2cc14a8b1694a976_1769376359416_completion_certificate.pdf' },
                  { name: '🏆 Advent of Cyber 2025 Completion', url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ZUIEYKQUNA.pdf' }
                ].map(cert => (
                  <li key={cert.name}>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 hover:underline">
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Restoring detailed EDUCATION */}
          <section id="education" className="pt-10 space-y-8 border-t border-slate-800">
             <h2 className="text-3xl font-bold pl-4 text-white">Education History</h2>
             <div className="grid md:grid-cols-2 gap-8">
                {educationData.map((edu) => (
                  <div key={edu.school} className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl space-y-3">
                     <h3 className="text-white font-bold text-lg">{edu.school}</h3>
                     <p className="text-sm text-cyan-400">{edu.track}</p>
                     <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                       {edu.details.map((detail, index) => (
                         <li key={index}>{detail}</li>
                       ))}
                     </ul>
                  </div>
                ))}
             </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="p-10 bg-slate-900 border border-slate-800 rounded-3xl text-center space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">Connection Interface</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">Currently open to SOC Analyst and Cybersecurity Analyst roles in NYC and Remote.</p>
            <div className="flex justify-center flex-wrap gap-x-12 gap-y-4 text-cyan-400 font-mono text-sm pt-4">
              <a href="mailto:christopher.diaz87@yahoo.com" className="hover:underline">Email</a>
              <a href="https://linkedin.com/in/christopherdiaz87" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://github.com/chris12x1" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            </div>
          </section>

          <footer className="text-center text-slate-600 text-xs pb-10">
            © 2026 Christopher Diaz // Designed for Security Operations // CySA+ · Security+ · CSAP Certified
          </footer>
        </div>
      </main>
    </div>
  );
}