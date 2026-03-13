import SectionLabel from "./SectionLabel";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(167,139,250,0.05),transparent)]" />

      {/* Horizontal lines decoration */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionLabel>Design Philosophy</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            AI assists. Logic decides.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We believe AI should{" "}
            <span className="text-slate-200 font-medium">augment</span>{" "}
            engineering workflows — not replace the deterministic systems that
            guarantee correctness.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-20">
          {/* Block 1 */}
          <div className="relative group w-full md:w-64">
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] p-7 text-center card-glow">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-400">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Deterministic Analysis</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rule-based, reproducible, auditable. Guaranteed outcomes for critical systems.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                {["Static Analysis", "Rule Engines", "AST Parsing"].map((t) => (
                  <span key={t} className="tag-pill bg-blue-500/10 text-blue-400 border border-blue-500/15">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Plus connector */}
          <div className="flex flex-col items-center gap-1 md:mx-6 z-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <span className="text-slate-300 font-light text-xl">+</span>
            </div>
            <div className="hidden md:block w-12 h-px bg-gradient-to-r from-blue-500/30 to-purple-500/30" />
          </div>

          {/* Block 2 */}
          <div className="relative group w-full md:w-64">
            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/[0.06] p-7 text-center card-glow">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-400">
                  <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21h6M10 17v4M14 17v4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">AI Explanation Layer</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Natural language insights, semantic context, and intelligent suggestions.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                {["LLM Reasoning", "Context Window", "Semantic Search"].map((t) => (
                  <span key={t} className="tag-pill bg-purple-500/10 text-purple-400 border border-purple-500/15">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Equals connector */}
          <div className="flex flex-col items-center gap-1 md:mx-6 z-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <span className="text-slate-300 font-light text-xl">=</span>
            </div>
            <div className="hidden md:block w-12 h-px bg-gradient-to-r from-purple-500/30 to-cyan-500/30" />
          </div>

          {/* Result */}
          <div className="relative group w-full md:w-64">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.08] to-blue-500/[0.04] p-7 text-center card-glow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Trustworthy Intelligence</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Explainable, verifiable results that engineers can trust and act on.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                {["Explainable", "Auditable", "Reliable"].map((t) => (
                  <span key={t} className="tag-pill bg-cyan-500/10 text-cyan-400 border border-cyan-500/15">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote block */}
        <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center max-w-3xl mx-auto overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <p className="text-xl md:text-2xl font-medium text-slate-200 leading-relaxed italic">
            &ldquo;AI should assist engineering, not replace deterministic systems.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-6 h-px bg-slate-600" />
            <span className="text-sm text-slate-500">NeuroForgeLabs Design Principle</span>
            <div className="w-6 h-px bg-slate-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
