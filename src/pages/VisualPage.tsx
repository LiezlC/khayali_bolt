import React, { useState } from 'react';
import { ExternalLink, Code, Palette, BarChart3, Filter, Eye } from 'lucide-react';

interface VisualPageProps {
  searchQuery: string;
  onContentView?: (url: string, title: string) => void;
}

const VisualPage: React.FC<VisualPageProps> = ({ searchQuery, onContentView }) => {
  const [selectedType, setSelectedType] = useState('all');

  // Sample visual content - easily updateable
  const visuals = [
    {
      id: 1,
      title: "Interactive Kaleidoscope",
      description: "Draw symmetrical patterns with adjustable symmetry, trail effects, and dynamic color generation. A meditative creative tool.",
      type: "Interactive",
      thumbnail: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-06",
      technologies: ["HTML5 Canvas", "JavaScript", "CSS"],
      url: "/visual/kaleidoscope.html",
      featured: true
    },
    {
      id: 2,
      title: "Climate Data Visualization",
      description: "Interactive charts showing temperature changes over time with hover details and filtering capabilities.",
      type: "Interactive",
      thumbnail: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-06",
      technologies: ["D3.js", "HTML", "CSS"],
      url: "/projects/climate-viz",
      featured: true
    },
    {
      id: 2,
      title: "Hounds & Horse Care Infographic",
      description: "Visual breakdown of seasonal activities, training schedules, and care routines for horses and hounds.",
      type: "Infographic",
      thumbnail: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-05",
      technologies: ["HTML", "CSS", "SVG"],
      url: "/projects/hounds-horse-infographic",
      featured: false
    },
    {
      id: 3,
      title: "AI Conversation Flow",
      description: "Multi-page interactive display showing the evolution of AI conversations and response patterns.",
      type: "Interactive",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-04",
      technologies: ["React", "D3.js", "Animation"],
      url: "/projects/ai-conversation-flow",
      featured: true
    },
    {
      id: 4,
      title: "Creative Process Mind Map",
      description: "Visual representation of the creative process across different mediums and formats.",
      type: "Diagram",
      thumbnail: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-03",
      technologies: ["SVG", "CSS Animation", "JavaScript"],
      url: "/projects/creative-mindmap",
      featured: false
    },
    {
      id: 5,
      title: "ESG Impact Visualization",
      description: "Interactive dashboard showing ESG metrics and their correlation with financial performance across sectors.",
      type: "Data Story",
      thumbnail: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-02",
      technologies: ["Scrollytelling", "Charts", "HTML"],
      url: "/projects/esg-impact-viz",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Timeline",
      description: "Interactive timeline showing the evolution of creative projects and experiments over time.",
      type: "Interactive",
      thumbnail: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-01",
      technologies: ["Timeline.js", "CSS", "Animation"],
      url: "/projects/portfolio-timeline",
      featured: false
    }
  ];

  const types = ['all', 'Interactive', 'Infographic', 'Diagram', 'Data Story'];

  const filteredVisuals = visuals.filter(visual => {
    const matchesSearch = searchQuery === '' || 
      visual.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visual.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visual.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = selectedType === 'all' || visual.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    const icons = {
      'Interactive': Code,
      'Infographic': Palette,
      'Diagram': BarChart3,
      'Data Story': Eye
    };
    return icons[type as keyof typeof icons] || Code;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Interactive': 'bg-blue-100 text-blue-800',
      'Infographic': 'bg-green-100 text-green-800',
      'Diagram': 'bg-purple-100 text-purple-800',
      'Data Story': 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Visual & Interactive</h1>
          <p className="text-lg text-slate-600">
            Interactive displays, infographics, data visualizations, and experimental visual projects.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex items-center space-x-4 overflow-x-auto pb-2">
          <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
          {types.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedType === type
                  ? 'bg-amber-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {type === 'all' ? 'All' : type}
              {type !== 'all' && (
                <span className="ml-2 text-xs opacity-75">
                  {visuals.filter(v => v.type === type).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {selectedType === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span>Featured Projects</span>
              <div className="ml-4 w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {visuals.filter(v => v.featured).slice(0, 2).map(visual => {
                const TypeIcon = getTypeIcon(visual.type);
                return (
                  <div key={visual.id} className="group cursor-pointer">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={visual.thumbnail} 
                          alt={visual.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(visual.type)}`}>
                            {visual.type}
                          </span>
                          <span className="text-sm text-slate-500">{visual.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                          {visual.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {visual.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {visual.technologies.map(tech => (
                              <span key={tech} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <button 
                            onClick={() => onContentView?.(item.url, item.title)}
                            className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium"
                          >
                            <span>View Project</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVisuals.map(visual => {
            const TypeIcon = getTypeIcon(visual.type);
            return (
              <div key={visual.id} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={visual.thumbnail} 
                      alt={visual.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {visual.featured && (
                      <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(visual.type)}`}>
                        <TypeIcon className="w-3 h-3 inline mr-1" />
                        {visual.type}
                      </span>
                      <span className="text-sm text-slate-500">{visual.date}</span>
                    </div>
                    
                    <h3 className="font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                      {visual.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {visual.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {visual.technologies.slice(0, 2).map(tech => (
                          <span key={tech} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                        {visual.technologies.length > 2 && (
                          <span className="text-xs text-slate-500">+{visual.technologies.length - 2}</span>
                        )}
                      </div>
                      
                      <button 
                        onClick={() => onContentView?.(item.url, item.title)}
                        className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredVisuals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No visual projects found matching your search.</p>
          </div>
        )}

        {/* Add Content Instructions */}
        <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Adding Visual Projects</h3>
          <p className="text-slate-600 mb-4">
            Update the visuals array in this component to add new projects. Each project needs a title, description, 
            type, thumbnail image URL, date, technologies used, and project URL.
          </p>
          <p className="text-sm text-slate-500">
            Store actual project files in a <code className="bg-slate-200 px-2 py-1 rounded">public/projects/</code> directory 
            and reference them in the URL field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisualPage;