import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">BLD Apps</h3>
            <p className="text-sm text-muted-foreground">
              Building tomorrow's software solutions today.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/bd28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Contact</h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground">
                14450 John F Kennedy Blvd
                <br />
                Houston, TX 77032
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <a
                  href="tel:+18325900729"
                  className="hover:text-foreground"
                >
                  (832) 590-0729
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} BLD Apps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 