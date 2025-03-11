import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <CTA />
    </PageTransition>
  );
}
