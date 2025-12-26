import { Link } from 'react-router-dom';
import CornerBrackets from '@/components/CornerBrackets';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Bookmark } from 'lucide-react';
import logoKalasalingam from '@/assets/logo-kalasalingam.png';
import logoEnexus from '@/assets/logo-enexus.png';

const roleBasedRoadmaps = [
  { title: 'Frontend', url: 'https://roadmap.sh/frontend' },
  { title: 'Backend', url: 'https://roadmap.sh/backend' },
  { title: 'Full Stack', url: 'https://roadmap.sh/full-stack' },
  { title: 'DevOps', url: 'https://roadmap.sh/devops' },
  { title: 'DevSecOps', url: 'https://roadmap.sh/devsecops', isNew: true },
  { title: 'Data Analyst', url: 'https://roadmap.sh/data-analyst' },
  { title: 'AI Engineer', url: 'https://roadmap.sh/ai-engineer' },
  { title: 'AI and Data Scientist', url: 'https://roadmap.sh/ai-data-scientist' },
  { title: 'Data Engineer', url: 'https://roadmap.sh/data-engineer' },
  { title: 'Android', url: 'https://roadmap.sh/android' },
  { title: 'Machine Learning', url: 'https://roadmap.sh/machine-learning' },
  { title: 'PostgreSQL', url: 'https://roadmap.sh/postgresql-dba' },
  { title: 'iOS', url: 'https://roadmap.sh/ios' },
  { title: 'Blockchain', url: 'https://roadmap.sh/blockchain' },
  { title: 'QA', url: 'https://roadmap.sh/qa' },
  { title: 'Software Architect', url: 'https://roadmap.sh/software-architect' },
  { title: 'Cyber Security', url: 'https://roadmap.sh/cyber-security' },
  { title: 'UX Design', url: 'https://roadmap.sh/ux-design' },
  { title: 'Technical Writer', url: 'https://roadmap.sh/technical-writer' },
  { title: 'Game Developer', url: 'https://roadmap.sh/game-developer' },
  { title: 'Server Side Game Developer', url: 'https://roadmap.sh/server-side-game-developer' },
  { title: 'MLOps', url: 'https://roadmap.sh/mlops' },
  { title: 'Product Manager', url: 'https://roadmap.sh/product-manager' },
  { title: 'Engineering Manager', url: 'https://roadmap.sh/engineering-manager' },
  { title: 'Developer Relations', url: 'https://roadmap.sh/devrel' },
  { title: 'BI Analyst', url: 'https://roadmap.sh/bi-analyst' },
];

