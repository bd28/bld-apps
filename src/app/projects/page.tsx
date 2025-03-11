import { Metadata } from "next";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Projects | BLD Apps",
  description: "Explore our portfolio of software development projects and case studies.",
};

// Sample projects data - in a real app, this would come from a database or CMS
const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart, and checkout functionality.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/bd28/ecommerce-example",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/images/projects/task-app.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/bd28/task-management",
  },
  {
    id: "3",
    title: "Healthcare Portal",
    description: "A secure healthcare portal for patients to manage appointments and medical records.",
    image: "/images/projects/healthcare.jpg",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Auth0"],
    liveUrl: "https://example.com",
  },
  {
    id: "4",
    title: "Real Estate Listing Platform",
    description: "A platform for real estate listings with search, filtering, and user accounts.",
    image: "/images/projects/real-estate.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "MapBox"],
    githubUrl: "https://github.com/bd28/real-estate-platform",
  },
  {
    id: "5",
    title: "Fitness Tracking Mobile App",
    description: "A mobile application for tracking workouts, nutrition, and fitness progress.",
    image: "/images/projects/fitness-app.jpg",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    liveUrl: "https://example.com",
  },
  {
    id: "6",
    title: "Business Analytics Dashboard",
    description: "An interactive dashboard for visualizing business metrics and KPIs.",
    image: "/images/projects/analytics.jpg",
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/bd28/analytics-dashboard",
  },
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Projects</h1>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of software development projects. These case studies showcase
            our expertise in building custom software solutions across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
} 