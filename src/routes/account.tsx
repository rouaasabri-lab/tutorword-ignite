import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Sign in — tutorword" },
      { name: "description", content: "Sign in or create your tutorword account to track IGCSE quiz progress." },
    ],
  }),
  validateSearch: (s) => ({ status: (s.status as string) || undefined }),
  component: AccountPage,
});

function AccountPage() {
  const { status } = Route.useSearch();
  const [mode] = useState<"signin" | "signup">("signin");
  void mode;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Account</p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-6xl">
            Your IGCSE journey, <span className="italic text-primary">all in one place</span>.
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground">
            Sign in to track quiz progress, save notes, and pick up exactly where you left off across every subject.
          </p>
          {status === "success" && (
            <div className="mt-6 rounded-xl border border-primary/30 bg-primary-soft px-4 py-3 text-sm text-primary">
              Welcome to Pro — your full IGCSE library is unlocked.
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <Tabs defaultValue="signin">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign in</TabsTrigger>
              <TabsTrigger value="signup">Create account</TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="mt-6 space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@school.edu" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" className="mt-1.5" />
              </div>
              <Button className="w-full bg-emerald-grad text-primary-foreground hover:opacity-90">Sign in</Button>
              <p className="text-center text-xs text-muted-foreground">
                Need full access? <Link to="/pricing" className="font-medium text-primary hover:underline">View Pro plans</Link>
              </p>
            </TabsContent>
            <TabsContent value="signup" className="mt-6 space-y-4">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" placeholder="Alex Student" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email2">Email</Label>
                <Input id="email2" type="email" placeholder="you@school.edu" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="password2">Password</Label>
                <Input id="password2" type="password" placeholder="At least 8 characters" className="mt-1.5" />
              </div>
              <Button className="w-full bg-emerald-grad text-primary-foreground hover:opacity-90">Create free account</Button>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
}
