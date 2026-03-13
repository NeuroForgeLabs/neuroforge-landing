import SectionLabel from "./SectionLabel";

const focusAreas = [
  {
    title: "AI Infrastructure",
    description:
      "Foundational tooling and abstractions for deploying, managing, and scaling AI systems in production environments.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="10" width="20" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="17" width="20" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="5.5" r="0.8" fill="currentColor"/>
        <circle cx="6" cy="12.5" r="0.8" fill="currentColor"/>
        <circle cx="6" cy="19.5" r="0.8" fill="currentColor"/>
      </svg>
    ),
    color: "text-blue-400",
    bg: "bg-blue-500/[0.06] border-blue-500/15",
    hoverBorder: "hover:border-blue-500/35",
    number: "01",
  },
  {
    title: "RAG Pipelines",
    description:
      "Building, debugging, and optimizing Retrieval-Augmented Generation pipelines for accuracy and performance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="22.08" x2="12" y2="12" strokeLinecap="round"/>
      </svg>
    ),
    color: "text-purple-400",
    bg: "bg-purple-500/[0.06] border-purple-500/15",
    hoverBorder: "hover:border-purple-500/35",
    number: "02",
  },
  {
    title: "LLM Debugging",
    description:
      "Diagnostic tools and methodologies for identifying hallucinations, context failures, and retrieval errors in LLM pipelines.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "text-orange-400",
    bg: "bg-orange-500/[0.06] border-orange-500/15",
    hoverBorder: "hover:border-orange-500/35",
    number: "03",
  },
  {
    title: "Developer Tooling",
    description:
      "CLI tools, SDKs, and integrations that make AI-powered workflows feel native to the engineering development lifecycle.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "text-cyan-400",
    bg: "bg-cyan-500/[0.06] border-cyan-500/15",
    hoverBorder: "hover:border-cyan-500/35",
    number: "04",
  },
  {
    title: "Smart Contract Security",
    description:
      "Automated vulnerability detection, formal verification aids, and AI-enhanced audit reports for Solidity contracts.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "text-green-400",
    bg: "bg-green-500/[0.06] border-green-500/15",
    hoverBorder: "hover:border-green-500/35",
    number: "05",
  },
];

export default function EngineeringFocus() {
  return (
    <section id="focus" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_50%,rgba(56,189,248,0.04),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(167,139,250,0.04),transparent)]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel>Engineering Focus</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Where we build
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Five core domains where open-source tooling makes the greatest impact
            for AI engineers.
          </p>
        </div>

        {/* Focus areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {focusAreas.map((area, idx) => (
            <div
              key={area.title}
              className={`group relative rounded-2xl border ${area.bg} ${area.hoverBorder} p-6 transition-all duration-300 hover:bg-white/[0.03] ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Number */}
              <span className="absolute top-5 right-6 text-4xl font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors select-none">
                {area.number}
              </span>

              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 ${area.color}`}
              >
                {area.icon}
              </div>

              <h3 className="text-base font-bold text-white mb-2.5">
                {area.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
