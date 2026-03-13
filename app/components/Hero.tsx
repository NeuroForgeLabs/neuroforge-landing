"use client";

import { useEffect, useState } from "react";
import NetworkBackground from "./NetworkBackground";

const TYPED_WORDS = ["RAG pipelines.", "LLM debuggers.", "security tools."];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPED_WORDS[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 32);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % TYPED_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  const MONO = "var(--font-jetbrains, ui-monospace, 'JetBrains Mono', monospace)";

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Grid + network bg */}
      <div className="absolute inset-0 nfl-grid-bg" style={{ opacity: 0.4 }} />
      <div className="absolute inset-0"><NetworkBackground /></div>

      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 20%, #050608 85%)",
      }} />
      {/* Top-left blue glow */}
      <div className="absolute top-0 left-0" style={{
        width: 640, height: 520,
        background: "radial-gradient(ellipse at 0% 0%, rgba(59,126,248,0.09), transparent 65%)",
      }} />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-5xl mx-auto px-6 pt-28 pb-20">

        {/* Terminal badge row */}
        <div className="nfl-anim nfl-d0 flex items-center gap-3 mb-12">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", fontFamily: MONO, fontSize: "0.68rem" }}>
            <span style={{ color: "#64748b" }}>~/neuroforgelabs</span>
            <span style={{ color: "#60a5fa" }}>&nbsp;(main)</span>
            <span style={{ color: "#64748b" }}>&nbsp;$</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
            <span style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#22d3ee" }}>
              open source
            </span>
          </div>
        </div>

        {/* Big headline */}
        <h1 className="nfl-anim nfl-d1 text-white font-extrabold mb-5"
          style={{ fontSize: "clamp(3rem, 7.5vw, 6.2rem)", lineHeight: 0.96, letterSpacing: "-0.04em", maxWidth: "12ch" }}>
          We build<br />
          <span className="nfl-grad">infra</span><br />
          for AI.
        </h1>

        {/* Typewriter line */}
        <div className="nfl-anim nfl-d2 flex items-center gap-2 mb-10"
          style={{ fontFamily: MONO, fontSize: "clamp(0.85rem, 2vw, 1.05rem)" }}>
          <span style={{ color: "#64748b" }}>Open-source</span>
          <span className="inline-flex items-center" style={{ color: "#22d3ee", minWidth: "16ch" }}>
            {displayed}
            <span className="nfl-blink" style={{ color: "#60a5fa", marginLeft: "1px" }}>▌</span>
          </span>
        </div>

        {/* Subtitle */}
        <p className="nfl-anim nfl-d3 text-base mb-10"
          style={{ color: "#94a3b8", maxWidth: "48ch", lineHeight: 1.75 }}>
          Tools for engineers building production-grade{" "}
          <span style={{ color: "#22d3ee" }}>RAG systems</span>,{" "}
          <span style={{ color: "#a78bfa" }}>LLM pipelines</span>, and{" "}
          <span style={{ color: "#60a5fa" }}>secure smart contracts</span>.
          <span style={{ color: "#64748b" }}> All MIT licensed.</span>
        </p>

        {/* CTAs */}
        <div className="nfl-anim nfl-d4 flex flex-wrap items-center gap-3">
          <a href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-150"
            style={{
              background: "#3b82f6",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 0 0 1px rgba(59,126,248,0.4), 0 4px 24px rgba(59,126,248,0.22)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#3b82f6"; }}
          >
            View Projects
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://github.com/NeuroForgeLabs" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
            style={{
              color: "#c8cdd8",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "transparent",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(34,211,238,0.5)";
              el.style.background = "rgba(34,211,238,0.08)";
              el.style.color = "#22d3ee";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.12)";
              el.style.background = "transparent";
              el.style.color = "#c8cdd8";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.65 }}>
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="nfl-anim nfl-d5 flex flex-wrap gap-8 mt-14 pt-6"
          style={{ borderTop: "1px solid var(--border)" }}>
          {[
            ["3+", "Projects", "#60a5fa"],
            ["5", "Focus Areas", "#a78bfa"],
            ["MIT", "License", "#22d3ee"],
            ["100%", "Open Source", "#22c55e"],
          ].map(([v, l, c]) => (
            <div key={l}>
              <div className="font-bold text-xl" style={{ letterSpacing: "-0.02em", color: c }}>{v}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginTop: "2px" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="nfl-anim nfl-d6 absolute bottom-6 right-6 flex items-center gap-2">
        <span style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#22d3ee" }}>scroll</span>
        <div style={{ width: 16, height: 1, background: "#22d3ee" }} />
      </div>
    </section>
  );
}
