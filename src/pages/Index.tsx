import { ArrowRight, Brain, Zap, Cog, Rocket, Shield } from 'lucide-react';

const Index = () => {
  const domains = [
    { icon: Brain, title: 'Artificial Intelligence', desc: 'Machines that reason. Humans who decide.' },
    { icon: Zap, title: 'Hack Culture', desc: 'Velocity over perfection. Signal over noise.' },
    { icon: Cog, title: 'Automation & Systems', desc: 'If it repeats, it evolves.' },
    { icon: Rocket, title: 'Entrepreneurship', desc: 'Ideas tested against reality.' },
    { icon: Shield, title: 'Ethical Technology', desc: 'Power demands responsibility.' },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Grid overlay */}
      <div className="fixed inset-0 grid-background opacity-30 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-primary glow-text">E</span>-NEXUS
          </h1>
          
          <p 
            className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Where Ideas Become Systems
          </p>
          
          <div 
            className="section-line w-32 mx-auto my-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          />
          
          <p 
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            We don't prepare students for the future.<br />
            <span className="text-foreground font-medium">We teach them to design it.</span>
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            <button className="group px-8 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:glow-box transition-all duration-300 flex items-center justify-center gap-2">
              Enter the Ecosystem
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-border text-foreground font-medium text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all duration-300">
              Join the Builders
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* The Paradox */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-primary uppercase mb-8">The Paradox</p>
          
          <blockquote className="text-2xl md:text-4xl font-light leading-relaxed mb-8">
            <span className="text-muted-foreground">Education teaches answers.</span><br />
            <span className="text-foreground">Progress begins with questions.</span>
          </blockquote>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            E-Nexus exists in the space between knowing and building —<br />
            where curiosity becomes execution,<br />
            and learning becomes leverage.
          </p>
        </div>
      </section>

      {/* What is E-Nexus */}
      <section className="relative py-32 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono tracking-[0.3em] text-primary uppercase mb-8 text-center">What is E-Nexus?</p>
          
          <div className="text-center mb-12">
            <p className="text-muted-foreground mb-2">Not a club.</p>
            <p className="text-muted-foreground mb-8">Not a classroom.</p>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
              E-Nexus is a <span className="text-primary">convergence of disciplines</span> —
              technology, design, logic, ethics, and entrepreneurship —
              built for those who refuse to specialize too early
              and refuse to think too small.
            </p>
          </div>
          
          <p className="text-center text-xl font-medium text-foreground">
            We cultivate <span className="text-primary">polymaths</span>, not placeholders.
          </p>
        </div>
      </section>

      {/* Domains */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono tracking-[0.3em] text-primary uppercase mb-16 text-center">Domains of Thought & Action</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <div 
                key={domain.title}
                className="group p-8 border border-border bg-card/30 hover:border-primary/50 hover:bg-card/60 transition-all duration-500"
              >
                <domain.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-medium mb-3">{domain.title}</h3>
                <p className="text-sm text-muted-foreground">{domain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Practice */}
      <section className="relative py-32 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-primary uppercase mb-12">What We Practice</p>
          
          <div className="space-y-2 text-xl md:text-2xl font-light mb-16">
            <p><span className="text-primary">Building</span> before believing.</p>
            <p><span className="text-primary">Testing</span> before teaching.</p>
            <p><span className="text-primary">Execution</span> before explanation.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {['Hackathons', 'Bootcamps', 'Startup sprints', 'Research', 'Social impact'].map((item) => (
              <span key={item} className="px-4 py-2 border border-border bg-background/50">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why E-Nexus Exists */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-primary uppercase mb-12">Why E-Nexus Exists</p>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>Because knowledge without application is <span className="text-foreground">fragile</span>.</p>
            <p>Because specialization without perspective is <span className="text-foreground">dangerous</span>.</p>
            <p>Because the future belongs to those who <span className="text-primary">connect dots others never see</span>.</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-32 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-primary uppercase mb-8">Leadership</p>
          
          <p className="text-2xl md:text-3xl font-light">
            <span className="text-muted-foreground">Not authorities.</span><br />
            <span className="text-foreground">Architects.</span>
          </p>
        </div>
      </section>

      {/* The Invitation / CTA */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-primary uppercase mb-8">The Invitation</p>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Build what doesn't exist yet.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-10 py-5 bg-primary text-primary-foreground font-medium tracking-wide hover:glow-box-intense transition-all duration-300 flex items-center justify-center gap-3">
              Join E-Nexus
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-border text-foreground font-medium tracking-wide hover:border-primary hover:text-primary transition-all duration-300">
              Collaborate
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold">
            <span className="text-primary">E</span>-NEXUS
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 E-Nexus. Where ideas become systems.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
