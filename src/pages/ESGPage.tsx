import React, { useState } from 'react';
import { TrendingUp, BarChart3, FileText, Filter, ExternalLink, Calendar, Clock, Globe } from 'lucide-react';

interface ESGPageProps {
  searchQuery: string;
  onContentView?: (url: string, title: string) => void;
}

const ESGPage: React.FC<ESGPageProps> = ({ searchQuery, onContentView }) => {
  const [selectedType, setSelectedType] = useState('all');

  // ESG and Sustainability content - easily updateable
  const esgContent = [
    {
      id: 1,
      title: "AI & ESG in Extractive Industries",
      description: "Interactive exploration of AI applications across ESG pillars in extractive industries, featuring case studies, multi-agent systems, and comprehensive framework mappings.",
      type: "Interactive Dashboard",
      format: "HTML/JavaScript",
      thumbnail: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-06",
      tags: ["ESG", "AI", "Extractive Industries", "Interactive"],
      url: "/esg/esg-ai-dashboard.html",
      featured: true,
      duration: "Interactive"
    },
    {
      id: 2,
      title: "25 Years in Sustainable Finance: Key Insights",
      description: "Comprehensive analysis of the evolution of sustainable finance, from early ESG integration to current impact investing trends.",
      type: "Analysis",
      format: "Markdown",
      thumbnail: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-05",
      tags: ["Sustainable Finance", "Career", "Analysis", "Trends"],
      url: "/esg/sustainable-finance-insights.md",
      featured: true,
      duration: "20 min read"
    },
    {
      id: 3,
      title: "ESG Integration in Small Cap Markets",
      description: "Analysis of how environmental, social, and governance factors are reshaping investment strategies in emerging markets.",
      type: "Research",
      format: "Markdown",
      thumbnail: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-15",
      tags: ["ESG", "Small Cap", "Investment", "Research"],
      url: "/esg/esg-small-cap.md",
      featured: false,
      duration: "18 min read"
    },
    {
      id: 4,
      title: "The Future of Sustainable Finance",
      description: "Exploring how regulatory changes and investor demand are driving the evolution of sustainable finance frameworks.",
      type: "Thought Leadership",
      format: "Markdown",
      thumbnail: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-10",
      tags: ["Sustainable Finance", "Regulation", "Future", "Framework"],
      url: "/esg/sustainable-finance-future.md",
      featured: false,
      duration: "22 min read"
    },
    {
      id: 5,
      title: "Impact Measurement Tools",
      description: "Interactive tools and frameworks for measuring and reporting ESG impact across different asset classes.",
      type: "Tools",
      format: "Interactive",
      thumbnail: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-05",
      tags: ["Impact", "Measurement", "Tools", "Reporting"],
      url: "/esg/impact-measurement-tools.html",
      featured: false,
      duration: "Interactive"
    }
  ];

  const types = ['all', 'Interactive Dashboard', 'Analysis', 'Research', 'Thought Leadership', 'Tools'];

  const filteredESG = esgContent.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      'Interactive Dashboard': 'bg-blue-100 text-blue-800',
      'Analysis': 'bg-green-100 text-green-800',
      'Research': 'bg-purple-100 text-purple-800',
      'Thought Leadership': 'bg-orange-100 text-orange-800',
      'Tools': 'bg-teal-100 text-teal-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      'Interactive Dashboard': BarChart3,
      'Analysis': TrendingUp,
      'Research': FileText,
      'Thought Leadership': Globe,
      'Tools': BarChart3
    };
    return icons[type as keyof typeof icons] || FileText;
  };

  return (
    <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">ESG & Sustainability</h1>
          <p className="text-lg text-slate-600">
            Professional insights from 25 years in sustainable finance, ESG integration, and impact investing. 
            Analysis, tools, and thought leadership on the evolving landscape of responsible investment.
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
                  {esgContent.filter(e => e.type === type).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {selectedType === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span>Featured Work</span>
              <div className="ml-4 w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {esgContent.filter(item => item.featured).map(item => {
                const TypeIcon = getTypeIcon(item.type);
                return (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <div className="aspect-video overflow-hidden relative">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {item.duration}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                            <TypeIcon className="w-3 h-3 inline mr-1" />
                            {item.type}
                          </span>
                          <div className="flex items-center text-sm text-slate-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.date}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <button 
                            onClick={() => onContentView?.(item.url, item.title)}
                            className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium"
                          >
                            <span>View</span>
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

        {/* All Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredESG.map(item => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {item.duration}
                    </div>
                    {item.featured && (
                      <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        <TypeIcon className="w-3 h-3 inline mr-1" />
                        {item.type}
                      </span>
                      <span className="text-xs text-slate-500">{item.date}</span>
                    </div>
                    
                    <h3 className="font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 2 && (
                          <span className="text-xs text-slate-500">+{item.tags.length - 2}</span>
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

        {filteredESG.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No ESG content found matching your search.</p>
          </div>
        )}

        {/* Add Content Instructions */}
        <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Adding ESG Content</h3>
          <p className="text-slate-600 mb-4">
            Update the esgContent array in this component to add new professional content. Each item needs 
            title, description, type, format, thumbnail, date, tags, and URL.
          </p>
          <p className="text-sm text-slate-500">
            Store ESG files in <code className="bg-slate-200 px-2 py-1 rounded">public/esg/</code> directory. 
            Interactive dashboards should be HTML files, analysis and research as Markdown files.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ESGPage;