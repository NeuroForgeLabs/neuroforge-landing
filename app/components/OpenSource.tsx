"use client";

const MONO = "var(--font-jetbrains, ui-monospace, 'JetBrains Mono', monospace)";

export default function OpenSource() {
  return (
    <section id="opensource" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 nfl-grid-bg" style={{ opacity: 0.18 }} />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(59,126,248,0.06), transparent)",
      }} />

      <div className="relative w-full max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#60a5fa", marginBottom: "14px" }}>
              /// open_source
            </p>
            <h2 className="text-white font-bold mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Built in the open.<br />
              <span className="nfl-grad">For everyone.</span>
            </h2>
            <p className="text-base mb-8"
              style={{ color: "#94a3b8", lineHeight: 1.75, maxWidth: "40ch" }}>
              Every line of code is public. MIT licensed. No paywalls, no enterprise tiers.
              If it&apos;s useful to AI engineers, it belongs on GitHub.
            </p>
            <a href="https://github.com/NeuroForgeLabs" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-150"
              style={{
                background: "#3b82f6",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 0 0 1px rgba(59,126,248,0.4), 0 4px 24px rgba(59,126,248,0.22)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#3b82f6"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              View on GitHub
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>

            {/* Commitments */}
            <div className="mt-10 flex flex-col gap-3">
              {[
                { arrow: "#60a5fa", text: "MIT License — use it anywhere, forever." },
                { arrow: "#a78bfa", text: "Open PRs and issues — community-first roadmap." },
                { arrow: "#22d3ee", text: "No commercial upsells — no enterprise tier." },
              ].map(({ arrow, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: arrow, flexShrink: 0, marginTop: "1px" }}>→</span>
                  <span className="text-sm" style={{ color: "#94a3b8" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3"
              style={{ background: "var(--bg-panel)", borderBottom: "1px solid var(--border)" }}>
              <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
              <span className="ml-3" style={{ fontFamily: MONO, fontSize: "0.62rem", letterSpacing: "0.06em", color: "#22d3ee" }}>
                bash — rag-doctor
              </span>
            </div>

            {/* Terminal output */}
            <div className="p-5" style={{
              background: "var(--bg-raised)",
              fontFamily: MONO,
              fontSize: "0.76rem",
              lineHeight: 1.9,
            }}>
              <div>
                <span style={{ color: "#22c55e" }}>➜</span>{" "}
                <span style={{ color: "#60a5fa" }}>~/projects</span>{" "}
                <span style={{ color: "#c8cdd8" }}>git clone github.com/NeuroForgeLabs/rag-doctor</span>
              </div>
              <div style={{ color: "#475569", paddingLeft: "1rem" }}>Cloning into &apos;rag-doctor&apos;...</div>
              <div style={{ color: "#475569", paddingLeft: "1rem", marginBottom: "0.4rem" }}>✓ done</div>

              <div>
                <span style={{ color: "#22c55e" }}>➜</span>{" "}
                <span style={{ color: "#60a5fa" }}>~/projects/rag-doctor</span>{" "}
                <span style={{ color: "#c8cdd8" }}>pip install -e . && rag-doctor diagnose</span>
              </div>
              <div style={{ color: "#475569", paddingLeft: "1rem", marginBottom: "0.4rem" }}>
                Successfully installed rag-doctor-0.2.1
              </div>

              <div style={{ paddingLeft: "1rem", color: "#22d3ee" }}>✓ Retrieval stage: OK</div>
              <div style={{ paddingLeft: "1rem", color: "#22d3ee" }}>✓ Chunking strategy: OK</div>
              <div style={{ paddingLeft: "1rem", color: "#fb923c" }}>⚠ Context window: 78% full</div>
              <div style={{ paddingLeft: "1rem", color: "#f87171" }}>✗ Reranker: score collapse detected</div>
              <div style={{ paddingLeft: "1rem", color: "#f87171", marginBottom: "0.4rem" }}>
                → Fix: lower top_k from 20 to 8
              </div>

              <div>
                <span style={{ color: "#22c55e" }}>➜</span>{" "}
                <span style={{ color: "#60a5fa" }}>~/projects/rag-doctor</span>
                <span className="nfl-blink" style={{ color: "#60a5fa", marginLeft: "2px" }}>▌</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
