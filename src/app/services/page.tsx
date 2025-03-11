import { Metadata } from "next";
import { Code, Smartphone, Globe, Database, Settings, LifeBuoy, Zap, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTA } from "@/components/sections/CTA";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Services | BLD Apps",
  description: "Explore our software development services including web applications, mobile apps, and custom software solutions.",
};

const services = [
  {
    title: "Web Application Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. We create responsive, scalable, and user-friendly web applications that meet your business needs.",
    icon: Globe,
    features: [
      "Single-page applications (SPAs)",
      "Progressive web apps (PWAs)",
      "E-commerce platforms",
      "Content management systems",
      "Customer portals and dashboards",
    ],
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native. We build mobile apps that provide a seamless user experience across all devices.",
    icon: Smartphone,
    features: [
      "iOS and Android applications",
      "Cross-platform development",
      "UI/UX design for mobile",
      "App Store and Google Play deployment",
      "Push notifications and offline functionality",
    ],
  },
  {
    title: "Custom Software Solutions",
    description: "Tailored software solutions designed to meet your specific business needs and challenges. We develop custom software that streamlines your operations and improves efficiency.",
    icon: Code,
    features: [
      "Business process automation",
      "Workflow management systems",
      "Enterprise resource planning (ERP)",
      "Customer relationship management (CRM)",
      "Inventory management systems",
    ],
  },
  {
    title: "Database Design & Management",
    description: "Efficient database architecture and management for optimal performance and scalability. We design and implement database solutions that ensure data integrity and accessibility.",
    icon: Database,
    features: [
      "Database architecture and design",
      "Data migration and integration",
      "Performance optimization",
      "Data security and compliance",
      "Backup and recovery solutions",
    ],
  },
  {
    title: "API Development & Integration",
    description: "Robust API development and seamless integration with third-party services and platforms. We build APIs that enable your systems to communicate effectively with other applications.",
    icon: Settings,
    features: [
      "RESTful API development",
      "GraphQL API development",
      "Third-party API integration",
      "Payment gateway integration",
      "Authentication and authorization",
    ],
  },
  {
    title: "Cloud Services & DevOps",
    description: "Cloud infrastructure setup, management, and DevOps practices for reliable and scalable applications. We help you leverage the power of cloud computing for your business.",
    icon: Cloud,
    features: [
      "AWS, GCP, and Azure deployment",
      "Containerization with Docker",
      "Orchestration with Kubernetes",
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
    ],
  },
  {
    title: "Performance Optimization",
    description: "Optimization of existing applications for better performance, speed, and user experience. We identify and resolve bottlenecks to ensure your software runs efficiently.",
    icon: Zap,
    features: [
      "Frontend performance optimization",
      "Backend performance tuning",
      "Database query optimization",
      "Load testing and scalability",
      "Caching strategies",
    ],
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and technical support to keep your software running smoothly. We provide reliable support to ensure your applications remain secure and up-to-date.",
    icon: LifeBuoy,
    features: [
      "Bug fixes and issue resolution",
      "Security updates and patches",
      "Feature enhancements",
      "Performance monitoring",
      "24/7 technical support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive range of software development services to help you build,
            launch, and grow your digital products. Our team of experienced developers is ready
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-medium mb-2">Key Features:</h3>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <CTA />
    </PageTransition>
  );
} 