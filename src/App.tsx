import React, { useState } from 'react';
import { FileText, Image, Video, User, Home, Search, Menu, X, GraduationCap, Lightbulb, TrendingUp, Users } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import WritingPage from './pages/WritingPage';
import VisualPage from './pages/VisualPage';
import MultimediaPage from './pages/MultimediaPage';
import EducationalPage from './pages/EducationalPage';
import ConsciousnessPage from './pages/ConsciousnessPage';
import ESGPage from './pages/ESGPage';
import AIAugmentationPage from './pages/AIAugmentationPage';
import AboutPage from './pages/AboutPage';
import ContentViewer from './components/ContentViewer';

type Page = 'home' | 'writing' | 'visual' | 'multimedia' | 'educational' | 'consciousness' | 'esg' | 'ai-augmentation' | 'about' | 'content';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState<{url: string, title: string} | null>(null);

  const pages = {
    home: { component: HomePage, icon: Home, title: 'Home' },
    writing: { component: WritingPage, icon: FileText, title: 'Writing' },
    visual: { component: VisualPage, icon: Image, title: 'Visual & Interactive' },
    multimedia: { component: MultimediaPage, icon: Video, title: 'Multimedia' },
    educational: { component: EducationalPage, icon: GraduationCap, title: 'ELI5(0)YLIP' },
    consciousness: { component: ConsciousnessPage, icon: Lightbulb, title: 'Consciousness & AI' },
    esg: { component: ESGPage, icon: TrendingUp, title: 'ESG & Sustainability' },
    'ai-augmentation': { component: AIAugmentationPage, icon: Users, title: 'AI Augmentation Vision' },
    about: { component: AboutPage, icon: User, title: 'About' }
  };

  const handleContentView = (url: string, title: string) => {
    setCurrentContent({ url, title });
    setCurrentPage('content');
  };

  const handleBackToSection = () => {
    setCurrentContent(null);
    setCurrentPage('home');
  };

  const CurrentPageComponent = currentPage === 'content' ? 
    () => <ContentViewer content={currentContent} onBack={handleBackToSection} /> :
    pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="pt-20 pb-12">
        <CurrentPageComponent 
          searchQuery={searchQuery} 
          onContentView={handleContentView}
        />
      </main>
    </div>
  );
}

export default App;