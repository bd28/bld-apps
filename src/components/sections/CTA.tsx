import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8 md:p-12 relative overflow-hidden border border-primary/20">
          <div className="max-w-2xl relative z-10">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Ready to Get Started?
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Let's build your next software project together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experienced developers is ready to bring your ideas to life.
              Contact us today to discuss your project requirements.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          {/* Background elements */}
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 top-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          
          {/* Decorative dots */}
          <div className="absolute right-12 top-12 opacity-20">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM50 0C55.5228 0 60 4.47715 60 10C60 15.5228 55.5228 20 50 20C44.4772 20 40 15.5228 40 10C40 4.47715 44.4772 0 50 0ZM100 10C100 4.47715 95.5228 0 90 0C84.4772 0 80 4.47715 80 10C80 15.5228 84.4772 20 90 20C95.5228 20 100 15.5228 100 10ZM20 50C20 44.4772 15.5228 40 10 40C4.47715 40 0 44.4772 0 50C0 55.5228 4.47715 60 10 60C15.5228 60 20 55.5228 20 50ZM50 40C55.5228 40 60 44.4772 60 50C60 55.5228 55.5228 60 50 60C44.4772 60 40 55.5228 40 50C40 44.4772 44.4772 40 50 40ZM100 50C100 44.4772 95.5228 40 90 40C84.4772 40 80 44.4772 80 50C80 55.5228 84.4772 60 90 60C95.5228 60 100 55.5228 100 50ZM10 80C15.5228 80 20 84.4772 20 90C20 95.5228 15.5228 100 10 100C4.47715 100 0 95.5228 0 90C0 84.4772 4.47715 80 10 80ZM60 90C60 84.4772 55.5228 80 50 80C44.4772 80 40 84.4772 40 90C40 95.5228 44.4772 100 50 100C55.5228 100 60 95.5228 60 90ZM90 80C95.5228 80 100 84.4772 100 90C100 95.5228 95.5228 100 90 100C84.4772 100 80 95.5228 80 90C80 84.4772 84.4772 80 90 80Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="100" height="100" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 