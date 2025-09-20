import React from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: any) => void;
  pages: any;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setCurrentPage,
  pages,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  const handlePageChange = (page: string) => {
    setCurrentPage(page as any);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-slate-200 overflow-y-auto">
        <div className="p-6">
          <ul className="space-y-2">
            {Object.entries(pages).map(([key, page]) => {
              const Icon = (page as any).icon;
              return (
                <li key={key}>
                  <button
                    onClick={() => handlePageChange(key)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      currentPage === key
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                        : 'hover:bg-slate-100 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{(page as any).title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="p-6">
            <ul className="space-y-2">
              {Object.entries(pages).map(([key, page]) => {
                const Icon = (page as any).icon;
                return (
                  <li key={key}>
                    <button
                      onClick={() => handlePageChange(key)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        currentPage === key
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                          : 'hover:bg-slate-100 text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{(page as any).title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;