import { motion } from 'framer-motion';
import { PageTransition, ScrollReveal, MicroInteraction } from '@/components/animations';
import Navbar from '@/components/Navbar';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Member {
  id: number;
  name: string;
  position: string;
  year: string;
  department: string;
  photo?: string;
}

// Sample members data - can be expanded
const members: Member[] = [
  {
    id: 1,
    name: 'Add Member Name',
    position: 'President',
    year: '4th Year',
    department: 'Computer Science',
  },
  {
    id: 2,
    name: 'Add Member Name',
    position: 'Vice President',
    year: '3rd Year',
    department: 'Electronics',
  },
  {
    id: 3,
    name: 'Add Member Name',
    position: 'Technical Lead',
    year: '3rd Year',
    department: 'Information Technology',
  },
  {
    id: 4,
    name: 'Add Member Name',
    position: 'Design Lead',
    year: '2nd Year',
    department: 'Computer Science',
  },
  {
    id: 5,
    name: 'Add Member Name',
    position: 'Event Coordinator',
    year: '2nd Year',
    department: 'Mechanical',
  },
  {
    id: 6,
    name: 'Add Member Name',
    position: 'Core Member',
    year: '2nd Year',
    department: 'Civil Engineering',
  },
];

const MemberCard = ({ member, index }: { member: Member; index: number }) => {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <ScrollReveal delay={index * 0.1}>
      <MicroInteraction type="hover-lift" className="h-full">
        <motion.div
          className="relative p-6 sm:p-8 border border-border bg-card h-full group overflow-hidden"
          whileHover={{ borderColor: 'hsl(var(--primary))' }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex flex-col items-center text-center">
            {/* Photo */}
            <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mb-4 border-2 border-border group-hover:border-primary transition-colors">
              {member.photo ? (
                <AvatarImage src={member.photo} alt={member.name} />
              ) : null}
              <AvatarFallback className="bg-secondary text-foreground font-display text-xl sm:text-2xl">
                {initials}
              </AvatarFallback>
            </Avatar>

            {/* Name */}
            <h3 className="font-display text-lg sm:text-xl font-medium text-foreground mb-1">
              {member.name}
            </h3>

            {/* Position - styled as paradox */}
            <p className="font-mono text-sm text-primary mb-3 italic">
              {member.position}
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-border mb-3" />

            {/* Year & Department */}
            <div className="space-y-1">
              <p className="font-mono text-xs text-muted-foreground">
                {member.year}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {member.department}
              </p>
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-display text-foreground">
              ∞
            </div>
          </div>
        </motion.div>
      </MicroInteraction>
    </ScrollReveal>
  );
};

const Members = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen dotted-background pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-4 sm:mb-6">
              The Polymaths
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-foreground/80 mb-4 sm:mb-6">
              Many minds. One vision.
            </p>
            <p className="font-mono text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Not specialists who know everything about something.<br className="hidden sm:block" />
              Generalists who connect everything to everything.
            </p>
          </motion.div>
        </section>

        {/* The Paradox Quote */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl italic text-foreground/90">
                "The master of one is the slave of none,<br className="hidden sm:block" />
                but the master of many sees what none can see."
              </blockquote>
            </ScrollReveal>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground text-center mb-4">
                Leadership
              </h2>
              <p className="font-mono text-sm sm:text-base text-muted-foreground text-center mb-12 sm:mb-16">
                Not authorities. Architects.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {members.slice(0, 3).map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Core Members Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground text-center mb-4">
                Core Members
              </h2>
              <p className="font-mono text-sm sm:text-base text-muted-foreground text-center mb-12 sm:mb-16">
                The builders. The thinkers. The doers.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {members.slice(3).map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-4">
                Become a Polymath
              </h2>
              <p className="font-mono text-sm sm:text-base text-muted-foreground mb-8">
                The paradox: to join, you must already be building.
              </p>
              <MicroInteraction type="magnetic">
                <button className="font-mono text-sm border-2 border-foreground px-6 sm:px-8 py-3 sm:py-4 hover:bg-foreground hover:text-background transition-all duration-300">
                  Apply to E-Nexus
                </button>
              </MicroInteraction>
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

export default Members;
