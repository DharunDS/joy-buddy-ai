import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/moodmate-hero.jpg";
import { Sparkles, Target, Heart, Bell } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "MoodMate – Personal AI Companion";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "MoodMate is your personal AI companion for mood support, goals, and daily motivation.");

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", "/");
    if (!document.head.contains(canonical)) document.head.appendChild(canonical);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MoodMate",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    description: "Personal AI companion for mood support, goals, and celebrations.",
    offers: { "@type": "Offer", price: "0" },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <header className="sticky top-0 z-30 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex size-6 rounded-md gradient-primary" aria-hidden />
            MoodMate
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="story-link text-sm">Features</a>
            <a href="#how" className="story-link text-sm">How it works</a>
            <a href="#cta" className="story-link text-sm">Get started</a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="hover-scale hidden sm:inline-flex">Sign in</Button>
            <Button variant="hero" className="hover-scale">Try MoodMate</Button>
          </div>
        </nav>
      </header>

      <main id="main" className="container">
        <section className="grid md:grid-cols-2 gap-10 py-16 md:py-24 items-center">
          <article className="space-y-6 animate-enter">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              MoodMate — Personal AI Companion
            </h1>
            <p className="text-lg text-muted-foreground">
              Mood-aware check-ins, playful celebrations, and goal tracking — all in one thoughtful AI buddy that remembers what matters to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" className="hover-scale">
                <Sparkles className="-ml-1" /> Get Started
              </Button>
              <Button variant="outline" size="lg" className="hover-scale" asChild>
                <a href="#features">See Features</a>
              </Button>
            </div>
            <ul className="grid grid-cols-2 gap-4 pt-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /> Smart mood matching</li>
              <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /> Celebrates milestones</li>
              <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /> Custom personalities</li>
              <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /> Gentle daily nudges</li>
            </ul>
          </article>
          <aside className="relative animate-scale-in">
            <img
              src={heroImage}
              alt="MoodMate AI companion illustration with chat bubbles, goals, and celebrations"
              className="w-full rounded-lg border shadow-lg"
              loading="eager"
              decoding="async"
            />
          </aside>
        </section>

        <section id="features" className="py-12 md:py-20">
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 rounded-lg border glass hover-scale">
              <div className="flex items-center gap-2 font-semibold mb-2"><Heart /> Mood-aware</div>
              <p className="text-muted-foreground">Understands your vibe and adapts tone, content, and nudges with empathy.</p>
            </article>
            <article className="p-6 rounded-lg border glass hover-scale">
              <div className="flex items-center gap-2 font-semibold mb-2"><Target /> Goals & streaks</div>
              <p className="text-muted-foreground">Track micro-goals, keep streaks alive, and unlock cheerful mini-celebrations.</p>
            </article>
            <article className="p-6 rounded-lg border glass hover-scale">
              <div className="flex items-center gap-2 font-semibold mb-2"><Bell /> Smart check-ins</div>
              <p className="text-muted-foreground">Thoughtful reminders that feel like a friend, not a nag. Missed a day? We’ve got you.</p>
            </article>
          </div>
        </section>

        <section id="how" className="py-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">How it works</h2>
            <ol className="grid md:grid-cols-3 gap-6 text-sm">
              <li className="p-5 rounded-lg border">
                <div className="font-semibold mb-1">1. Pick a personality</div>
                <p className="text-muted-foreground">Friendly, Witty, Mentor, or Listener — choose how MoodMate talks.</p>
              </li>
              <li className="p-5 rounded-lg border">
                <div className="font-semibold mb-1">2. Set tiny goals</div>
                <p className="text-muted-foreground">Start small, keep it fun. MoodMate nudges and celebrates along the way.</p>
              </li>
              <li className="p-5 rounded-lg border">
                <div className="font-semibold mb-1">3. Chat daily</div>
                <p className="text-muted-foreground">Mood-aware support with playful surprises that keep you coming back.</p>
              </li>
            </ol>
          </div>
        </section>

        <section id="cta" className="py-16 text-center">
          <div className="mx-auto max-w-2xl p-8 rounded-xl border gradient-primary text-primary-foreground shadow-[var(--shadow-elevated)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to meet your AI companion?</h2>
            <p className="text-primary-foreground/90 mb-6">Join MoodMate and turn every day into a small win.</p>
            <Button variant="hero" size="lg" className="hover-scale">
              <Sparkles className="-ml-1" /> Start for free
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MoodMate. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#features" className="story-link">Features</a>
            <a href="#how" className="story-link">How it works</a>
            <a href="#cta" className="story-link">Get started</a>
          </nav>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;
