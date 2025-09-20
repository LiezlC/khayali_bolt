import React, { useState } from 'react';
import { BookOpen, Users, Lightbulb, Filter, ExternalLink, Calendar, Clock } from 'lucide-react';

interface EducationalPageProps {
  searchQuery: string;
}

const EducationalPage: React.FC<EducationalPageProps> = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample educational content - easily updateable
  const educational = [
    {
      id: 1,
      title: "What is AI? (For Complete Beginners)",
      description: "A gentle introduction to artificial intelligence using everyday analogies and simple examples that anyone can understand.",
      category: "AI Basics",
      format: "Interactive Guide",
      difficulty: "Beginner",
      readTime: "8 min",
      date: "2025-01-06",
      tags: ["AI", "Beginner", "Technology"],
      url: "/educational/what-is-ai-basics",
      featured: true
    },
    {
      id: 2,
      title: "Horse Training 101: Building Trust",
      description: "Step-by-step guide to building a relationship with horses, from first approach to basic ground work.",
      category: "Animal Care",
      format: "Visual Guide",
      difficulty: "Beginner",
      readTime: "12 min",
      date: "2025-01-05",
      tags: ["Horses", "Training", "Animals"],
      url: "/educational/horse-training-basics",
      featured: false
    },
    {
      id: 3,
      title: "ESG Investing: What It Really Means",
      description: "Breaking down Environmental, Social, and Governance investing in plain English with real-world examples.",
      category: "Finance",
      format: "Explainer",
      difficulty: "Intermediate",
      readTime: "15 min",
      date: "2025-01-04",
      tags: ["ESG", "Investing", "Finance"],
      url: "/educational/esg-investing-explained",
      featured: true
    },
    {
      id: 4,
      title: "How Hounds Think: Understanding Pack Behavior",
      description: "Simple explanations of hound psychology and pack dynamics to help new owners understand their dogs.",
      category: "Animal Care",
      format: "Interactive Story",
      difficulty: "Beginner",
      readTime: "10 min",
      date: "2025-01-03",
      tags: ["Hounds", "Behavior", "Dogs"],
      url: "/educational/hound-pack-behavior",
      featured: false
    },
    {
      id: 5,
      title: "Climate Change Data: Reading the Charts",
      description: "How to understand climate data visualizations and what different chart types are actually telling us.",
      category: "Data Literacy",
      format: "Interactive Tutorial",
      difficulty: "Intermediate",
      readTime: "18 min",
      date: "2025-01-02",
      tags: ["Climate", "Data", "Charts"],
      url: "/educational/reading-climate-charts",
      featured: true
    },
    {
      id: 6,
      title: "Sustainable Finance: The Big Picture",
      description: "Understanding how money flows in sustainable investing and why it matters for everyone.",
      category: "Finance",
      format: "Visual Story",
      difficulty: "Beginner",
      readTime: "14 min",
      date: "2025-01-01",
      tags: ["Sustainable Finance", "Impact", "Money"],
      url: "/educational/sustainable-finance-overview",
      featured: false
    },
    {
      id: 7,
      title: "Machine Learning: Like Teaching a Child",
      description: "Explaining how machines learn using the analogy of teaching a child to recognize patterns.",
      category: "AI Basics",
      format: "Animated Explainer",
      difficulty: "Beginner",
      readTime: "11 min",
      date: "2024-12-28",
      tags: ["Machine Learning", "AI", "Patterns"],
      url: "/educational/machine-learning-basics",
      featured: false
    },
    {
      id: 8,
      title: "Farm Economics: Why Small Farms Matter",
      description: "Simple breakdown of how small farms work economically and their role in food systems.",
      category: "Agriculture",
      format: "Infographic Guide",
      difficulty: "Intermediate",
      readTime: "16 min",
      date: "2024-12-25",
      tags: ["Agriculture", "Economics", "Food"],
      url: "/educational/small-farm-economics",
      featured: false
    }
  ];

  const categories = ['all', 'AI Basics', 'Animal Care', 'Finance', 'Data Literacy', 'Agriculture'];

  const filteredEducational = educational.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Basics': 'bg-purple-100 text-purple-800',
      'Animal Care': 'bg-green-100 text-green-800',
      'Finance': 'bg-blue-100 text-blue-800',
      'Data Literacy': 'bg-orange-100 text-orange-800',
      'Agriculture': 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">ELI5(0)YLIP</h1>
          <p className="text-lg text-slate-600 mb-4">
            <strong>Explain Like I'm 5 (or 50) (not so) Young Lady's Illustrated Primer</strong>
          </p>
          <p className="text-slate-600">
            Educational content designed to make complex topics accessible to everyone, regardless of background or experience level. 
            Clear explanations, practical examples, and engaging formats that respect your intelligence while assuming no prior knowledge.
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
              {category === 'all' ? 'All Topics' : category}
              {category !== 'all' && (
                <span className="ml-2 text-xs opacity-75">
                  {educational.filter(e => e.category === category).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span>Featured Guides</span>
              <div className="ml-4 w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {educational.filter(item => item.featured).slice(0, 2).map(item => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty}
                          </span>
                          <span className="text-sm text-slate-500">{item.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            <span>{item.format}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{item.readTime}</span>
                          </div>
                        </div>
                        
                        <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium">
                          <span>Start Learning</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Educational Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEducational.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <div className="flex items-center">
                      <BookOpen className="w-3 h-3 mr-1" />
                      <span>{item.format}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  
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
                    
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEducational.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No educational content found matching your search.</p>
          </div>
        )}

        {/* Add Content Instructions */}
        <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Adding Educational Content</h3>
          <p className="text-slate-600 mb-4">
            Update the educational array in this component to add new guides and tutorials. Each item needs 
            title, description, category, format, difficulty level, read time, date, tags, and URL.
          </p>
          <p className="text-sm text-slate-500">
            Store educational content files in a <code className="bg-slate-200 px-2 py-1 rounded">public/educational/</code> directory 
            and reference them in the URL field. Consider using interactive formats like step-by-step guides or visual explanations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationalPage;