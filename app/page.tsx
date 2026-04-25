import Hero from "@/components/Hero";
import TrustedBanner from "@/components/TrustedBanner";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Trust from "@/components/Trust";
import WhoItIsFor from "@/components/WhoItIsFor";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBanner />
      <Problem />
      <Solution />
      <Features />
      <Benefits />
      <Trust />
      <WhoItIsFor />
      <CTA />
    </main>
  );
}
