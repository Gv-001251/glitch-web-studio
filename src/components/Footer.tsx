import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const footerSections = [
  {
    title: "Services",
    links: [
      "Web Development",
      "Platform Design", 
      "Template Creation",
      "Custom Solutions"
    ]
  },
  {
    title: "Portfolio",
    links: [
      "Document Platforms",
      "Dashboard Systems",
      "Template Libraries",
      "Case Studies"
    ]
  },
  {
    title: "Support",
    links: [
      "Contact Us",
      "Documentation",
      "Pricing",
      "FAQ"
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                GLitch Studio
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Professional web development services specializing in document management platforms and custom web solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-muted-foreground hover:text-primary transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 GLitch Studio. All rights reserved. | Built with passion for document management excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};