const skillBasedRoadmaps = [
  { title: 'SQL', url: 'https://roadmap.sh/sql' },
  { title: 'Computer Science', url: 'https://roadmap.sh/computer-science' },
  { title: 'React', url: 'https://roadmap.sh/react' },
  { title: 'Vue', url: 'https://roadmap.sh/vue' },
  { title: 'Angular', url: 'https://roadmap.sh/angular' },
  { title: 'JavaScript', url: 'https://roadmap.sh/javascript' },
  { title: 'TypeScript', url: 'https://roadmap.sh/typescript' },
  { title: 'Node.js', url: 'https://roadmap.sh/nodejs' },
  { title: 'Python', url: 'https://roadmap.sh/python' },
  { title: 'System Design', url: 'https://roadmap.sh/system-design' },
  { title: 'Java', url: 'https://roadmap.sh/java' },
  { title: 'ASP.NET Core', url: 'https://roadmap.sh/aspnet-core' },
  { title: 'API Design', url: 'https://roadmap.sh/api-design' },
  { title: 'Spring Boot', url: 'https://roadmap.sh/spring-boot' },
  { title: 'Flutter', url: 'https://roadmap.sh/flutter' },
  { title: 'C++', url: 'https://roadmap.sh/cpp' },
  { title: 'Rust', url: 'https://roadmap.sh/rust' },
  { title: 'Go', url: 'https://roadmap.sh/golang' },
  { title: 'Design and Architecture', url: 'https://roadmap.sh/software-design-architecture' },
  { title: 'GraphQL', url: 'https://roadmap.sh/graphql' },
  { title: 'React Native', url: 'https://roadmap.sh/react-native' },
  { title: 'Design System', url: 'https://roadmap.sh/design-system' },
  { title: 'Prompt Engineering', url: 'https://roadmap.sh/prompt-engineering' },
  { title: 'MongoDB', url: 'https://roadmap.sh/mongodb' },
  { title: 'Linux', url: 'https://roadmap.sh/linux' },
  { title: 'Kubernetes', url: 'https://roadmap.sh/kubernetes' },
  { title: 'Docker', url: 'https://roadmap.sh/docker' },
  { title: 'AWS', url: 'https://roadmap.sh/aws' },
  { title: 'Terraform', url: 'https://roadmap.sh/terraform' },
  { title: 'Data Structures & Algorithms', url: 'https://roadmap.sh/datastructures-and-algorithms' },
  { title: 'Redis', url: 'https://roadmap.sh/redis' },
  { title: 'Git and GitHub', url: 'https://roadmap.sh/git-github' },
  { title: 'PHP', url: 'https://roadmap.sh/php' },
  { title: 'Cloudflare', url: 'https://roadmap.sh/cloudflare' },
  { title: 'AI Red Teaming', url: 'https://roadmap.sh/ai-red-teaming' },
  { title: 'AI Agents', url: 'https://roadmap.sh/ai-agents' },
  { title: 'Next.js', url: 'https://roadmap.sh/nextjs' },
  { title: 'Code Review', url: 'https://roadmap.sh/code-review' },
  { title: 'Kotlin', url: 'https://roadmap.sh/kotlin' },
  { title: 'HTML', url: 'https://roadmap.sh/html' },
  { title: 'CSS', url: 'https://roadmap.sh/css' },
  { title: 'Swift & Swift UI', url: 'https://roadmap.sh/swift-ui' },
  { title: 'Shell / Bash', url: 'https://roadmap.sh/shell-bash' },
  { title: 'Laravel', url: 'https://roadmap.sh/laravel' },
  { title: 'Elasticsearch', url: 'https://roadmap.sh/elasticsearch', isNew: true },
  { title: 'WordPress', url: 'https://roadmap.sh/wordpress', isNew: true },
  { title: 'Django', url: 'https://roadmap.sh/django', isNew: true },
];

const projectIdeas = [
  { title: 'Frontend Projects', url: 'https://roadmap.sh/frontend/projects' },
  { title: 'Backend Projects', url: 'https://roadmap.sh/backend/projects' },
  { title: 'DevOps Projects', url: 'https://roadmap.sh/devops/projects' },
];

const bestPractices = [
  { title: 'AWS', url: 'https://roadmap.sh/aws-best-practices' },
  { title: 'API Security', url: 'https://roadmap.sh/api-security-best-practices' },
  { title: 'Backend Performance', url: 'https://roadmap.sh/backend-performance-best-practices' },
  { title: 'Frontend Performance', url: 'https://roadmap.sh/frontend-performance-best-practices' },
  { title: 'Code Review', url: 'https://roadmap.sh/code-review-best-practices' },
];

const guides = [
  { title: 'Python Multithreading', url: 'https://roadmap.sh/python/multithreading', type: 'Textual' },
  { title: '10 DevOps Deployment Tools for 2025', url: 'https://roadmap.sh/devops/deployment-tools', type: 'Textual' },
  { title: '30 C++ Interview Questions', url: 'https://roadmap.sh/questions/cpp', type: 'Quiz' },
  { title: 'Top 14 DevOps Testing Tools', url: 'https://roadmap.sh/devops/testing-tools', type: 'Textual' },
  { title: '30 System Design Interview Questions', url: 'https://roadmap.sh/questions/system-design', type: 'Quiz' },
  { title: '37 REST API Interview Questions', url: 'https://roadmap.sh/questions/rest-api', type: 'Quiz' },
  { title: '20 Python Interview Questions', url: 'https://roadmap.sh/questions/python', type: 'Quiz' },
  { title: 'Is Python Hard to Learn?', url: 'https://roadmap.sh/python/is-python-hard-to-learn', type: 'Textual' },
  { title: 'What Does a Data Analyst Do?', url: 'https://roadmap.sh/data-analyst/what-does-a-data-analyst-do', type: 'Textual' },
  { title: 'Go vs. Rust Compared', url: 'https://roadmap.sh/golang/vs-rust', type: 'Textual' },
  { title: 'Python vs JavaScript: Ultimate Guide 2025', url: 'https://roadmap.sh/python/python-vs-javascript-the-ultimate-guide-for-2025', type: 'Textual' },
  { title: '80 JavaScript Coding Interview Questions', url: 'https://roadmap.sh/questions/javascript-coding', type: 'Quiz' },
  { title: '100 Node.js Interview Questions', url: 'https://roadmap.sh/questions/nodejs', type: 'Quiz' },
  { title: '100 Java Interview Questions', url: 'https://roadmap.sh/questions/java', type: 'Quiz' },
];

