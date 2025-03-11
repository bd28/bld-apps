import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block animate-bounce-slow mb-4">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Building Tomorrow's Software Today
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Custom <span className="text-primary">Software Solutions</span> for Your Business
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We create web applications, mobile apps, and custom software solutions
            that help businesses achieve their goals and drive growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="animate-pulse-slow">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      {/* Colored circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-4000"></div>
    </section>
  );
} 