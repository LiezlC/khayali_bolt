import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface ContentViewerProps {
  content: {url: string, title: string} | null;
  onBack: () => void;
}

const ContentViewer: React.FC<ContentViewerProps> = ({ content, onBack }) => {
  if (!content) {
    return (
      <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-12">
          <p className="text-slate-500">No content selected</p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:ml-64 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with back button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-slate-800">{content.title}</h1>
            <a
              href={content.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        {/* Content iframe */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <iframe
            src={content.url}
            className="w-full h-screen border-0"
            title={content.title}
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentViewer;