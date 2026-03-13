"use client";

const MONO = "var(--font-jetbrains, ui-monospace, 'JetBrains Mono', monospace)";

const areas = [
  {
    n: "01", title: "AI Infrastructure",
    desc: "Foundational abstractions for deploying, managing, and scaling AI systems in production.",
    color: "#60a5fa", iconBg: "rgba(59,126,248,0.1)", iconBorder: "rgba(59,126,248,0.2)",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="17" width="20" height="5" rx="1"/><circle cx="6" cy="5.5" r="0.8" fill="currentColor"/><circle cx="6" cy="12.5" r="0.8" fill="currentColor"/><circle cx="6" cy="19.5" r="0.8" fill="currentColor"/></svg>,
  },
  {
    n: "02", title: "RAG Pipelines",
    desc: "Building, debugging, and optimizing Retrieval-Augmented Generation for accuracy and speed.",
    color: "#a78bfa", iconBg: "rgba(124,90,243,0.1)", iconBorder: "rgba(124,90,243,0.2)",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  },
  {
    n: "03", title: "LLM Debugging",
    desc: "Diagnosing hallucinations, context failures, and retrieval errors in language model pipelines.",
    color: "#fb923c", iconBg: "rgba(249,115,22,0.1)", iconBorder: "rgba(249,115,22,0.2)",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  },
  {
    n: "04", title: "Developer Tooling",
    desc: "CLI tools, SDKs, and integrations making AI workflows native to the engineering lifecycle.",
    color: "#22d3ee", iconBg: "rgba(34,211,238,0.08)", iconBorder: "rgba(34,211,238,0.15)",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  },
  {
    n: "05", title: "Smart Contract Security",
    desc: "Automated vulnerability detection and AI-enhanced audit reports for Solidity contracts.",
    color: "#22c55e", iconBg: "rgba(34,197,94,0.08)", iconBorder: "rgba(34,197,94,0.15)",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/><path d="M9 12l2 2 4-4"/></svg>,
  },
];

export default function EngineeringFocus() {
  return (
    <section id="focus" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 50% at 15% 50%, rgba(59,126,248,0.04), transparent)",
      }} />

      <div className="relative w-full max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 pb-10"
          style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="lg:col-span-2">
            <p style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#60a5fa", marginBottom: "14px" }}>
              /// engineering_focus
            </p>
            <h2 className="font-bold"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              <span className="text-white">Where we</span>
              <br />
              <span className="nfl-grad">build.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-sm" style={{ color: "#94a3b8", lineHeight: 1.7 }}>
              Five domains where open-source tooling has the highest leverage for AI engineers.
            </p>
          </div>
        </div>

        {/* Tiled grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
          {areas.map((area) => (
            <div key={area.n}
              className="group p-7 transition-colors duration-200 cursor-default"
              style={{
                background: "var(--bg)",
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-raised)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: area.iconBg, border: `1px solid ${area.iconBorder}`, color: area.color }}>
                  {area.icon}
                </div>
                <span style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em", color: area.color }}>{area.n}</span>
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: "#c8cdd8" }}>{area.title}</h3>
              <p className="text-xs" style={{ color: "#94a3b8", lineHeight: 1.75 }}>{area.desc}</p>
              <div className="mt-5 h-0.5 rounded-full transition-all duration-300 group-hover:w-12"
                style={{ width: "1.75rem", background: area.color, opacity: 0.5 }} />
            </div>
          ))}

          {/* 6th cell */}
          <div className="hidden lg:flex p-7 items-center justify-center"
            style={{ background: "var(--bg)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="text-center">
              <p style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#22d3ee", marginBottom: "6px" }}>
                coming soon
              </p>
              <p className="text-xs" style={{ color: "#94a3b8", lineHeight: 1.6 }}>
                New areas added as<br />the community grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
