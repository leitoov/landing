import { HeroSection } from "@/components/marketing/HeroSection";
import { FloatingChat } from "@/components/ui/FloatingChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <HeroSection />
      <FloatingChat />
    </main>
  );
}
