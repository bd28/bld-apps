import { Code, Smartphone, Globe, Database, Settings, LifeBuoy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Web Application Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native.",
    icon: Smartphone,
  },
  {
    title: "Custom Software Solutions",
    description: "Tailored software solutions designed to meet your specific business needs and challenges.",
    icon: Code,
  },
  {
    title: "Database Design & Management",
    description: "Efficient database architecture and management for optimal performance and scalability.",
    icon: Database,
  },
  {
    title: "API Development & Integration",
    description: "Robust API development and seamless integration with third-party services and platforms.",
    icon: Settings,
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and technical support to keep your software running smoothly.",
    icon: LifeBuoy,
  },
];

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-muted/50 relative overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a comprehensive range of software development services to help you build, launch, and grow your digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] bg-card/80 backdrop-blur"
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 