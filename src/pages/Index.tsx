import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import CornerBrackets from '@/components/CornerBrackets';
import ProjectCard from '@/components/ProjectCard';
import DragHint from '@/components/DragHint';
import { projects } from '@/data/projects';

const Index = () => {
  const [view, setView] = useState<'sort' | 'scatter'>('sort');
  const [showDragHint, setShowDragHint] = useState(false);

  // Generate random positions for scatter view
  const scatteredPositions = useMemo(() => {
    return projects.map((_, index) => ({
      x: 100 + Math.random() * (window.innerWidth - 500),
      y: 150 + Math.random() * (window.innerHeight - 500),
      rotation: (Math.random() - 0.5) * 12,
    }));
  }, []);

  const handleViewChange = (newView: 'sort' | 'scatter') => {
    setView(newView);
    if (newView === 'scatter') {
      setShowDragHint(true);
      setTimeout(() => setShowDragHint(false), 3000);
    }
  };

  return (
    <main className="min-h-screen dotted-background relative overflow-hidden">
      <CornerBrackets />
      <Header onViewChange={handleViewChange} currentView={view} />
      
      <DragHint isVisible={showDragHint && view === 'scatter'} />

      {/* Project Cards Container */}
      <div 
        className={`
          relative min-h-screen pt-28 pb-16 px-6
          ${view === 'sort' ? 'container mx-auto' : ''}
        `}
      >
        {view === 'sort' ? (
          // Grid Layout
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in opacity-0 relative pt-8"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  date={project.date}
                  image={project.image}
                  description={project.description}
                  index={index}
                  isScattered={false}
                />
              </div>
            ))}
          </div>
        ) : (
          // Scattered Layout
          <div className="relative w-full h-[calc(100vh-7rem)]">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                date={project.date}
                image={project.image}
                description={project.description}
                index={index}
                initialPosition={scatteredPositions[index]}
                rotation={scatteredPositions[index]?.rotation}
                isScattered={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-6 left-6 right-6 flex justify-between items-center font-mono text-xs text-muted-foreground">
        <div>© 2025 Carl J. Kurtz</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">Imprint</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
