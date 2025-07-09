import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectTemplatesModal } from './ProjectTemplatesModal';

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

const projectTemplates = {
  1: [ // Interactive Proposal Platform
    {
      id: 1,
      name: "Business Proposal",
      description: "Professional business proposal with executive summary and pricing.",
      category: "Business",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-500"
    },
    {
      id: 2,
      name: "Service Proposal",
      description: "Service-based proposal template with detailed scope of work.",
      category: "Services",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Project Proposal",
      description: "Comprehensive project proposal with timeline and milestones.",
      category: "Project",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "Partnership Proposal",
      description: "Strategic partnership proposal with mutual benefits outline.",
      category: "Partnership",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ],
  2: [ // Annual Report Dashboard
    {
      id: 5,
      name: "Financial Report",
      description: "Comprehensive financial overview with charts and analytics.",
      category: "Finance",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      id: 6,
      name: "Performance Report",
      description: "Key performance indicators and metrics dashboard.",
      category: "Analytics",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-500"
    },
    {
      id: 7,
      name: "Sustainability Report",
      description: "Environmental and social impact assessment report.",
      category: "ESG",
      gradient: "bg-gradient-to-br from-lime-500 to-green-500"
    },
    {
      id: 8,
      name: "Executive Summary",
      description: "High-level overview for stakeholders and board members.",
      category: "Executive",
      gradient: "bg-gradient-to-br from-purple-500 to-violet-500"
    },
    {
      id: 9,
      name: "Market Analysis",
      description: "Detailed market trends and competitive analysis report.",
      category: "Market",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-500"
    }
  ],
  3: [ // Pitch Deck Creator
    {
      id: 10,
      name: "Startup Pitch",
      description: "Essential startup pitch deck for investor presentations.",
      category: "Startup",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-500"
    },
    {
      id: 11,
      name: "Product Launch",
      description: "Product launch presentation with market positioning.",
      category: "Product",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500"
    },
    {
      id: 12,
      name: "Investment Deck",
      description: "Professional investment pitch with financial projections.",
      category: "Investment",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500"
    },
    {
      id: 13,
      name: "Sales Presentation",
      description: "Compelling sales presentation for client meetings.",
      category: "Sales",
      gradient: "bg-gradient-to-br from-teal-500 to-cyan-500"
    }
  ]
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
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

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => handleViewProject(project.id)}
                >
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

      {/* Project Templates Modal */}
      {selectedProject && (
        <ProjectTemplatesModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          projectTitle={projects.find(p => p.id === selectedProject)?.title || ''}
          templates={projectTemplates[selectedProject as keyof typeof projectTemplates] || []}
        />
      )}
    </section>
  );
};