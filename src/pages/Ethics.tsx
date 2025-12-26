import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Users, Heart, Scale, Eye, BookOpen, Handshake, Target } from "lucide-react";

import logoEnexus from "@/assets/logo-enexus.png";
import logoKalasalingam from "@/assets/logo-kalasalingam.png";

const principles = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in all our interactions. We provide accurate information and never mislead our community.",
    details: [
      "Accurate representation of skills and knowledge",
      "Transparent about resource sources and limitations",
      "Honest feedback and assessments",
      "No plagiarism or intellectual property violations",
    ],
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "We welcome everyone regardless of their background, experience level, or identity. Our resources are designed to be accessible to all learners.",
    details: [
      "Diverse representation in content and examples",
      "Accessible resources for different learning styles",
      "Welcoming environment for beginners",
      "Support for underrepresented groups in tech",
    ],
  },
  {
    icon: Heart,
    title: "Respect",
    description: "We treat every member of our community with dignity and respect. We foster an environment where constructive criticism is encouraged, but harassment is never tolerated.",
    details: [
      "Constructive and kind communication",
      "Zero tolerance for harassment or discrimination",
      "Respect for different opinions and perspectives",
      "Privacy protection for all community members",
    ],
  },
  {
    icon: Scale,
    title: "Fairness",
    description: "We ensure equal access to resources and opportunities. We don't favor any particular tool, framework, or technology without valid technical reasoning.",
    details: [
      "Unbiased technology recommendations",
      "Equal treatment of all community members",
      "Fair recognition of contributions",
      "Objective assessment criteria",
    ],
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We are open about our decision-making processes, resource curation methods, and any potential conflicts of interest.",
    details: [
      "Clear explanation of content curation process",
      "Open about partnerships and sponsorships",
      "Transparent governance and policies",
      "Accessible feedback mechanisms",
    ],
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "We practice what we preach by continuously updating our knowledge and resources. We embrace feedback and adapt to the evolving tech landscape.",
    details: [
      "Regular content updates and reviews",
      "Openness to community corrections",
      "Staying current with industry trends",
      "Learning from mistakes and improving",
    ],
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "We believe in the power of community and open collaboration. We encourage sharing knowledge and helping others grow.",
    details: [
      "Open-source contribution support",
      "Peer-to-peer learning encouragement",
      "Mentorship programs and guidance",
      "Community-driven content development",
    ],
  },
  {
    icon: Target,
    title: "Accountability",
    description: "We take responsibility for our actions and content. When we make mistakes, we acknowledge them and work to correct them promptly.",
    details: [
      "Responsive to reported issues",
      "Clear correction and update policies",
      "Ownership of content quality",
      "Regular self-assessment and audits",
    ],
  },
];

const commitments = [
  {
    title: "For Learners",
    items: [
      "Provide accurate, up-to-date learning resources",
      "Offer clear pathways regardless of starting point",
      "Maintain free access to core learning materials",
      "Foster a supportive and encouraging community",
      "Respect your time with quality over quantity",
    ],
  },
  {
    title: "For Contributors",
    items: [
      "Credit all contributions appropriately",
      "Provide clear contribution guidelines",
      "Review submissions fairly and promptly",
      "Maintain open communication channels",
      "Protect contributor privacy and data",
    ],
  },
  {
    title: "For Partners",
    items: [
      "Maintain editorial independence",
      "Clearly disclose any sponsored content",
      "Align only with ethical organizations",
      "Prioritize community benefit over profit",
      "Honor all partnership commitments",
    ],
  },
];

const Ethics = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <img src={logoEnexus} alt="Enexus" className="h-6 mix-blend-multiply dark:mix-blend-normal dark:invert" />
              <span className="text-muted-foreground">×</span>
              <img src={logoKalasalingam} alt="Kalasalingam" className="h-6 mix-blend-multiply dark:mix-blend-normal dark:invert" />
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Shield className="w-4 h-4" />
            Our Commitment to Ethics
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Code of Ethics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our guiding principles that ensure we maintain the highest standards of integrity, 
            respect, and responsibility in everything we do.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
            <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              To democratize technology education by providing free, high-quality, and ethically-curated 
              learning resources that empower individuals from all backgrounds to achieve their career goals 
              in technology, while fostering a supportive and inclusive community.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Core Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground mb-4">{principle.description}</p>
                    <ul className="space-y-2">
                      {principle.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="pb-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commitments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((commitment) => (
              <div key={commitment.title} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">{commitment.title}</h3>
                <ul className="space-y-3">
                  {commitment.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs text-primary font-medium">{index + 1}</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 rounded-2xl bg-card border border-border text-center">
            <h2 className="text-2xl font-semibold mb-4">Report a Concern</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you witness or experience any behavior that violates our code of ethics, 
              please report it. All reports are handled confidentially and with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Report via Contact Form
              </Link>
              <a
                href="mailto:ethics@enexus-klu.edu"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
              >
                Email: ethics@enexus-klu.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            Last updated: December 2024 • This code of ethics is reviewed and updated annually.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Ethics;
