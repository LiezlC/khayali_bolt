import React, { useState } from 'react';
import { Users, Zap, Heart, Filter, ExternalLink, Calendar, Clock, Play } from 'lucide-react';

interface AIAugmentationPageProps {
  searchQuery: string;
  onContentView?: (url: string, title: string) => void;
}

const AIAugmentationPage: React.FC<AIAugmentationPageProps> = ({ searchQuery, onContentView }) => {
  const [selectedType, setSelectedType] = useState('all');

  // AI Augmentation content - easily updateable
  const augmentationContent = [
    {
      id: 1,
      title: "From Replacement to Renaissance",
      description: "Original interactive manifesto exploring the vision of AI that amplifies human potential rather than replacing it. Features transformation stories and actionable frameworks.",
      type: "Interactive Manifesto",
      format: "HTML/Interactive",
      thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-06",
      tags: ["AI", "Human Augmentation", "Future of Work", "Manifesto"],
      url: "/ai-augmentation/claudeopus_ai-augmentation-vision.html",
      featured: true,
      duration: "Interactive"
    },
    {
      id: 2,
      title: "AI Augmentation: Beyond Replacement",
      description: "Comprehensive exploration of AI augmentation with detailed case studies, transformation pathways, and real-world examples of human-AI collaboration.",
      type: "Interactive Guide",
      format: "HTML/Interactive",
      thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-06",
      tags: ["AI", "Transformation", "Case Studies", "Implementation"],
      url: "/ai-augmentation/ai-augmentation-comprehensive.html",
      featured: true,
      duration: "Interactive"
    },
    {
      id: 3,
      title: "The Augmentation Playbook",
      description: "Practical guide for organizations looking to implement human-AI collaboration strategies that elevate rather than eliminate roles.",
      type: "Strategy Guide",
      format: "Markdown",
      thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-05",
      tags: ["Strategy", "Implementation", "Human-AI Collaboration"],
      url: "/ai-augmentation/augmentation-playbook.md",
      featured: false,
      duration: "25 min read"
    },
    {
      id: 3,
      title: "Case Studies: Elevation in Action",
      description: "Real-world examples of companies that successfully transformed roles through AI augmentation rather than replacement.",
      type: "Case Studies",
      format: "Interactive",
      thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-04",
      tags: ["Case Studies", "Transformation", "Success Stories"],
      url: "/ai-augmentation/elevation-case-studies.html",
      featured: true,
      duration: "Interactive"
    },
    {
      id: 4,
      title: "The Economics of Human Elevation",
      description: "Analysis of the economic benefits of augmentation vs. replacement strategies, including ROI calculations and long-term value creation.",
      type: "Economic Analysis",
      format: "Markdown",
      thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-03",
      tags: ["Economics", "ROI", "Value Creation", "Analysis"],
      url: "/ai-augmentation/economics-of-elevation.md",
      featured: false,
      duration: "20 min read"
    }
  ];

  const types = ['all', 'Interactive Manifesto', 'Strategy Guide', 'Case Studies', 'Economic Analysis'];

  const filteredContent = augmentationContent.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      'Interactive Manifesto': 'bg-purple-100 text-purple-800',
      'Strategy Guide': 'bg-blue-100 text-blue-800',
      'Case Studies': 'bg-green-100 text-green-800',
      'Economic Analysis': 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      'Interactive Manifesto': Zap,
      'Strategy Guide': Users,
      'Case Studies': Heart,
      'Economic Analysis': Users
    };
    return icons[type as keyof typeof icons] || Users;
  };

  return (
    <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">AI Augmentation Vision</h1>
          <p className="text-lg text-slate-600">
            Exploring the future where AI amplifies human potential rather than replacing it. Manifestos, strategies, 
            and real-world examples of human-AI collaboration that elevates everyone.
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
                  {augmentationContent.filter(c => c.type === type).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {selectedType === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span>Featured Vision</span>
              <div className="ml-4 w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {augmentationContent.filter(item => item.featured).map(item => {
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
                        {item.type === 'Interactive Manifesto' && (
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-slate-800 ml-1" />
                            </div>
                          </div>
                        )}
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
                            <span>Explore</span>
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
          {filteredContent.map(item => {
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
                    {item.type === 'Interactive Manifesto' && (
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-slate-800 ml-1" />
                        </div>
                      </div>
                    )}
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

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No AI augmentation content found matching your search.</p>
          </div>
        )}

        {/* Add Content Instructions */}
        <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Adding AI Augmentation Content</h3>
          <p className="text-slate-600 mb-4">
            Update the augmentationContent array in this component to add new vision pieces. Each item needs 
            title, description, type, format, thumbnail, date, tags, and URL.
          </p>
          <p className="text-sm text-slate-500">
            Store AI augmentation files in <code className="bg-slate-200 px-2 py-1 rounded">public/ai-augmentation/</code> directory. 
            Interactive manifestos should be HTML files, guides and analysis as Markdown files.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAugmentationPage;