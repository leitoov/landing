import { HeroSection } from "@/components/marketing/HeroSection";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <HeroSection />
      <FloatingWhatsApp phoneNumber="1234567890" />
    </main>
  );
}
