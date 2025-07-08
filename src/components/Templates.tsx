import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const templates = [
  {
    id: 1,
    title: "Business Proposal",
    description: "Professional business proposal template with executive summary, project scope, and pricing sections.",
    category: "Business",
    preview: "BUSINESS PROPOSAL",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-500"
  },
  {
    id: 2,
    title: "Marketing Plan",
    description: "Comprehensive marketing plan template with strategy, tactics, and performance metrics.",
    category: "Marketing",
    preview: "MARKETING PLAN",
    gradient: "bg-gradient-to-br from-orange-500 to-red-500"
  },
  {
    id: 3,
    title: "Professional Invoice",
    description: "Clean, professional invoice template with automated calculations and payment tracking.",
    category: "Finance",
    preview: "INVOICE",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-500"
  },
  {
    id: 4,
    title: "Project Report",
    description: "Detailed project report template with timeline, milestones, and outcome analysis.",
    category: "Project",
    preview: "PROJECT REPORT",
    gradient: "bg-gradient-to-br from-purple-500 to-violet-500"
  },
  {
    id: 5,
    title: "Professional Resume",
    description: "Modern resume template with customizable sections and professional formatting.",
    category: "Career",
    preview: "RESUME",
    gradient: "bg-gradient-to-br from-pink-500 to-rose-500"
  },
  {
    id: 6,
    title: "Investor Pitch Deck",
    description: "Compelling pitch deck template designed to capture investor attention and secure funding.",
    category: "Presentation",
    preview: "PITCH DECK",
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-500"
  }
];

export const Templates = () => {
  return (
    <section id="templates" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Template Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pre-designed templates ready for your document platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <Card 
              key={template.id}
              className="group overflow-hidden border-0 shadow-card hover:shadow-primary transition-all duration-500 hover:scale-105 hover:rotate-1 animate-scale-in bg-card/70 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Template Preview */}
              <div className={`h-48 ${template.gradient} flex items-center justify-center text-white font-semibold text-lg relative overflow-hidden`}>
                <span className="relative z-10">{template.preview}</span>
                
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full animate-ping" />
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {template.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {template.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {template.description}
                </p>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground">
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-primary">
                    Use Template
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:shadow-primary">
            Browse All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};