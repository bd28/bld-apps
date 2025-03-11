import { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { Building, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | BLD Apps",
  description: "Get in touch with BLD Apps for your software development needs. Contact us for a consultation.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team. We&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Our Office</h3>
            <p className="text-muted-foreground">
              14450 John F Kennedy Blvd<br />
              Houston, TX 77032
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Phone</h3>
            <p className="text-muted-foreground">
              <a href="tel:+18325900729" className="hover:text-primary">
                (832) 590-0729
              </a>
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Support Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday<br />
              9:00 AM - 5:00 PM CST
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
} 