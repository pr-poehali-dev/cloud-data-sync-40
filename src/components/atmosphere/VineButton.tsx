import Icon from "@/components/ui/icon";

interface VineButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}

export default function VineButton({
  href = "#",
  children,
  variant = "solid",
  className = "",
}: VineButtonProps) {
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden px-8 py-4 text-xs uppercase tracking-[0.25em] transition-colors duration-500";
  const styles =
    variant === "solid"
      ? "border border-white text-vestex-950"
      : "border border-white/30 text-white";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span
        className={`absolute inset-0 -z-0 ${
          variant === "solid" ? "bg-white" : "bg-white"
        } origin-bottom scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          variant === "solid"
            ? "group-hover:scale-y-0"
            : "scale-y-0 group-hover:scale-y-100"
        }`}
      />

      <svg
        viewBox="0 0 120 40"
        className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="vine-path"
          d="M2 38 C20 30 18 14 36 12 C54 10 56 26 74 24 C92 22 96 8 118 4"
          stroke={variant === "solid" ? "rgba(5,5,5,0.4)" : "rgba(255,255,255,0.4)"}
          strokeWidth="0.8"
        />
      </svg>

      <span
        className={`relative z-10 transition-colors duration-500 ${
          variant === "solid"
            ? "group-hover:text-white"
            : "group-hover:text-vestex-950"
        }`}
      >
        {children}
      </span>
      <Icon
        name="ArrowUpRight"
        size={16}
        className={`relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 ${
          variant === "solid"
            ? "text-vestex-950 group-hover:text-white"
            : "text-white group-hover:text-vestex-950"
        }`}
      />
    </a>
  );
}
