import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/subjects", label: "Subjects" },
  { to: "/quizzes", label: "Quizzes" },
  { to: "/study-plan", label: "Study Plan" },
  { to: "/pricing", label: "Pricing" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/"><Logo /></Link>
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link to="/account">Sign in</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full bg-emerald-grad px-5 text-primary-foreground hover:opacity-90">
            <Link to="/pricing">Become a member</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
