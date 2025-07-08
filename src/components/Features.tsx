import { Card } from '@/components/ui/card';
import { BarChart3, Palette, Shield, FileText, Zap, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: BarChart3,
    title: "Dashboard Management",
    description: "Intuitive dashboard for organizing, sorting, and filtering documents by date, type, or status with advanced search capabilities."
  },
  {
    id: 2,
    icon: Palette,
    title: "Template Customization",
    description: "Drag-and-drop template editor with real-time preview, custom branding options, and responsive design features."
  },
  {
    id: 3,
    icon: Shield,
    title: "Secure Authentication",
    description: "Multi-factor authentication, role-based access control, and enterprise-grade security for sensitive documents."
  },
  {
    id: 4,
    icon: FileText,
    title: "Executive Summary AI",
    description: "AI-powered executive summary generation that extracts key points and creates professional summaries automatically."
  },
  {
    id: 5,
    icon: Zap,
    title: "Pro Upgrades",
    description: "Advanced features including unlimited storage, premium templates, priority support, and white-label solutions."
  },
  {
    id: 6,
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools, comment systems, version control, and approval workflows for team projects."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create powerful document management platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.id}
                className="group p-8 text-center hover:shadow-primary transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mx-auto mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};