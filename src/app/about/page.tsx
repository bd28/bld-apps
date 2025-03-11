import { Metadata } from "next";
import { Code, Cpu, Database, Globe, Layers, Server } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "About | BLD Apps",
  description: "Learn about BLD Apps, our mission, and our expertise in software development.",
};

const skills = [
  {
    name: "Frontend Development",
    icon: Layers,
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    name: "Backend Development",
    icon: Server,
    description: "Node.js, Express, Python, Django, FastAPI",
  },
  {
    name: "Mobile Development",
    icon: Globe,
    description: "React Native, iOS, Android",
  },
  {
    name: "Database",
    icon: Database,
    description: "PostgreSQL, MongoDB, MySQL, Redis",
  },
  {
    name: "DevOps",
    icon: Cpu,
    description: "Docker, Kubernetes, AWS, GCP, CI/CD",
  },
  {
    name: "Software Architecture",
    icon: Code,
    description: "Microservices, API Design, System Design",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">About BLD Apps</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Building tomorrow's software solutions today. We are a software development company
            specializing in creating custom web and mobile applications for businesses of all sizes.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                At BLD Apps, our mission is to help businesses leverage technology to solve real-world problems.
                We believe in creating software that is not only functional but also user-friendly and scalable.
                Our goal is to be your trusted technology partner, providing solutions that drive your business forward.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground">
                We take a collaborative approach to software development, working closely with our clients
                to understand their needs and goals. Our development process is transparent, agile, and focused
                on delivering high-quality solutions on time and within budget. We believe in building long-term
                relationships with our clients, providing ongoing support and maintenance for the software we develop.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Our Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary mt-1">
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Work With Us</h2>
              <p className="text-muted-foreground">
                Whether you're a startup looking to build your first MVP or an established business
                seeking to modernize your software infrastructure, we have the expertise to help you succeed.
                Let's work together to bring your ideas to life and create software solutions that make a difference.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 