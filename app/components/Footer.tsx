"use client";

const MONO = "var(--font-jetbrains, ui-monospace, 'JetBrains Mono', monospace)";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Projects",    href: "#projects" },
    { label: "Philosophy",  href: "#philosophy" },
    { label: "Focus",       href: "#focus" },
    { label: "Open Source", href: "#opensource" },
  ];

  return (
    <footer className="relative py-12" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="w-full max-w-5xl mx-auto px-6">

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-6 rounded-md overflow-hidden flex-shrink-0"
                style={{ border: "1px solid var(--border)" }}>
                <img src="/neuroforgelogo.png" alt="NeuroForgeLabs" width={24} height={24}
                  className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-semibold" style={{ color: "#22d3ee", letterSpacing: "-0.01em" }}>
                NeuroForgeLabs
              </span>
            </div>
            <p className="text-xs" style={{ color: "#64748b", lineHeight: 1.75, maxWidth: "22ch" }}>
              Open-source AI infrastructure and developer tools. MIT licensed.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#22d3ee", marginBottom: "14px" }}>
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {links.map((l) => (
                <a key={l.href} href={l.href}
                  className="text-sm transition-colors duration-150"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Source */}
          <div>
            <p style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#22d3ee", marginBottom: "14px" }}>
              Source
            </p>
            <a href="https://github.com/NeuroForgeLabs" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-150"
              style={{ color: "#22d3ee" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#67e8f9"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              github.com/NeuroForgeLabs ↗
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(59,126,248,0.25), rgba(124,90,243,0.15))",
                border: "1px solid var(--border)",
              }}>
              <span style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 700, color: "#60a5fa" }}>AB</span>
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "#c8cdd8", letterSpacing: "-0.01em" }}>
                Anvar Baltakhojayev
              </p>
              <p style={{ fontFamily: MONO, fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#22d3ee", marginTop: "2px" }}>
                AI Systems Engineer
              </p>
            </div>
          </div>
          <p style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.08em", color: "#64748b" }}>
            © {year} NeuroForgeLabs · MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}
