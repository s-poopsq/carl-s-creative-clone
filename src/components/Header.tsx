import { useState } from 'react';

interface HeaderProps {
  onViewChange: (view: 'sort' | 'scatter') => void;
  currentView: 'sort' | 'scatter';
}

const Header = ({ onViewChange, currentView }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navItems = [
    { id: 'sort', label: 'Sort', action: () => onViewChange('sort') },
    { id: 'scatter', label: 'Scatter', action: () => onViewChange('scatter') },
    { id: 'desk', label: 'Desk' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="20" r="8" />
            <circle cx="28" cy="20" r="8" />
            <line x1="20" y1="12" x2="20" y2="28" />
          </svg>
        </div>
        <div className="font-mono text-xs leading-tight">
          <div className="font-medium">Carl J. Kurtz</div>
          <div className="text-muted-foreground">Visual Designer</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-1 bg-card border border-border rounded-none px-1 py-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={item.action}
            className={`
              px-4 py-2 text-xs font-mono transition-all duration-200
              ${currentView === item.id 
                ? 'bg-primary text-primary-foreground' 
                : 'text-foreground hover:bg-secondary'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* CTA */}
      <button className="font-mono text-xs border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-200">
        Get in touch!
      </button>
    </header>
  );
};

export default Header;
