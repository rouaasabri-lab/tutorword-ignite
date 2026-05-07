export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 24"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M4 16 C 60 4, 140 4, 200 12 S 280 22, 296 10"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
