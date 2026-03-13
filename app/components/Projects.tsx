import SectionLabel from "./SectionLabel";

const projects = [
  {
    name: "OpenAudit AI",
    tagline: "Smart Contract Security",
    description:
      "Deterministic smart contract security analysis for Solidity using static analysis and rule engines.",
    href: "https://github.com/NeuroForgeLabs/openaudit-ai",
    tags: ["Solidity", "Static Analysis", "Security"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accentColor: "from-blue-500/20 to-blue-600/5",
    borderColor: "group-hover:border-blue-500/40",
    iconColor: "text-blue-400",
    tagColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  },
  {
    name: "RAG Doctor",
    tagline: "Pipeline Diagnostics",
    description:
      "Diagnostic tool for detecting structural failures in Retrieval-Augmented Generation pipelines.",
    href: "https://github.com/NeuroForgeLabs/rag-doctor",
    tags: ["RAG", "LLM", "Diagnostics"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="15" r="1.5" fill="currentColor"/>
      </svg>
    ),
    accentColor: "from-purple-500/20 to-purple-600/5",
    borderColor: "group-hover:border-purple-500/40",
    iconColor: "text-purple-400",
    tagColor: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  },
  {
    name: "CodePilot AI",
    tagline: "Interview Preparation",
    description:
      "AI-powered coding interview preparation platform using RAG and AI-guided hints.",
    href: "https://github.com/NeuroForgeLabs/CodePilot-AI",
    tags: ["RAG", "AI Hints", "Coding"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    accentColor: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "group-hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
    tagColor: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      {/* Section glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(96,165,250,0.04),transparent)]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel>Open Source Projects</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tools built for builders
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Production-ready infrastructure for the modern AI engineering stack.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 card-glow overflow-hidden flex flex-col transition-all duration-300 ${project.borderColor}`}
            >
              {/* Card gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Top row: icon + arrow */}
              <div className="relative flex items-start justify-between mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center ${project.iconColor}`}
                >
                  {project.icon}
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                >
                  <path
                    d="M3 13L13 3M13 3H6M13 3v7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative flex-1 flex flex-col">
                <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase mb-1.5">
                  {project.tagline}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`tag-pill ${project.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <div className="flex items-center gap-1.5 mt-5 text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>NeuroForgeLabs / {project.name.toLowerCase().replace(/\s+/g, "-")}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
