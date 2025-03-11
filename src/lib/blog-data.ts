export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js: A Comprehensive Guide",
    date: "2023-06-15",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    content: `
# Getting Started with Next.js: A Comprehensive Guide

Next.js has become one of the most popular frameworks for building React applications. It provides a great developer experience with features like server-side rendering, static site generation, and API routes.

## Why Choose Next.js?

Next.js offers several advantages over a plain React application:

- **Server-side Rendering (SSR)**: Improves performance and SEO by rendering pages on the server.
- **Static Site Generation (SSG)**: Pre-renders pages at build time for even better performance.
- **API Routes**: Build API endpoints as part of your Next.js application.
- **File-based Routing**: Create routes based on the file structure in your pages directory.
- **Built-in CSS and Sass Support**: Import CSS or Sass files directly in your components.

## Setting Up Your First Next.js Project

Getting started with Next.js is straightforward. Here's how to create your first project:

\`\`\`bash
npx create-next-app my-next-app
cd my-next-app
npm run dev
\`\`\`

This will create a new Next.js project and start the development server. You can now open your browser and navigate to http://localhost:3000 to see your application.

## Building Pages

In Next.js, pages are React components exported from files in the \`pages\` directory. Each page is associated with a route based on its file name.

For example, to create a page at the route \`/about\`, you would create a file at \`pages/about.js\` or \`pages/about.tsx\` (if you're using TypeScript).

\`\`\`jsx
// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our Next.js application.</p>
    </div>
  );
}
\`\`\`

## Conclusion

Next.js provides a powerful framework for building React applications with features that improve performance, SEO, and developer experience. By following this guide, you should have a good understanding of how to get started with Next.js and build your first application.
    `,
    author: "Brian Davis",
    tags: ["Next.js", "React", "Web Development"],
    coverImage: "/images/blog/nextjs.jpg"
  },
  {
    id: "2",
    slug: "tailwind-css-tips-and-tricks",
    title: "Tailwind CSS: Tips and Tricks for Efficient Styling",
    date: "2023-07-22",
    excerpt: "Discover how to maximize your productivity with Tailwind CSS, the utility-first CSS framework.",
    content: `
# Tailwind CSS: Tips and Tricks for Efficient Styling

Tailwind CSS has revolutionized the way developers approach styling in web applications. Its utility-first approach allows for rapid development without leaving your HTML.

## Why Tailwind CSS?

Tailwind CSS offers several advantages over traditional CSS approaches:

- **Utility-First**: Apply styles directly in your HTML with utility classes.
- **Responsive Design**: Built-in responsive modifiers make it easy to create responsive layouts.
- **Customization**: Tailor Tailwind to your design system with a simple configuration file.
- **Dark Mode**: Built-in support for dark mode with the \`dark:\` variant.
- **JIT Compiler**: The Just-In-Time compiler generates only the CSS you need, resulting in smaller file sizes.

## Essential Tips for Tailwind CSS

### 1. Use the JIT Mode

The Just-In-Time (JIT) mode in Tailwind CSS generates your CSS on-demand, resulting in faster build times and smaller file sizes.

\`\`\`js
// tailwind.config.js
module.exports = {
  mode: 'jit',
  // ...
}
\`\`\`

### 2. Leverage Responsive Variants

Tailwind makes it easy to create responsive designs with its responsive variants:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  This text will be small on mobile, medium on tablets, and large on desktops.
</div>
\`\`\`

### 3. Create Component Classes with @apply

If you find yourself repeating the same utility combinations, use \`@apply\` to create reusable component classes:

\`\`\`css
/* In your CSS file */
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors;
}
\`\`\`

### 4. Use Plugins to Extend Functionality

Tailwind has a plugin system that allows you to extend its functionality:

\`\`\`js
// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }
      }
      addUtilities(newUtilities)
    })
  ]
}
\`\`\`

## Conclusion

Tailwind CSS provides a powerful and efficient way to style your web applications. By following these tips and tricks, you can maximize your productivity and create beautiful, responsive designs with minimal effort.
    `,
    author: "Brian Davis",
    tags: ["Tailwind CSS", "CSS", "Web Development"],
    coverImage: "/images/blog/tailwind.jpg"
  },
  {
    id: "3",
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Modern Web Development",
    date: "2023-08-10",
    excerpt: "Learn how to write clean, maintainable TypeScript code with these best practices and patterns.",
    content: `
# TypeScript Best Practices for Modern Web Development

TypeScript has become the language of choice for many web developers due to its strong typing system and enhanced tooling. In this post, we'll explore some best practices for writing clean, maintainable TypeScript code.

## Why TypeScript?

TypeScript offers several advantages over plain JavaScript:

- **Static Typing**: Catch errors at compile time rather than runtime.
- **Enhanced IDE Support**: Better autocomplete, navigation, and refactoring tools.
- **Better Documentation**: Types serve as documentation for your code.
- **Safer Refactoring**: The compiler catches errors when you change your code.
- **Modern JavaScript Features**: Use the latest JavaScript features with backward compatibility.

## Best Practices

### 1. Use Strict Mode

Enable strict mode in your \`tsconfig.json\` to catch more potential errors:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

### 2. Prefer Interfaces for Object Shapes

Use interfaces to define the shape of objects:

\`\`\`typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

// Avoid
type User = {
  id: string;
  name: string;
  email: string;
};
\`\`\`

### 3. Use Type Inference When Possible

Let TypeScript infer types when it's clear what they should be:

\`\`\`typescript
// Good
const numbers = [1, 2, 3]; // TypeScript infers number[]

// Unnecessary
const numbers: number[] = [1, 2, 3];
\`\`\`

### 4. Avoid Any

The \`any\` type defeats the purpose of using TypeScript. Use more specific types or \`unknown\` if necessary:

\`\`\`typescript
// Avoid
function processData(data: any) {
  // ...
}

// Better
function processData(data: unknown) {
  if (typeof data === 'string') {
    // Now TypeScript knows data is a string
  }
}
\`\`\`

### 5. Use Function Types

Define function types for better documentation and type checking:

\`\`\`typescript
type FilterFunction<T> = (item: T) => boolean;

function filter<T>(array: T[], predicate: FilterFunction<T>): T[] {
  return array.filter(predicate);
}
\`\`\`

## Conclusion

TypeScript is a powerful tool for building robust web applications. By following these best practices, you can write cleaner, more maintainable code that's less prone to bugs and easier to refactor.
    `,
    author: "Brian Davis",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    coverImage: "/images/blog/typescript.jpg"
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
} 