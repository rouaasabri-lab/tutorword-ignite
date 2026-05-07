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
        {/* graduation cap mortarboard */}
        <path
          d="M6 17l14-6 14 6-14 6-14-6z"
          className="fill-cream"
        />
        {/* tassel */}
        <path d="M34 17v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-cream" />
        <circle cx="34" cy="24.5" r="1.4" className="fill-cream" />
        {/* book / base */}
        <path
          d="M12 21v5c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5v-5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          className="text-cream"
        />
      </svg>
      <span
        className={`font-display text-[1.35rem] font-bold tracking-tight leading-none ${light ? "text-cream" : "text-foreground"}`}
      >
        tutor<span className="text-primary">world</span><span className="text-primary">.</span>
      </span>
    </div>
  );
}
