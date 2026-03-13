import SectionLabel from "./SectionLabel";

export default function OpenSource() {
  return (
    <section id="opensource" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(96,165,250,0.06),transparent)]" />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto relative text-center">
        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-2xl scale-150" />
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 ring-1 ring-white/10">
              <img
                src="/neuroforgelogo.png"
                alt="NeuroForgeLabs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Label */}
        <SectionLabel className="mb-4">Open Source</SectionLabel>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Built in the open.
          <br />
          <span className="gradient-text">For the community.</span>
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          All NeuroForgeLabs projects are open-source under the MIT license.
          Explore the code, file issues, and contribute to the infrastructure
          that the AI engineering community relies on.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/NeuroForgeLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View All Projects on GitHub
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            >
              <path
                d="M2 10L10 2M10 2H4M10 2v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { icon: "⚡", label: "MIT Licensed", desc: "Free to use, modify, and distribute" },
            { icon: "🔀", label: "Contributions Welcome", desc: "Open PRs, issues, and discussions" },
            { icon: "🌐", label: "Community-driven", desc: "Built with and for AI engineers" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
              <div className="text-xs text-slate-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
