import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Download } from 'lucide-react';

interface Template {
  id: number;
  name: string;
  description: string;
  category: string;
  gradient: string;
}

interface ProjectTemplatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  templates: Template[];
}

export const ProjectTemplatesModal = ({ isOpen, onClose, projectTitle, templates }: ProjectTemplatesModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {projectTitle} - Available Templates
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {templates.map((template) => (
            <Card key={template.id} className="group overflow-hidden border border-border hover:shadow-primary transition-all duration-300 hover:scale-105">
              <div className={`h-32 ${template.gradient} flex items-center justify-center text-white font-semibold text-sm relative overflow-hidden`}>
                <span className="relative z-10 text-center px-2">{template.name.toUpperCase()}</span>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                    {template.category}
                  </Badge>
                </div>
                
                <h4 className="font-semibold text-foreground mb-2 text-sm">
                  {template.name}
                </h4>
                
                <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                  {template.description}
                </p>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs hover:bg-primary hover:text-primary-foreground">
                    <Eye className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1 text-xs bg-gradient-primary hover:shadow-primary">
                    <Download className="h-3 w-3 mr-1" />
                    Use
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-end mt-6 pt-4 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};