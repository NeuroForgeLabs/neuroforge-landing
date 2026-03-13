"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const MONO = "var(--font-jetbrains, ui-monospace, 'JetBrains Mono', monospace)";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Projects",    href: "#projects" },
    { label: "Philosophy",  href: "#philosophy" },
    { label: "Focus",       href: "#focus" },
    { label: "Open Source", href: "#opensource" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,6,8,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}>
      <div className="w-full max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md overflow-hidden flex-shrink-0"
            style={{ border: "1px solid var(--border)" }}>
            <Image src="/neuroforgelogo.png" alt="NeuroForgeLabs" width={28} height={28}
              className="w-full h-full object-cover" priority />
          </div>
          <span className="text-sm font-semibold group-hover:opacity-100 transition-opacity" style={{ color: "#22d3ee", letterSpacing: "-0.01em", opacity: 0.95 }}>
            NeuroForgeLabs
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="px-3.5 py-1.5 rounded-md text-sm transition-colors duration-150"
              style={{ color: "#94a3b8" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}>
              {l.label}
            </a>
          ))}
        </div>

        {/* GitHub */}
        <div className="hidden md:flex">
          <a href="https://github.com/NeuroForgeLabs" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-3.5 py-1.5 rounded-md transition-all duration-150 hover:text-white"
            style={{
              color: "#94a3b8",
              border: "1px solid rgba(255,255,255,0.1)",
              fontFamily: MONO,
              fontSize: "0.72rem",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(34,211,238,0.5)";
              el.style.background = "rgba(34,211,238,0.08)";
              el.style.color = "#22d3ee";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.1)";
              el.style.background = "transparent";
              el.style.color = "#94a3b8";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 rounded transition-colors"
          style={{ color: "#94a3b8" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {mobileOpen
              ? <><line x1="2" y1="2" x2="16" y2="16"/><line x1="16" y1="2" x2="2" y2="16"/></>
              : <><line x1="2" y1="4.5" x2="16" y2="4.5"/><line x1="2" y1="9" x2="16" y2="9"/><line x1="2" y1="13.5" x2="16" y2="13.5"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-5 flex flex-col gap-1"
          style={{ background: "rgba(5,6,8,0.96)", backdropFilter: "blur(20px)", borderTop: "1px solid var(--border)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="py-2 text-sm transition-colors"
              style={{ color: "#94a3b8" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
              onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="mt-3 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
            <a href="https://github.com/NeuroForgeLabs" target="_blank" rel="noopener noreferrer"
              className="text-sm transition-colors" style={{ color: "#94a3b8" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}>
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
