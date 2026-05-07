export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <rect x="1.5" y="1.5" width="37" height="37" rx="11" className="fill-primary" />
        <path
          d="M11 14h18M20 14v15"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className={light ? "text-cream" : "text-cream"}
        />
        <circle cx="29" cy="27" r="2.4" className="fill-cream" />
      </svg>
      <span
        className={`font-display text-[1.35rem] font-bold tracking-tight leading-none ${light ? "text-cream" : "text-foreground"}`}
      >
        tutor<span className="text-primary">word</span><span className="text-primary">.</span>
      </span>
    </div>
  );
}
