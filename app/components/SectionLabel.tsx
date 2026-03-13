const MONO = "var(--font-jetbrains, ui-monospace, 'JetBrains Mono', monospace)";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={className} style={{
      fontFamily: MONO,
      fontSize: "0.65rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#60a5fa",
      marginBottom: "14px",
    }}>
      <span style={{ opacity: 0.5 }}>/// </span>
      {children}
    </p>
  );
}
