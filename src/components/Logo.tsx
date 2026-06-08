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
        {/* algebraic 'x' */}
        <path
          d="M11 13 L22 27 M22 13 L11 27"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-cream"
        />
        {/* superscript ² */}
        <path
          d="M26 13.5c0-1.2 1-2 2.2-2s2.2.8 2.2 2c0 .9-.6 1.5-1.5 2.2L26 18.5h4.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-cream"
        />
      </svg>
      <span
        className={`font-display text-[1.35rem] font-bold tracking-tight leading-none ${light ? "text-cream" : "text-foreground"}`}
      >
        Algeb<span className="text-primary">rix</span><span className="text-primary">.</span>
      </span>
    </div>
  );
}
