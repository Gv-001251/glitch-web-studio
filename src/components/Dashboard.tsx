import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const dashboardItems = [
  {
    id: 1,
    title: "Q4 Business Proposal",
    lastModified: "2 hours ago",
    status: "Available",
    statusColor: "bg-emerald-500"
  },
  {
    id: 2,
    title: "Marketing Strategy Report",
    lastModified: "1 day ago",
    status: "In Progress",
    statusColor: "bg-amber-500"
  },
  {
    id: 3,
    title: "Client Pitch Deck",
    lastModified: "3 days ago",
    status: "Completed",
    statusColor: "bg-blue-500"
  }
];

const filterTabs = ["All", "Available", "In Progress", "Completed"];

export const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section id="dashboard" className="py-24 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dashboard Preview
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the intuitive document management interface
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border-white/20 text-white animate-scale-in">
          <div className="p-8">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h3 className="text-2xl font-semibold">My Documents</h3>
              
              {/* Filter Tabs */}
              <div className="flex gap-2 flex-wrap">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeFilter === tab
                        ? 'bg-primary text-white shadow-glow'
                        : 'bg-white/10 hover:bg-white/20 text-white/80'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Items */}
            <div className="space-y-4">
              {dashboardItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:translate-x-2 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary-glow transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-sm">
                        Last modified: {item.lastModified}
                      </p>
                    </div>
                    
                    <Badge 
                      className={`${item.statusColor} text-white border-0 hover:scale-105 transition-transform`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Footer */}
            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <p className="text-white/60 text-sm mb-4">
                Showing 3 of 24 documents
              </p>
              <button className="text-primary-glow hover:text-white transition-colors font-medium">
                View All Documents →
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};