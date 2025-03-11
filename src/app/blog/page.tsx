import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { getBlogPosts } from "@/lib/blog-data";
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog | BLD Apps",
  description: "Read our latest articles on web development, software engineering, and technology trends.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights, tutorials, and updates from the BLD Apps team
            </p>
          </div>

          <div className="space-y-10">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {post.coverImage && (
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        priority={parseInt(post.id) <= 2}
                      />
                    </div>
                  )}
                  <div className={`${post.coverImage ? 'md:col-span-2' : 'md:col-span-3'} flex flex-col p-6`}>
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <time dateTime={post.date}>
                          {format(new Date(post.date), 'MMMM d, yyyy')}
                        </time>
                        <span>•</span>
                        <span>{post.author}</span>
                      </div>
                      <CardTitle className="text-2xl">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Read more →
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 