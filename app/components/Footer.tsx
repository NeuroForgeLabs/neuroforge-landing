export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-6">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-blue-500/20 ring-1 ring-white/10">
                <img
                  src="/neuroforgelogo.png"
                  alt="NeuroForgeLabs logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-white/90 tracking-tight">
                NeuroForgeLabs
              </span>
            </div>
            <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
              Open-source AI infrastructure and developer tools for the modern
              engineering stack.
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Projects", href: "#projects" },
              { label: "Philosophy", href: "#philosophy" },
              { label: "Focus Areas", href: "#focus" },
              { label: "Open Source", href: "#opensource" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: GitHub CTA */}
          <a
            href="https://github.com/NeuroForgeLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-400 text-sm hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            github.com/NeuroForgeLabs
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/[0.04]" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Founder */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/20 border border-white/10 flex items-center justify-center">
              <span className="text-xs font-bold text-blue-300">AB</span>
            </div>
            <div>
              <p className="text-sm text-slate-300 font-medium">
                Anvar Baltakhojayev
              </p>
              <p className="text-xs text-slate-600">AI Systems Engineer</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-700">
            © {year} NeuroForgeLabs. All rights reserved. MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
