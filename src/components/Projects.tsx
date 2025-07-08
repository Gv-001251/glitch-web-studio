import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Interactive Proposal Platform",
    description: "A comprehensive web application for creating, managing, and tracking business proposals with advanced analytics and client collaboration features.",
    image: "PROPOSAL PLATFORM",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Annual Report Dashboard",
    description: "Dynamic dashboard for generating and managing annual reports with real-time data visualization and automated report generation.",
    image: "REPORT DASHBOARD",
    tech: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
    gradient: "bg-gradient-to-br from-blue-500 to-purple-500"
  },
  {
    id: 3,
    title: "Pitch Deck Creator",
    description: "Professional pitch deck creation platform with drag-and-drop interface, collaboration tools, and presentation analytics.",
    image: "PITCH DECK CREATOR",
    tech: ["Angular", "Express.js", "Redis", "WebSocket"],
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-500"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of custom web platforms built for document creation and management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden border-0 shadow-card hover:shadow-primary transition-all duration-500 hover:-translate-y-2 animate-scale-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`h-48 ${project.gradient} flex items-center justify-center text-white font-semibold text-lg relative overflow-hidden`}>
                <span className="relative z-10">{project.image}</span>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Project
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};