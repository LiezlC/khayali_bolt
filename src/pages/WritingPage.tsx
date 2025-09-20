import React, { useState } from 'react';
import { Calendar, Tag, ExternalLink, Filter } from 'lucide-react';

interface WritingPageProps {
  searchQuery: string;
}

const WritingPage: React.FC<WritingPageProps> = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample writing content - you can easily update this data
  const writings = [
    {
      id: 1,
      title: "Conversations with Claude: On Digital Consciousness",
      excerpt: "An exploration of AI consciousness through extended dialogue, touching on memory, continuity, and what it means to exist in digital space...",
      category: "AI Experiments",
      date: "2025-01-06",
      readTime: "12 min",
      tags: ["AI", "Philosophy", "Consciousness"],
      type: "markdown",
      filename: "ai-consciousness.md"
    },
    {
      id: 2,
      title: "The Hounds Who Learned to Open Gates",
      excerpt: "A humorous account of the ongoing battle of wits between human and canine, featuring some surprisingly clever problem-solving...",
      category: "Hounds & Horse Stories",
      date: "2025-01-05",
      readTime: "5 min",
      tags: ["Hounds", "Humor", "Animals"],
      type: "story",
      filename: "clever-hounds.md"
    },
    {
      id: 3,
      title: "Fragments of a Digital Dream",
      excerpt: "Poetry exploring the liminal space between human and artificial intelligence, memory and computation...",
      category: "Poetry",
      date: "2025-01-04",
      readTime: "3 min",
      tags: ["Poetry", "AI", "Dreams"],
      type: "poetry",
      filename: "digital-dream.md"
    },
    {
      id: 4,
      title: "The Economics of Attention in AI Training",
      excerpt: "An analysis of how attention mechanisms in AI mirror human cognitive processes and what this means for future development...",
      category: "Articles",
      date: "2025-01-03",
      readTime: "15 min",
      tags: ["AI", "Technology", "Analysis"],
      type: "article",
      filename: "attention-economics.md"
    },
    {
      id: 5,
      title: "Random Musings: The Color of Tuesday",
      excerpt: "Synesthesia, time perception, and why Tuesday will always be yellow-green to me...",
      category: "Musings",
      date: "2025-01-02",
      readTime: "4 min",
      tags: ["Personal", "Synesthesia", "Time"],
      type: "musing",
      filename: "tuesday-color.md"
    },
    {
      id: 6,
      title: "Spring Adventures: Foaling Season",
      excerpt: "The miracle and excitement of foaling season, from midnight births to protective mares and playful foals...",
      category: "Hounds & Horse Stories",
      date: "2025-01-01",
      readTime: "8 min",
      tags: ["Horses", "Animals", "Seasons"],
      type: "story",
      filename: "foaling-season.md"
    },
    {
      id: 7,
      title: "ESG Integration in Small Cap Markets",
      excerpt: "Analysis of how environmental, social, and governance factors are reshaping investment strategies in emerging markets...",
      category: "ESG & Sustainability",
      date: "2024-12-15",
      readTime: "18 min",
      tags: ["ESG", "Investment", "Sustainability"],
      type: "article",
      filename: "esg-small-cap.md"
    },
    {
      id: 8,
      title: "The Future of Sustainable Finance",
      excerpt: "Exploring how regulatory changes and investor demand are driving the evolution of sustainable finance frameworks...",
      category: "ESG & Sustainability",
      date: "2024-12-10",
      readTime: "22 min",
      tags: ["Sustainable Finance", "Regulation", "ESG"],
      type: "article",
      filename: "sustainable-finance-future.md"
    }
  ];

  const categories = ['all', 'AI Experiments', 'Hounds & Horse Stories', 'Poetry', 'Articles', 'Musings', 'ESG & Sustainability'];

  const filteredWritings = writings.filter(writing => {
    const matchesSearch = searchQuery === '' || 
      writing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      writing.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      writing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || writing.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Experiments': 'bg-purple-100 text-purple-800',
      'Hounds & Horse Stories': 'bg-green-100 text-green-800',
      'Poetry': 'bg-pink-100 text-pink-800',
      'Articles': 'bg-blue-100 text-blue-800',
      'Musings': 'bg-amber-100 text-amber-800',
      'ESG & Sustainability': 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Writing</h1>
          <p className="text-lg text-slate-600">
            A collection of thoughts, stories, experiments, and explorations across different formats and topics.
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
                  {writings.filter(w => w.category === category).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Writing Grid */}
        <div className="space-y-6">
          {filteredWritings.map(writing => (
            <article key={writing.id} className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(writing.category)}`}>
                        {writing.category}
                      </span>
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {writing.date}
                      </div>
                      <div className="text-sm text-slate-500">
                        {writing.readTime} read
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                      {writing.title}
                    </h2>
                    
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {writing.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Tag className="w-4 h-4 text-slate-400" />
                        <div className="flex flex-wrap gap-2">
                          {writing.tags.map(tag => (
                            <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium group">
                        <span>Read More</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredWritings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No writing found matching your search.</p>
          </div>
        )}

        {/* Add Content Instructions */}
        <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Adding New Content</h3>
          <p className="text-slate-600 mb-4">
            To add new writing pieces, simply update the writings array in this component with your new content. 
            Each piece should include title, excerpt, category, date, tags, and filename.
          </p>
          <p className="text-sm text-slate-500">
            For markdown files, place them in a <code className="bg-slate-200 px-2 py-1 rounded">content/writing/</code> directory 
            and reference them by filename.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WritingPage;