interface RoadmapCardProps {
  title: string;
  url: string;
  isNew?: boolean;
}

const RoadmapCard = ({ title, url, isNew }: RoadmapCardProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-between p-4 bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 rounded-sm"
  >
    <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
      {title}
    </span>
    <div className="flex items-center gap-2">
      {isNew && (
        <span className="px-2 py-0.5 text-xs font-mono bg-primary/20 text-primary rounded-sm">
          New
        </span>
      )}
      <Bookmark className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </a>
);

const Resources = () => {
  return (
    <main className="min-h-screen dotted-background relative overflow-hidden">
      <CornerBrackets />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <img src={logoKalasalingam} alt="Kalasalingam Academy" className="h-8 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert" />
            <span className="text-foreground/40 text-lg">×</span>
            <img src={logoEnexus} alt="E-Nexus" className="h-8 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight text-foreground mb-6 animate-fade-in">
          Developer Roadmaps
        </h1>
        <p className="font-mono text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Community created roadmaps, guides and other educational content to help guide developers in picking up a path and guide their learnings.
        </p>
      </section>

      {/* Role-based Roadmaps */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <span className="px-6 py-2 border border-border bg-card font-mono text-sm text-foreground">
              Role-based Roadmaps
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {roleBasedRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.title} {...roadmap} />
            ))}
          </div>
        </div>
      </section>

      {/* Skill-based Roadmaps */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <span className="px-6 py-2 border border-border bg-card font-mono text-sm text-foreground">
              Skill-based Roadmaps
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {skillBasedRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.title} {...roadmap} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <span className="px-6 py-2 border border-border bg-card font-mono text-sm text-foreground">
              Project Ideas
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {projectIdeas.map((project) => (
              <RoadmapCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <span className="px-6 py-2 border border-border bg-card font-mono text-sm text-foreground">
              Best Practices
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {bestPractices.map((practice) => (
              <RoadmapCard key={practice.title} {...practice} />
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <span className="px-6 py-2 border border-border bg-card font-mono text-sm text-foreground">
              Guides
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {guides.map((guide) => (
              <a
                key={guide.title}
                href={guide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 rounded-sm"
              >
                <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                  {guide.title}
                </span>
                <span className="px-2 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded-sm">
                  {guide.type}
                </span>
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://roadmap.sh/guides"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
            >
              View All Guides
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
            Join the Community
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-12">
            roadmap.sh is the 6th most starred project on GitHub and is visited by hundreds of thousands of developers every month.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-card border border-border">
              <p className="font-display text-4xl font-light text-foreground mb-2">346K</p>
              <p className="font-mono text-sm text-muted-foreground">GitHub Stars</p>
            </div>
            <div className="p-8 bg-card border border-border">
              <p className="font-display text-4xl font-light text-foreground mb-2">2.1M+</p>
              <p className="font-mono text-sm text-muted-foreground">Registered Users</p>
            </div>
            <div className="p-8 bg-card border border-border">
              <p className="font-display text-4xl font-light text-foreground mb-2">43K</p>
              <p className="font-mono text-sm text-muted-foreground">Discord Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl italic text-foreground/80 mb-8">
            Start your learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="font-mono text-sm tracking-wide">
                Visit roadmap.sh
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link to="/">
              <Button variant="outline" size="lg" className="font-mono text-sm tracking-wide">
                Back to E-Nexus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs text-muted-foreground">
            Content sourced from roadmap.sh — Community created roadmaps, best practices, projects, articles, resources and journeys.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Resources;
