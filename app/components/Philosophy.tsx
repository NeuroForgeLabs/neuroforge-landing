"use client";

const MONO = "var(--font-jetbrains, ui-monospace, 'JetBrains Mono', monospace)";

const layers = [
  {
    n: "01", title: "Deterministic Core",
    desc: "Static analysis, rule engines, AST parsing. Guaranteed, reproducible, auditable outcomes every time.",
    color: "#60a5fa",
    codes: ["static_analysis()", "rule_engine.eval()", "ast.parse()"],
    codeBg: "rgba(59,126,248,0.08)", codeBorder: "rgba(59,126,248,0.18)", codeColor: "#60a5fa",
  },
  {
    n: "02", title: "AI Explanation Layer",
    desc: "LLM-powered natural language summaries, semantic search, context-aware suggestions on top.",
    color: "#a78bfa",
    codes: ["llm.explain(result)", "embed.search(query)", "ctx.window(4096)"],
    codeBg: "rgba(124,90,243,0.08)", codeBorder: "rgba(124,90,243,0.18)", codeColor: "#a78bfa",
  },
  {
    n: "03", title: "Trustworthy Output",
    desc: "Explainable findings with auditable traces. Engineers act on results with full confidence.",
    color: "#22d3ee",
    codes: ["audit.trace()", "explain.why()", "verify.result()"],
    codeBg: "rgba(34,211,238,0.06)", codeBorder: "rgba(34,211,238,0.15)", codeColor: "#22d3ee",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 55% 55% at 100% 50%, rgba(124,90,243,0.05), transparent)",
      }} />

      <div className="relative w-full max-w-5xl mx-auto px-6">

        {/* Full-width headline */}
        <div className="mb-16 pb-12" style={{ borderBottom: "1px solid var(--border)" }}>
          <p style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#60a5fa", marginBottom: "20px" }}>
            /// design_philosophy
          </p>
          <h2 className="font-extrabold" style={{
            fontSize: "clamp(3rem, 7.5vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}>
            AI <span className="nfl-grad">assists.</span><br />
            <span style={{ color: "#a78bfa" }}>Logic decides.</span>
          </h2>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>
            <p className="text-base mb-7" style={{ color: "#94a3b8", lineHeight: 1.8, maxWidth: "44ch" }}>
              Every tool we build rests on one conviction:{" "}
              <span style={{ color: "#60a5fa" }}>deterministic systems make guarantees</span>.
              AI cannot. When you need a reproducible, auditable answer, rules beat reasoning.
            </p>
            <p className="text-base mb-10" style={{ color: "#94a3b8", lineHeight: 1.8, maxWidth: "44ch" }}>
              AI belongs in the{" "}
              <span style={{ color: "#a78bfa" }}>explanation layer</span> — translating results into natural language, surfacing semantic context, suggesting next steps. Not computing the answer itself.
            </p>

            {/* Pull quote */}
            <div className="pl-5 py-1" style={{ borderLeft: "2px solid #a78bfa" }}>
              <p className="text-sm italic" style={{ color: "#c8cdd8", lineHeight: 1.7 }}>
                &ldquo;AI should assist engineering, not replace deterministic systems.&rdquo;
              </p>
              <p style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", marginTop: "8px" }}>
                — Core Design Principle
              </p>
            </div>
          </div>

          {/* Right: Layer cards */}
          <div className="flex flex-col gap-3">
            {layers.map((item) => (
              <div key={item.n} className="rounded-xl p-5 transition-all duration-200"
                style={{ border: "1px solid var(--border)", background: "transparent" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--bg-raised)";
                  el.style.borderColor = "var(--border-hi)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.borderColor = "var(--border)";
                }}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em", color: item.color }}>{item.n}</span>
                  <h3 className="text-sm font-semibold" style={{ color: item.codeColor }}>{item.title}</h3>
                </div>
                <p className="text-sm mb-3" style={{ color: "#94a3b8", lineHeight: 1.65 }}>{item.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.codes.map((c) => (
                    <code key={c} className="text-xs px-2 py-0.5 rounded" style={{
                      fontFamily: MONO,
                      background: item.codeBg,
                      color: item.codeColor,
                      border: `1px solid ${item.codeBorder}`,
                    }}>{c}</code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
