"use client";

const MONO = "var(--font-jetbrains, ui-monospace, 'JetBrains Mono', monospace)";

const projects = [
  {
    num: "01",
    name: "OpenAudit AI",
    category: "Smart Contract Security",
    description: "Deterministic static analysis engine for Solidity. Finds vulnerabilities before deployment — rule-based, reproducible, no AI hallucinations.",
    href: "https://openaudit-ai-landing.vercel.app/",
    githubUrl: "https://github.com/NeuroForgeLabs/openaudit-ai",
    tags: ["Solidity", "AST Parsing", "Security"],
    accentColor: "#60a5fa",
    tagBg: "rgba(59,126,248,0.1)",
    tagBorder: "rgba(59,126,248,0.22)",
    tagColor: "#60a5fa",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    num: "02",
    name: "RAG Doctor",
    category: "Pipeline Diagnostics",
    description: "Diagnoses structural failures in Retrieval-Augmented Generation pipelines. Tells you exactly where and why your RAG breaks.",
    href: "https://rag-doctor-landing.vercel.app/",
    githubUrl: "https://github.com/NeuroForgeLabs/rag-doctor",
    tags: ["RAG", "LLM", "Evals"],
    accentColor: "#a78bfa",
    tagBg: "rgba(124,90,243,0.1)",
    tagBorder: "rgba(124,90,243,0.22)",
    tagColor: "#a78bfa",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    num: "03",
    name: "CodePilot AI",
    category: "Interview Preparation",
    description: "RAG-powered coding interview prep. AI hints that understand your specific solution and guide you toward correctness, not just the answer.",
    href: "https://codepilotai.dev/",
    githubUrl: "https://github.com/NeuroForgeLabs/CodePilot-AI",
    tags: ["RAG", "AI Hints", "LeetCode"],
    accentColor: "#22d3ee",
    tagBg: "rgba(34,211,238,0.08)",
    tagBorder: "rgba(34,211,238,0.18)",
    tagColor: "#22d3ee",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="w-full max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-0 pb-8"
          style={{ borderBottom: "1px solid var(--border)" }}>
          <div>
            <p style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#60a5fa", marginBottom: "12px" }}>
              /// open_source_projects
            </p>
            <h2 className="font-bold"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              <span className="text-white">Tools built</span>
              <br />
              <span className="nfl-grad">for builders.</span>
            </h2>
          </div>
          <a href="https://github.com/NeuroForgeLabs" target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-sm mb-1 transition-colors"
            style={{ color: "#22d3ee" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}>
            All on GitHub
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        {/* Rows */}
        {projects.map((p) => (
          <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
            className="group flex flex-col md:flex-row md:items-center gap-5 py-7 px-4 -mx-4 rounded-xl transition-all duration-200"
            style={{ borderBottom: "1px solid var(--border)" }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.025)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
            }}
          >
            {/* Index */}
            <div className="hidden md:flex w-10 flex-shrink-0">
              <span style={{ fontFamily: MONO, fontSize: "0.62rem", letterSpacing: "0.1em", color: "#475569" }}>{p.num}</span>
            </div>

            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: p.tagBg,
                border: `1px solid ${p.tagBorder}`,
                color: p.accentColor,
              }}>
              {p.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 md:px-5">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b" }}>
                  {p.category}
                </span>
                <span className="inline-block w-1 h-1 rounded-full" style={{ background: "#475569" }} />
                <span style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: p.accentColor, opacity: 0.7 }}>
                  active
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ letterSpacing: "-0.02em", color: p.tagColor }}>
                {p.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8", maxWidth: "56ch" }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className="nfl-tag" style={{ background: p.tagBg, color: p.tagColor, border: `1px solid ${p.tagBorder}` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 flex items-center gap-1.5 transition-all duration-200 group-hover:gap-2.5"
              style={{ color: "#475569" }}>
              <span className="hidden md:inline" style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                view
              </span>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        ))}
        <div style={{ height: 1, background: "var(--border)" }} />
      </div>
    </section>
  );
}
