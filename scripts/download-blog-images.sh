#!/bin/bash

# Create directory if it doesn't exist
mkdir -p public/images/blog

# Download placeholder images for blog posts
curl -o public/images/blog/nextjs.jpg "https://placehold.co/1200x800/3B82F6/FFFFFF/png?text=Next.js+Guide"
curl -o public/images/blog/tailwind.jpg "https://placehold.co/1200x800/10B981/FFFFFF/png?text=Tailwind+CSS+Tips"
curl -o public/images/blog/typescript.jpg "https://placehold.co/1200x800/6366F1/FFFFFF/png?text=TypeScript+Best+Practices"

echo "Blog images downloaded successfully!" 