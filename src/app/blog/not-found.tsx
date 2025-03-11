import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";

export default function BlogNotFound() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Blog Post Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, the blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </PageTransition>
  );
} 