import { useState } from 'react';
import { Link } from 'react-router-dom';
import CornerBrackets from '@/components/CornerBrackets';
import { RoadmapVisual } from '@/components/RoadmapVisual';
import { roadmaps, categories } from '@/data/roadmapsData';
import { ArrowLeft } from 'lucide-react';
import logoKalasalingam from '@/assets/logo-kalasalingam.png';
import logoEnexus from '@/assets/logo-enexus.png';

const Resources = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = roadmaps.filter((r) => {
    const matchesCategory = filter === 'all' || r.category === filter;
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
                          r.subtitle.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen dotted-background relative overflow-hidden">
      <CornerBrackets />
      
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <img src={logoKalasalingam} alt="Kalasalingam" className="h-8 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert" />
            <span className="text-foreground/40">×</span>
            <img src={logoEnexus} alt="E-Nexus" className="h-8 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert" />
          </div>
        </div>
      </header>

      <section className="py-16 px-6 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight text-foreground mb-4">
          Developer Roadmaps
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
          Visual learning paths to guide developers in picking up skills and growing their careers.
        </p>
        
        <input
          type="text"
          placeholder="Search roadmaps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-card border border-border font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 font-mono text-xs border transition-all ${
                filter === cat.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-card border border-border">
            <p className="font-display text-2xl text-foreground">{roadmaps.length}</p>
            <p className="font-mono text-xs text-muted-foreground">Roadmaps</p>
          </div>
          <div className="p-4 bg-card border border-border">
            <p className="font-display text-2xl text-foreground">{roadmaps.reduce((a, r) => a + r.steps.length, 0)}</p>
            <p className="font-mono text-xs text-muted-foreground">Steps</p>
          </div>
          <div className="p-4 bg-card border border-border">
            <p className="font-display text-2xl text-foreground">{roadmaps.reduce((a, r) => a + r.steps.reduce((b, s) => b + s.items.length, 0), 0)}+</p>
            <p className="font-mono text-xs text-muted-foreground">Topics</p>
          </div>
          <div className="p-4 bg-card border border-border">
            <p className="font-display text-2xl text-foreground">2025</p>
            <p className="font-mono text-xs text-muted-foreground">Updated</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto space-y-3">
          {filtered.length === 0 ? (
            <p className="text-center font-mono text-muted-foreground py-12">No roadmaps found</p>
          ) : (
            filtered.map((roadmap) => (
              <RoadmapVisual key={roadmap.id} roadmap={roadmap} />
            ))
          )}
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <p className="font-mono text-xs text-muted-foreground text-center">
          Content adapted from roadmap.sh — Community created roadmaps for developers
        </p>
      </footer>
    </main>
  );
};

export default Resources;
