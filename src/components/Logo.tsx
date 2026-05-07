import logoSrc from "@/assets/tutorword-logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <img src={logoSrc} alt="tutorword" width={32} height={32} className="h-8 w-8" />
      <span className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-cream" : "text-foreground"}`}>
        tutor<span className="text-primary">word</span>
      </span>
    </div>
  );
}
