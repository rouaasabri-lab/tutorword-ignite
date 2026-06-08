import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-bold">algebrix</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Premium IGCSE revision — practice quizzes, structured notes and exam-grade questions, designed by tutors.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Learn</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/subjects" className="hover:text-foreground">Subjects</Link></li>
            <li><Link to="/quizzes" className="hover:text-foreground">Quizzes</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Account</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/account" className="hover:text-foreground">Sign in</Link></li>
            <li><Link to="/account" className="hover:text-foreground">Create account</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} algebrix. Built for IGCSE students.
      </div>
    </footer>
  );
}
