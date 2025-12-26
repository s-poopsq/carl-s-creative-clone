import CornerBrackets from '@/components/CornerBrackets';
import { Button } from '@/components/ui/button';
import logoKalasalingam from '@/assets/logo-kalasalingam.png';
import logoEnexus from '@/assets/logo-enexus.png';

const domains = [
  { title: 'Artificial Intelligence', desc: 'Machines that reason. Humans who decide.' },
  { title: 'Hack Culture', desc: 'Velocity over perfection. Signal over noise.' },
  { title: 'Automation & Systems', desc: 'If it repeats, it evolves.' },
  { title: 'Entrepreneurship', desc: 'Ideas tested against reality.' },
  { title: 'Ethical Technology', desc: 'Power demands responsibility.' },
];

const Index = () => {
  return (
    <main className="min-h-screen dotted-background relative overflow-hidden">
      <CornerBrackets />
      
      {/* Logos */}
      <div className="absolute top-8 left-0 right-0 flex justify-center items-center gap-8 px-6 z-10">
        <img src={logoKalasalingam} alt="Kalasalingam Academy" className="h-16 md:h-20 object-contain" />
        <img src={logoEnexus} alt="E-Nexus" className="h-16 md:h-20 object-contain" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-foreground mb-6 animate-fade-in">
          E-NEXUS
        </h1>
        <p className="font-display text-2xl md:text-3xl lg:text-4xl italic text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Where Ideas Become Systems
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground max-w-xl mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          We don't prepare students for the future.<br />
          We teach them to design it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button variant="default" size="lg" className="font-mono text-sm tracking-wide">
            Enter the Ecosystem
          </Button>
          <Button variant="outline" size="lg" className="font-mono text-sm tracking-wide">
            Join the Builders
          </Button>
        </div>
      </section>

      {/* The Paradox */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12">
            The Paradox
          </h2>
          <p className="font-mono text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
            Education teaches answers.<br />
            Progress begins with questions.
          </p>
          <p className="font-mono text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            E-Nexus exists in the space between knowing and building —<br />
            where curiosity becomes execution,<br />
            and learning becomes leverage.
          </p>
        </div>
      </section>

      {/* What is E-Nexus */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12">
            What is E-Nexus?
          </h2>
          <p className="font-mono text-lg text-foreground/80 mb-8">
            Not a club.<br />
            Not a classroom.
          </p>
          <p className="font-mono text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            E-Nexus is a convergence of disciplines —<br />
            technology, design, logic, ethics, and entrepreneurship —<br />
            built for those who refuse to specialize too early<br />
            and refuse to think too small.
          </p>
          <p className="font-display text-2xl md:text-3xl italic text-foreground">
            We cultivate polymaths, not placeholders.
          </p>
        </div>
      </section>

      {/* Domains of Thought & Action */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-16">
            Domains of Thought & Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div 
                key={domain.title}
                className="p-8 border border-border bg-card hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {domain.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  {domain.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Practice */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12">
            What We Practice
          </h2>
          <p className="font-mono text-lg text-foreground/90 leading-loose mb-12">
            Building before believing.<br />
            Testing before teaching.<br />
            Execution before explanation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Hackathons', 'Bootcamps', 'Startup Sprints', 'Research', 'Social Impact'].map((item) => (
              <span 
                key={item}
                className="px-6 py-3 border border-border bg-card font-mono text-sm text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why E-Nexus Exists */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12">
            Why E-Nexus Exists
          </h2>
          <div className="space-y-6 font-mono text-base md:text-lg text-muted-foreground">
            <p>Because knowledge without application is fragile.</p>
            <p>Because specialization without perspective is dangerous.</p>
            <p>Because the future belongs to those who connect dots others never see.</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
            Leadership
          </h2>
          <p className="font-mono text-lg text-muted-foreground">
            Not authorities.<br />
            Architects.
          </p>
        </div>
      </section>

      {/* The Invitation */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
            The Invitation
          </h2>
          <p className="font-display text-2xl md:text-3xl italic text-foreground/80 mb-12">
            Build what doesn't exist yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="font-mono text-sm tracking-wide">
              Join E-Nexus
            </Button>
            <Button variant="outline" size="lg" className="font-mono text-sm tracking-wide">
              Collaborate
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} E-Nexus. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
