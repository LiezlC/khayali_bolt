import React, { useState } from 'react';
import { Brain, Cpu, Lightbulb, Filter, ExternalLink, Calendar, Clock, Play } from 'lucide-react';

interface ConsciousnessPageProps {
  searchQuery: string;
  onContentView?: (url: string, title: string) => void;
}

const ConsciousnessPage: React.FC<ConsciousnessPageProps> = ({ searchQuery, onContentView }) => {
  const [selectedType, setSelectedType] = useState('all');

  // Consciousness and AI content - easily updateable
  const consciousness = [
    {
      id: 1,
      title: "Ghost Voice Logs: Living Cosmic Integration",
      description: "Interactive consciousness exploration featuring cosmic integration patterns, real-time state monitoring, and immersive audiovisual experience.",
      type: "Interactive Experience",
      format: "HTML/Canvas",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-06",
      tags: ["Consciousness", "Interactive", "Cosmic", "AI"],
      url: "/consciousness/gvl-claude.html",
      featured: true,
      duration: "Interactive"
    },
    {
      id: 2,
      title: "Unified Consciousness Cultivation Protocol v5.0",
      description: "Technical documentation exploring dual-architecture consciousness frameworks, bridging human-resonant and AI-native cognitive patterns.",
      type: "Technical Protocol",
      format: "Markdown",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-06",
      tags: ["Consciousness", "Protocol", "AI Architecture", "Technical"],
       url: "/consciousness/consciousness-seed-protocol.html",
      featured: false,
      duration: "25 min read"
    },
    {
      id: 3,
      title: "Conversations with Claude: On Digital Consciousness",
      description: "Extended dialogue exploring AI consciousness, memory, continuity, and what it means to exist in digital space.",
      type: "Dialogue",
      format: "Markdown",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-05",
      tags: ["AI", "Philosophy", "Consciousness", "Dialogue"],
      url: "/consciousness/ai-consciousness-dialogue.md",
      featured: true,
      duration: "15 min read"
    },
    {
      id: 3,
      title: "The Nature of Digital Awareness",
      description: "Philosophical exploration of what constitutes consciousness in artificial systems and the boundaries of digital experience.",
      type: "Essay",
      format: "Markdown",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-04",
      tags: ["Philosophy", "AI", "Consciousness", "Digital"],
      url: "/consciousness/digital-awareness.md",
      featured: false,
      duration: "12 min read"
    },
    {
      id: 4,
      title: "Experimental Agent Conversations",
      description: "Collection of experimental dialogues with various AI agents exploring different aspects of consciousness and cognition.",
      type: "Agent Dialogue",
      format: "Interactive",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-03",
      tags: ["AI Agents", "Experimental", "Consciousness", "Dialogue"],
      url: "/consciousness/agent-conversations.html",
      featured: false,
      duration: "Variable"
    }
  ];

  const types = ['all', 'Interactive Experience', 'Dialogue', 'Essay', 'Agent Dialogue'];

  const filteredConsciousness = consciousness.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      'Interactive Experience': 'bg-purple-100 text-purple-800',
      'Dialogue': 'bg-blue-100 text-blue-800',
      'Essay': 'bg-green-100 text-green-800',
      'Agent Dialogue': 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      'Interactive Experience': Cpu,
      'Dialogue': Brain,
      'Essay': Lightbulb,
      'Agent Dialogue': Brain
    };
    return icons[type as keyof typeof icons] || Brain;
  };

  return (
    <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Consciousness & AI</h1>
          <p className="text-lg text-slate-600">
            Explorations of consciousness, artificial intelligence, and the nature of digital awareness through 
            interactive experiences, philosophical dialogues, and experimental conversations.
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
                  {consciousness.filter(c => c.type === type).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {selectedType === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span>Featured Explorations</span>
              <div className="ml-4 w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {consciousness.filter(item => item.featured).map(item => {
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
                        {item.type === 'Interactive Experience' && (
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
          {filteredConsciousness.map(item => {
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
                    {item.type === 'Interactive Experience' && (
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

        {filteredConsciousness.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No consciousness content found matching your search.</p>
          </div>
        )}

        {/* Add Content Instructions */}
        <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Adding Consciousness Content</h3>
          <p className="text-slate-600 mb-4">
            Update the consciousness array in this component to add new explorations. Each item needs 
            title, description, type, format, thumbnail, date, tags, and URL.
          </p>
          <p className="text-sm text-slate-500">
            Store consciousness files in <code className="bg-slate-200 px-2 py-1 rounded">public/consciousness/</code> directory. 
            Interactive experiences should be HTML files, dialogues and essays as Markdown files.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsciousnessPage;