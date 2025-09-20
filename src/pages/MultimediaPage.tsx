import React, { useState } from 'react';
import { Play, ExternalLink, Calendar, Clock, Filter, Video, Headphones, Film } from 'lucide-react';

interface MultimediaPageProps {
  searchQuery: string;
}

const MultimediaPage: React.FC<MultimediaPageProps> = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample multimedia content - easily updateable
  const multimedia = [
    {
      id: 1,
      title: "AI Conversations: The NotebookLM Experiment",
      description: "Using NotebookLM to create an explainer about AI consciousness discussions, featuring synthetic voices exploring complex topics.",
      category: "Audio/Podcast",
      type: "NotebookLM Explainer",
      thumbnail: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12:34",
      date: "2025-01-06",
      url: "/media/ai-consciousness-explainer.mp3",
      featured: true
    },
    {
      id: 2,
      title: "Morning Routine: Hound Pack",
      description: "The delightful chaos of morning walks with the hound pack, featuring playful antics and training moments.",
      category: "Hounds & Horse Life",
      type: "Short Video",
      thumbnail: "https://images.pexels.com/photos/1459447/pexels-photo-1459447.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3:21",
      date: "2025-01-05",
      url: "/media/hound-pack-morning.mp4",
      featured: true
    },
    {
      id: 3,
      title: "Voiceover Demo Reel",
      description: "Professional voiceover demo showcasing commercial reads, character voices, and documentary narration across multiple styles and applications.",
      category: "Voiceover",
      type: "Demo Reel",
      thumbnail: "https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4:45",
      date: "2025-01-04",
      url: "/media/voiceover-demo-description.md",
      featured: false
    },
    {
      id: 4,
      title: "The Great Stable Escape",
      description: "Security camera footage of horses systematically figuring out stable latches, with commentary track.",
      category: "Hounds & Horse Life",
      type: "Funny/Documentary",
      thumbnail: "https://images.pexels.com/photos/1300526/pexels-photo-1300526.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "8:12",
      date: "2025-01-03",
      url: "/media/horse-escape-artist.mp4",
      featured: true
    },
    {
      id: 5,
      title: "Foaling Season Documentary",
      description: "Short documentary about the challenges and joys of foaling season with our mares.",
      category: "Hounds & Horse Life",
      type: "Mini Documentary",
      thumbnail: "https://images.pexels.com/photos/1300520/pexels-photo-1300520.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "15:28",
      date: "2025-01-02",
      url: "/media/foaling-season-doc.mp4",
      featured: false
    },
    {
      id: 7,
      title: "ESG Investing Explained",
      description: "Clear, accessible explanation of ESG investing principles and their impact on portfolio performance.",
      category: "ESG & Professional",
      type: "Educational Explainer",
      thumbnail: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "11:45",
      date: "2024-12-20",
      url: "/media/esg-investing-explainer.mp4",
      featured: false
    },
    {
      id: 6,
      title: "Animated Explainer: AI Training Process",
      description: "Simple animation explaining how AI models are trained, designed for non-technical audiences.",
      category: "Educational",
      type: "Animation",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "6:17",
      date: "2025-01-01",
      url: "/media/ai-training-animation.mp4",
      featured: false
    }
  ];

  const categories = ['all', 'Farm Life', 'Audio/Podcast', 'Voiceover', 'Educational'];

  const filteredMultimedia = multimedia.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Hounds & Horse Life': Video,
      'Audio/Podcast': Headphones,
      'Voiceover': Headphones,
      'Educational': Film,
      'ESG & Professional': Film
    };
    return icons[category as keyof typeof icons] || Video;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Hounds & Horse Life': 'bg-green-100 text-green-800',
      'Audio/Podcast': 'bg-purple-100 text-purple-800',
      'Voiceover': 'bg-blue-100 text-blue-800',
      'Educational': 'bg-orange-100 text-orange-800',
      'ESG & Professional': 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Multimedia</h1>
          <p className="text-lg text-slate-600">
            Videos, audio content, animations, and experimental audiovisual projects across different themes and formats.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex items-center space-x-4 overflow-x-auto pb-2">
          <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-amber-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category === 'all' ? 'All' : category}
              {category !== 'all' && (
                <span className="ml-2 text-xs opacity-75">
                  {multimedia.filter(m => m.category === category).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span>Featured Content</span>
              <div className="ml-4 w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {multimedia.filter(item => item.featured).slice(0, 2).map(item => {
                const CategoryIcon = getCategoryIcon(item.category);
                return (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <div className="aspect-video overflow-hidden relative">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-slate-800 ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {item.duration}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            <CategoryIcon className="w-3 h-3 inline mr-1" />
                            {item.category}
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
                          <div className="flex items-center text-sm text-slate-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{item.type}</span>
                          </div>
                          
                          <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium">
                            <span>Watch/Listen</span>
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
          {filteredMultimedia.map(item => {
            const CategoryIcon = getCategoryIcon(item.category);
            return (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-slate-800 ml-1" />
                      </div>
                    </div>
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
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        <CategoryIcon className="w-3 h-3 inline mr-1" />
                        {item.category}
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
                      <span className="text-xs text-slate-500">{item.type}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredMultimedia.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No multimedia content found matching your search.</p>
          </div>
        )}

        {/* Add Content Instructions */}
        <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Adding Multimedia Content</h3>
          <p className="text-slate-600 mb-4">
            Update the multimedia array in this component to add new videos and audio content. Each item needs 
            title, description, category, thumbnail, duration, date, and media file URL.
          </p>
          <p className="text-sm text-slate-500">
            Store media files in a <code className="bg-slate-200 px-2 py-1 rounded">public/media/</code> directory 
            and reference them in the URL field. Thumbnails should be hosted or use placeholder images from Pexels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultimediaPage;