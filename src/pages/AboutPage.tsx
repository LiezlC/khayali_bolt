import React from 'react';
import { Mail, ExternalLink, Heart, Lightbulb, Users, Target } from 'lucide-react';

interface AboutPageProps {
  searchQuery: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ searchQuery }) => {
  return (
    <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About</h1>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Welcome to My Creative Space</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  This portfolio is a constantly evolving collection of creative explorations across multiple formats and mediums. 
                  From experimental writing and AI conversations to farm life documentation and interactive projects, 
                  everything here represents genuine curiosity and the joy of creating.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Find Here */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <span>What You'll Find Here</span>
            <div className="ml-4 w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Experimental Writing</h3>
              <p className="text-slate-600">
                From creative fiction and poetry to articles and random musings. Including experimental 
                conversations with AI about consciousness, creativity, and the nature of digital existence.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Farm Life Documentation</h3>
              <p className="text-slate-600">
                Life on a small farm brings daily surprises. From clever goats who've mastered gate latches 
                to the miracle of calving season, these stories capture the humor and wonder of rural life.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Interactive Projects</h3>
              <p className="text-slate-600">
                Visual storytelling through data visualization, interactive displays, and experimental 
                web projects that blend technology with creative expression.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Multimedia Experiments</h3>
              <p className="text-slate-600">
                Audio content including voiceover work, NotebookLM-style explainers, video content 
                from hounds & horse adventures, and experimental audiovisual projects.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">ESG & Sustainability</h3>
              <p className="text-slate-600">
                Professional insights from 25 years in sustainable finance, ESG integration, and impact investing. 
                Analysis, commentary, and thought leadership on the evolving landscape of responsible investment.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">ELI5(0)YLIP Educational</h3>
              <p className="text-slate-600">
                Complex topics explained in accessible, engaging ways. Educational content that respects your intelligence 
                while assuming no prior knowledge - from AI basics to sustainable finance to animal behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-12">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Creative Philosophy</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                I believe in the power of curiosity-driven creation. Whether it's exploring AI consciousness through dialogue, 
                documenting the daily dramas of farm animals, or creating interactive visualizations, the common thread 
                is genuine interest and the willingness to experiment.
              </p>
              <p className="text-slate-600 leading-relaxed">
                This portfolio intentionally spans multiple formats because creativity doesn't fit neatly into categories. 
                A conversation with an AI might inspire a poem, which might become a visual project, which might turn into 
                a video essay. The connections between different forms of expression are often where the most interesting 
                discoveries happen.
              </p>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <span>Current Focus</span>
            <div className="ml-4 w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-2">AI Consciousness Dialogues</h3>
              <p className="text-slate-600 text-sm">
                Ongoing series of conversations exploring the nature of digital consciousness, memory, and identity.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-2">ESG Impact Dashboard</h3>
              <p className="text-slate-600 text-sm">
                Interactive visualization showing the correlation between ESG metrics and financial performance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-2">Hounds & Horse Documentation</h3>
              <p className="text-slate-600 text-sm">
                Ongoing video series documenting the adventures and training of horses and hounds.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Interested in collaborating, have questions about a project, or just want to chat about AI, farming, 
            or creative processes? I'd love to hear from you.
          </p>
          
          <div className="space-y-3">
            <a 
              href="mailto:hello@khayali.com" 
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@khayali.com</span>
            </a>
            
            <a 
              href="https://khayali.com" 
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>www.khayali.com</span>
            </a>
          </div>
        </section>

        {/* Management Instructions */}
        <section className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Managing This Site</h3>
          <p className="text-slate-600 mb-4">
            This portfolio is built to be easily updateable. To add new content:
          </p>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>• Update content arrays in each page component (WritingPage.tsx, VisualPage.tsx, MultimediaPage.tsx)</li>
            <li>• Add new files to appropriate directories (content/writing/, public/projects/, public/media/)</li>
            <li>• Update the homepage highlights and categories as needed</li>
            <li>• Modify this About page to reflect current projects and focus areas</li>
          </ul>
          <p className="text-xs text-slate-500 mt-4">
            No complex deployment process needed - just update the files and the changes will be reflected immediately.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;