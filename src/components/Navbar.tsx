import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoKalasalingam from '@/assets/logo-kalasalingam.png';
import logoEnexus from '@/assets/logo-enexus.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/members', label: 'Members' },
  { to: '/resources', label: 'Resources' },
  { to: '/faq', label: 'FAQ' },
  { to: '/ethics', label: 'Ethics' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logos */}
          <Link to="/" className="flex items-center gap-2 sm:gap-4">
            <img 
              src={logoKalasalingam} 
              alt="Kalasalingam Academy" 
              className="h-8 sm:h-10 md:h-12 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert" 
            />
            <span className="text-foreground/60 text-lg sm:text-xl font-light">×</span>
            <img 
              src={logoEnexus} 
              alt="E-Nexus" 
              className="h-8 sm:h-10 md:h-12 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  font-mono text-sm px-4 py-2 transition-all duration-200 border
                  ${location.pathname === item.to 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'text-muted-foreground hover:text-foreground border-transparent hover:border-border hover:bg-card/50'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-card transition-colors border border-border"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block font-mono text-sm px-4 py-3 transition-all duration-200 border
                      ${location.pathname === item.to 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'text-muted-foreground hover:text-foreground border-border hover:bg-card/50'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
