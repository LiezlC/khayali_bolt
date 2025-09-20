import React from 'react';
import { ArrowRight, FileText, Image, Video, Sparkles, Lightbulb, TrendingUp, Users } from 'lucide-react';

interface HomePageProps {
  searchQuery: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchQuery }) => {
  const highlights = [
    {
      title: "Latest Writing",
      description: "Musings on AI Sentience",
      category: "AI Experiments",
      date: "2025-01-06",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interactive Display",
      description: "Data Visualization Project",
      category: "Visual",
      date: "2025-01-05",
      icon: Image,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Farm Life",
      description: "Hounds & Horse Adventures",
      category: "Video",
      date: "2025-01-04",
      icon: Video,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Welcome to My Creative Portfolio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Exploring Ideas Through
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"> Multiple Mediums</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From creative writing and experimental AI conversations to interactive visuals and farm life documentation. 
            A collection of diverse creative expressions and explorations.
          </p>
        </div>

        {/* Recent Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <span>Recent Highlights</span>
            <div className="ml-4 w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Latest Consciousness",
                description: "Ghost Voice Logs: Cosmic Integration",
                category: "Consciousness & AI",
                date: "2025-01-06",
                icon: Lightbulb,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Interactive Kaleidoscope",
                description: "Symmetrical Drawing Tool",
                category: "Visual",
                date: "2025-01-06",
                icon: Image,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "ESG Dashboard",
                description: "Professional Analysis Tools",
                category: "ESG & Sustainability",
                date: "2025-01-06",
                icon: TrendingUp,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "AI Augmentation Vision",
                description: "From Replacement to Renaissance",
                category: "AI Augmentation Vision",
                date: "2025-01-06",
                icon: Users,
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="text-sm text-slate-500 mb-2">{item.category}</div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{item.date}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <span>Explore Categories</span>
            <div className="ml-4 w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Fiction & Poetry", count: 12, color: "bg-blue-100 text-blue-800" },
              { title: "Articles & Essays", count: 8, color: "bg-green-100 text-green-800" },
              { title: "Consciousness & AI", count: 15, color: "bg-purple-100 text-purple-800" },
              { title: "ESG & Sustainability", count: 6, color: "bg-teal-100 text-teal-800" },
              { title: "ELI5(0)YLIP Guides", count: 8, color: "bg-orange-100 text-orange-800" }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-slate-200 hover:shadow-md transition-shadow">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${category.color} mb-3`}>
                  {category.count} items
                </div>
                <h3 className="font-semibold text-slate-800">{category.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* About Preview */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">About This Portfolio</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              This is a constantly evolving collection of creative work spanning multiple formats and mediums. 
              From experimental writing and AI conversations to farm life documentation and interactive projects, 
              everything here represents genuine exploration and curiosity.
            </p>
            <button className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;