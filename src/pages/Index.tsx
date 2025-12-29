import { motion } from 'framer-motion';
import CornerBrackets from '@/components/CornerBrackets';
import { Button } from '@/components/ui/button';
import { PageTransition, ScrollReveal, MicroInteraction, AnimatedText } from '@/components/animations';
import Navbar from '@/components/Navbar';

const domains = [
  { title: 'Artificial Intelligence', desc: 'Machines that reason. Humans who decide.' },
  { title: 'Hack Culture', desc: 'Velocity over perfection. Signal over noise.' },
  { title: 'Automation & Systems', desc: 'If it repeats, it evolves.' },
  { title: 'Entrepreneurship', desc: 'Ideas tested against reality.' },
  { title: 'Ethical Technology', desc: 'Power demands responsibility.' },
];

const Index = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen dotted-background relative overflow-hidden pt-16 md:pt-20">
        <CornerBrackets />

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <motion.h1 
            className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-foreground mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <AnimatedText type="chars" delay={0.2}>E-NEXUS</AnimatedText>
          </motion.h1>
          <motion.p 
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-foreground/80 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Where Ideas Become Systems
          </motion.p>
          <motion.p 
            className="font-mono text-sm md:text-base text-muted-foreground max-w-xl mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            We don't prepare students for the future.<br />
            We teach them to design it.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <MicroInteraction type="magnetic">
              <Button variant="default" size="lg" className="font-mono text-sm tracking-wide">
                Enter the Ecosystem
              </Button>
            </MicroInteraction>
            <MicroInteraction type="magnetic">
              <Button variant="outline" size="lg" className="font-mono text-sm tracking-wide">
                Join the Builders
              </Button>
            </MicroInteraction>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border border-foreground/30 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1 h-2 bg-foreground/50 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* The Paradox */}
        <section className="py-20 sm:py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-8 sm:mb-12">
                The Paradox
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-mono text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 sm:mb-8">
                Education teaches answers.<br />
                Progress begins with questions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-mono text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                E-Nexus exists in the space between knowing and building —<br className="hidden sm:block" />
                where curiosity becomes execution,<br className="hidden sm:block" />
                and learning becomes leverage.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* What is E-Nexus */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-8 sm:mb-12">
                What is E-Nexus?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-mono text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8">
                Not a club.<br />
                Not a classroom.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-mono text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12">
                E-Nexus is a convergence of disciplines —<br className="hidden sm:block" />
                technology, design, logic, ethics, and entrepreneurship —<br className="hidden sm:block" />
                built for those who refuse to specialize too early<br className="hidden sm:block" />
                and refuse to think too small.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-foreground">
                We cultivate polymaths, not placeholders.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Domains of Thought & Action */}
        <section className="py-20 sm:py-32 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground text-center mb-12 sm:mb-16">
                Domains of Thought & Action
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {domains.map((domain, index) => (
                <ScrollReveal key={domain.title} delay={index * 0.1}>
                  <MicroInteraction type="hover-lift" className="h-full">
                    <div className="p-6 sm:p-8 border border-border bg-card h-full">
                      <h3 className="font-display text-lg sm:text-xl font-medium text-foreground mb-2 sm:mb-3">
                        {domain.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-muted-foreground">
                        {domain.desc}
                      </p>
                    </div>
                  </MicroInteraction>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* What We Practice */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-8 sm:mb-12">
                What We Practice
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-mono text-base sm:text-lg text-foreground/90 leading-loose mb-8 sm:mb-12">
                Building before believing.<br />
                Testing before teaching.<br />
                Execution before explanation.
              </p>
            </ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {['Hackathons', 'Bootcamps', 'Startup Sprints', 'Research', 'Social Impact'].map((item, index) => (
                <ScrollReveal key={item} delay={0.2 + index * 0.1} direction="none">
                  <MicroInteraction type="tap-shrink">
                    <span className="px-4 sm:px-6 py-2 sm:py-3 border border-border bg-card font-mono text-xs sm:text-sm text-foreground inline-block">
                      {item}
                    </span>
                  </MicroInteraction>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why E-Nexus Exists */}
        <section className="py-20 sm:py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-8 sm:mb-12">
                Why E-Nexus Exists
              </h2>
            </ScrollReveal>
            <div className="space-y-4 sm:space-y-6 font-mono text-sm sm:text-base md:text-lg text-muted-foreground">
              <ScrollReveal delay={0.1} direction="left">
                <p>Because knowledge without application is fragile.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.2} direction="right">
                <p>Because specialization without perspective is dangerous.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3} direction="left">
                <p>Because the future belongs to those who connect dots others never see.</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 sm:mb-8">
                Leadership
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-mono text-base sm:text-lg text-muted-foreground">
                Not authorities.<br />
                Architects.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* The Invitation */}
        <section className="py-20 sm:py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 sm:mb-8">
                The Invitation
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-foreground/80 mb-8 sm:mb-12">
                Build what doesn't exist yet.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <MicroInteraction type="magnetic">
                  <Button variant="default" size="lg" className="font-mono text-sm tracking-wide">
                    Join E-Nexus
                  </Button>
                </MicroInteraction>
                <MicroInteraction type="magnetic">
                  <Button variant="outline" size="lg" className="font-mono text-sm tracking-wide">
                    Collaborate
                  </Button>
                </MicroInteraction>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} E-Nexus. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
};

export default Index;
