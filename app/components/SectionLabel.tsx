/**
 * Reusable section label in OpenClaw.ai style:
 * "⟩" prefix, minimal dark pill or text-only.
 * Use across sites for consistent section/tag treatment.
 */
const SECTION_PREFIX = "⟩";

type SectionLabelProps = {
  children: React.ReactNode;
  /** "badge" = pill with border (hero/tags), "heading" = text only above sections */
  variant?: "badge" | "heading";
  className?: string;
};

export default function SectionLabel({
  children,
  variant = "heading",
  className = "",
}: SectionLabelProps) {
  const prefix = (
    <span className="text-slate-500 font-normal select-none" aria-hidden>
      {SECTION_PREFIX}
    </span>
  );

  if (variant === "badge") {
    return (
      <div
        className={
          "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full " +
          "border border-slate-500/50 bg-slate-800/50 " +
          "text-xs font-medium tracking-wide text-sky-200/90 " +
          "backdrop-blur-sm shadow-[0_0_0_1px_rgba(56,189,248,0.06)] " +
          className
        }
      >
        {prefix}
        <span>{children}</span>
      </div>
    );
  }

  return (
    <p
      className={
        "text-xs font-semibold tracking-wide text-slate-500 mb-3 " +
        className
      }
    >
      {prefix} {children}
    </p>
  );
}
