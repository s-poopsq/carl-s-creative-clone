import { useState } from 'react';
import { Link } from 'react-router-dom';
import CornerBrackets from '@/components/CornerBrackets';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronDown, ChevronUp, Code, Server, Cloud, Brain, Palette, Shield, Database, Terminal, Smartphone, Gamepad2, Users, LineChart, BookOpen, Wrench, Rocket } from 'lucide-react';
import logoKalasalingam from '@/assets/logo-kalasalingam.png';
import logoEnexus from '@/assets/logo-enexus.png';

interface RoadmapData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
  topics: { category: string; items: string[] }[];
  faqs: { q: string; a: string }[];
}

const roadmaps: RoadmapData[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    subtitle: 'Step by step guide to becoming a modern frontend developer in 2025',
    description: 'A frontend developer uses HTML, CSS, and JavaScript to design and build the visual and interactive elements of websites and applications. They ensure the interface is responsive, accessible, and visually appealing.',
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-500/20 to-cyan-500/20',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React/Vue/Angular', 'Responsive Design', 'Version Control', 'Testing', 'Web Performance', 'Accessibility'],
    topics: [
      { category: 'Internet Basics', items: ['How the internet works', 'HTTP/HTTPS', 'Domain Names', 'DNS', 'Browsers'] },
      { category: 'Core Technologies', items: ['HTML', 'CSS', 'JavaScript'] },
      { category: 'Version Control', items: ['Git', 'GitHub', 'GitLab'] },
      { category: 'Package Managers', items: ['npm', 'yarn', 'pnpm'] },
      { category: 'Frameworks', items: ['React', 'Vue.js', 'Angular', 'Svelte', 'Solid JS'] },
      { category: 'CSS Tools', items: ['Tailwind CSS', 'CSS Modules', 'Styled Components', 'Sass'] },
      { category: 'Build Tools', items: ['Vite', 'Webpack', 'esbuild', 'Parcel', 'Rollup'] },
      { category: 'Testing', items: ['Jest', 'Vitest', 'Cypress', 'Playwright'] },
      { category: 'Type Checking', items: ['TypeScript'] },
      { category: 'SSR/SSG', items: ['Next.js', 'Nuxt.js', 'Astro', 'SvelteKit'] },
      { category: 'Mobile/Desktop', items: ['React Native', 'Flutter', 'Electron', 'Tauri'] },
    ],
    faqs: [
      { q: 'Is Frontend Development really coding?', a: 'Absolutely. Frontend developers code all the time using HTML, CSS, JavaScript and various frameworks.' },
      { q: 'Is Frontend Developer a good career?', a: 'Yes, frontend development is in high demand with competitive salaries and growth opportunities.' },
      { q: 'How long to become a Frontend Developer?', a: 'With dedicated learning, 6-12 months to become job-ready for entry-level positions.' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    subtitle: 'Step by step guide to becoming a modern backend developer in 2025',
    description: 'Backend development focuses on server-side logic, databases, and APIs. Backend developers handle user authentication, process requests, and ensure applications can manage high traffic efficiently.',
    icon: <Server className="w-6 h-6" />,
    color: 'from-green-500/20 to-emerald-500/20',
    skills: ['Programming Languages', 'Databases', 'APIs', 'Authentication', 'Caching', 'Security', 'Testing', 'CI/CD', 'Containerization', 'Cloud Services'],
    topics: [
      { category: 'Languages', items: ['Python', 'JavaScript/Node.js', 'Java', 'Go', 'Rust', 'PHP', 'Ruby', 'C#'] },
      { category: 'Version Control', items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'] },
      { category: 'Relational DBs', items: ['PostgreSQL', 'MySQL', 'MS SQL', 'MariaDB', 'SQLite'] },
      { category: 'NoSQL DBs', items: ['MongoDB', 'Redis', 'Cassandra', 'DynamoDB', 'Firebase'] },
      { category: 'APIs', items: ['REST', 'GraphQL', 'gRPC', 'WebSockets', 'SOAP'] },
      { category: 'Authentication', items: ['JWT', 'OAuth', 'Session-based', 'SSO', 'SAML'] },
      { category: 'Caching', items: ['Redis', 'Memcached', 'CDN Caching'] },
      { category: 'Security', items: ['HTTPS', 'CORS', 'OWASP', 'SQL Injection Prevention', 'XSS Prevention'] },
      { category: 'Containers', items: ['Docker', 'Kubernetes', 'Docker Swarm'] },
      { category: 'CI/CD', items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI'] },
      { category: 'Architecture', items: ['Monolith', 'Microservices', 'Serverless', 'SOA'] },
    ],
    faqs: [
      { q: 'How to become a Backend Developer?', a: 'Start with a programming language like Python or Node.js, learn databases and APIs, then practice by building projects.' },
      { q: 'How long does it take?', a: 'With consistent learning, 6-12 months to be job-ready for entry-level backend positions.' },
      { q: 'What tools do backend developers use?', a: 'IDEs, databases, API testing tools (Postman), containerization (Docker), and cloud platforms.' },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    subtitle: 'Step by step guide for DevOps, SRE or any other Operations Role in 2025',
    description: 'DevOps is a cultural and collaborative mindset emphasizing communication between development and operations teams. DevOps Engineers automate processes, manage infrastructure, and ensure reliable software delivery.',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-purple-500/20 to-pink-500/20',
    skills: ['Linux', 'Scripting', 'CI/CD', 'Containers', 'Cloud Platforms', 'Infrastructure as Code', 'Monitoring', 'Networking', 'Security', 'Automation'],
    topics: [
      { category: 'Languages', items: ['Python', 'Go', 'Bash', 'PowerShell', 'Ruby'] },
      { category: 'Operating Systems', items: ['Linux (Ubuntu/Debian, RHEL)', 'Unix', 'Windows Server'] },
      { category: 'Version Control', items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'] },
      { category: 'Containers', items: ['Docker', 'LXC', 'Podman'] },
      { category: 'Orchestration', items: ['Kubernetes', 'Docker Swarm', 'EKS/GKE/AKS', 'OpenShift'] },
      { category: 'CI/CD', items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI', 'ArgoCD'] },
      { category: 'Cloud Providers', items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Cloudflare'] },
      { category: 'IaC', items: ['Terraform', 'Pulumi', 'CloudFormation', 'Ansible', 'Chef', 'Puppet'] },
      { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'Datadog', 'ELK Stack', 'Jaeger'] },
      { category: 'Networking', items: ['DNS', 'HTTP/HTTPS', 'Load Balancers', 'Firewalls', 'VPN'] },
      { category: 'Security', items: ['Vault', 'SOPS', 'SSL/TLS', 'Secret Management'] },
    ],
    faqs: [
      { q: 'What skills are required?', a: 'Linux, scripting, containerization, cloud platforms, CI/CD pipelines, and infrastructure as code.' },
      { q: 'Does a DevOps Engineer code?', a: 'Yes, DevOps engineers write scripts, automation tools, and infrastructure code regularly.' },
      { q: 'How is DevOps different from developers?', a: 'DevOps focuses on deployment, infrastructure, and operations rather than building application features.' },
    ]
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    subtitle: 'Step by step guide to becoming an AI Engineer in 2025',
    description: 'An AI Engineer uses pre-trained models and existing AI tools to improve user experiences. They focus on applying AI in practical ways, integrating LLMs, building RAG systems, and creating AI agents.',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-orange-500/20 to-red-500/20',
    skills: ['LLMs', 'Prompt Engineering', 'Vector Databases', 'RAG', 'AI Agents', 'Embeddings', 'API Integration', 'Python', 'Machine Learning Basics', 'Ethics & Safety'],
    topics: [
      { category: 'Fundamentals', items: ['What is AI Engineering', 'AI vs ML vs Data Science', 'LLMs', 'Embeddings', 'Vector Databases'] },
      { category: 'Pre-trained Models', items: ['OpenAI GPT', 'Anthropic Claude', 'Google Gemini', 'Mistral AI', 'Hugging Face Models'] },
      { category: 'OpenAI Platform', items: ['Chat Completions API', 'Embeddings API', 'Fine-tuning', 'Token Management', 'Playground'] },
      { category: 'Prompt Engineering', items: ['Writing Prompts', 'Chain of Thought', 'Few-shot Learning', 'System Prompts'] },
      { category: 'RAG Systems', items: ['Chunking', 'Embedding', 'Vector Search', 'Retrieval', 'Generation'] },
      { category: 'Vector DBs', items: ['Pinecone', 'Chroma', 'Weaviate', 'Qdrant', 'Supabase pgvector'] },
      { category: 'AI Agents', items: ['ReAct Pattern', 'Function Calling', 'Tool Use', 'Multi-agent Systems'] },
      { category: 'Frameworks', items: ['LangChain', 'LlamaIndex', 'Haystack', 'OpenAI SDK'] },
      { category: 'Open Source AI', items: ['Ollama', 'Hugging Face', 'Transformers.js', 'Local LLMs'] },
      { category: 'Multimodal AI', items: ['Vision APIs', 'Image Generation (DALL-E)', 'Speech-to-Text (Whisper)', 'Text-to-Speech'] },
      { category: 'Safety & Ethics', items: ['Prompt Injection', 'Bias & Fairness', 'Content Moderation', 'Security Best Practices'] },
    ],
    faqs: [
      { q: 'Is AI Engineer a good career?', a: 'Yes, AI engineering is one of the fastest-growing and highest-paying fields in tech.' },
      { q: 'Do AI Engineers need a degree?', a: 'Not necessarily. Many successful AI engineers are self-taught with strong portfolios.' },
      { q: 'What is the difference from ML Engineer?', a: 'AI Engineers apply existing models; ML Engineers build and train models from scratch.' },
    ]
  },
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    subtitle: 'Combine frontend and backend skills',
    description: 'Full Stack developers work on both the frontend and backend of applications. They have a comprehensive understanding of the entire development process.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-indigo-500/20 to-violet-500/20',
    skills: ['HTML/CSS/JS', 'Frontend Frameworks', 'Backend Languages', 'Databases', 'APIs', 'DevOps Basics', 'Version Control', 'Testing', 'Deployment'],
    topics: [
      { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React/Vue/Angular'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'REST APIs', 'GraphQL'] },
      { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'ORMs'] },
      { category: 'DevOps', items: ['Docker', 'CI/CD', 'Cloud Deployment', 'Monitoring'] },
    ],
    faqs: [
      { q: 'Is full stack development worth it?', a: 'Yes, full stack developers are versatile and highly valued by companies of all sizes.' },
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    subtitle: 'Step by step guide to learn JavaScript in 2025',
    description: 'JavaScript is a versatile programming language for web development. It is the only language natively supported by all browsers, enabling dynamic behavior and complex user experiences.',
    icon: <Terminal className="w-6 h-6" />,
    color: 'from-yellow-500/20 to-amber-500/20',
    skills: ['Syntax & Basics', 'DOM Manipulation', 'Async Programming', 'ES6+ Features', 'Node.js', 'Frameworks', 'Testing', 'Build Tools'],
    topics: [
      { category: 'Basics', items: ['Variables', 'Data Types', 'Operators', 'Control Flow', 'Functions', 'Scope'] },
      { category: 'Advanced', items: ['Closures', 'Prototypes', 'Classes', 'Modules', 'Error Handling'] },
      { category: 'Async', items: ['Callbacks', 'Promises', 'Async/Await', 'Event Loop'] },
      { category: 'DOM', items: ['Selecting Elements', 'Event Handling', 'Manipulation', 'Forms'] },
      { category: 'ES6+', items: ['Arrow Functions', 'Destructuring', 'Spread/Rest', 'Template Literals', 'Maps/Sets'] },
      { category: 'Tools', items: ['npm', 'Webpack/Vite', 'Babel', 'ESLint', 'Prettier'] },
    ],
    faqs: [
      { q: 'How long to learn JavaScript?', a: 'Basics in 2-3 months, proficiency in 6-12 months with consistent practice.' },
    ]
  },
  {
    id: 'python',
    title: 'Python Developer',
    subtitle: 'Step by step guide to becoming a Python developer in 2025',
    description: 'Python developers build web services, automate tasks, perform data analysis, and work with AI/ML. Python\'s simplicity and vast ecosystem make it one of the most popular programming languages.',
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-600/20 to-green-500/20',
    skills: ['Syntax & Basics', 'OOP', 'Web Frameworks', 'Data Science', 'Automation', 'Testing', 'APIs', 'Databases'],
    topics: [
      { category: 'Basics', items: ['Variables', 'Data Types', 'Control Flow', 'Functions', 'Modules'] },
      { category: 'OOP', items: ['Classes', 'Inheritance', 'Polymorphism', 'Encapsulation'] },
      { category: 'Web Frameworks', items: ['Django', 'Flask', 'FastAPI'] },
      { category: 'Data Science', items: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'] },
      { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI SDK'] },
      { category: 'Automation', items: ['Scripting', 'Web Scraping', 'Task Automation', 'APIs'] },
    ],
    faqs: [
      { q: 'Is Python hard to learn?', a: 'No, Python is considered one of the most beginner-friendly programming languages.' },
    ]
  },
  {
    id: 'react',
    title: 'React',
    subtitle: 'Master React for modern web development',
    description: 'React is a JavaScript library for building user interfaces. It uses a component-based architecture and virtual DOM for efficient rendering.',
    icon: <Code className="w-6 h-6" />,
    color: 'from-cyan-500/20 to-blue-500/20',
    skills: ['Components', 'JSX', 'State Management', 'Hooks', 'Routing', 'API Integration', 'Testing', 'Performance'],
    topics: [
      { category: 'Fundamentals', items: ['Components', 'JSX', 'Props', 'State', 'Events'] },
      { category: 'Hooks', items: ['useState', 'useEffect', 'useContext', 'useReducer', 'useMemo', 'useCallback', 'Custom Hooks'] },
      { category: 'State Management', items: ['Context API', 'Redux', 'Zustand', 'Jotai', 'TanStack Query'] },
      { category: 'Routing', items: ['React Router', 'TanStack Router'] },
      { category: 'Styling', items: ['CSS Modules', 'Styled Components', 'Tailwind CSS', 'Emotion'] },
      { category: 'Testing', items: ['Jest', 'React Testing Library', 'Cypress'] },
    ],
    faqs: [
      { q: 'Why learn React?', a: 'React is the most popular frontend library with a large ecosystem and job market.' },
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    subtitle: 'Add type safety to your JavaScript',
    description: 'TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It helps catch errors early and improves code quality.',
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-500/20 to-indigo-500/20',
    skills: ['Types', 'Interfaces', 'Generics', 'Modules', 'Type Guards', 'Utility Types', 'Configuration'],
    topics: [
      { category: 'Basics', items: ['Type Annotations', 'Interfaces', 'Type Aliases', 'Union Types', 'Literal Types'] },
      { category: 'Advanced', items: ['Generics', 'Type Guards', 'Mapped Types', 'Conditional Types', 'Utility Types'] },
      { category: 'OOP', items: ['Classes', 'Access Modifiers', 'Abstract Classes', 'Decorators'] },
      { category: 'Modules', items: ['ES Modules', 'Namespaces', 'Declaration Files'] },
    ],
    faqs: [
      { q: 'Should I learn TypeScript?', a: 'Yes, TypeScript is increasingly required for modern frontend and backend development.' },
    ]
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    subtitle: 'JavaScript on the server',
    description: 'Node.js is a JavaScript runtime that allows you to run JavaScript on the server. It\'s used for building scalable network applications and APIs.',
    icon: <Server className="w-6 h-6" />,
    color: 'from-green-600/20 to-emerald-500/20',
    skills: ['Core Modules', 'npm', 'Express', 'APIs', 'Databases', 'Authentication', 'Testing', 'Deployment'],
    topics: [
      { category: 'Fundamentals', items: ['Event Loop', 'Modules', 'File System', 'Streams', 'Buffers'] },
      { category: 'Frameworks', items: ['Express', 'Fastify', 'NestJS', 'Hono'] },
      { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Drizzle'] },
      { category: 'APIs', items: ['REST', 'GraphQL', 'WebSockets', 'tRPC'] },
    ],
    faqs: [
      { q: 'Is Node.js good for beginners?', a: 'Yes, especially if you already know JavaScript from frontend development.' },
    ]
  },
  {
    id: 'docker',
    title: 'Docker',
    subtitle: 'Containerization for developers',
    description: 'Docker is a platform for developing, shipping, and running applications in containers. It ensures consistency across development and production environments.',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-sky-500/20 to-blue-500/20',
    skills: ['Containers', 'Images', 'Dockerfile', 'Docker Compose', 'Volumes', 'Networking', 'Registry'],
    topics: [
      { category: 'Basics', items: ['Containers vs VMs', 'Images', 'Containers', 'Docker CLI'] },
      { category: 'Dockerfile', items: ['FROM', 'RUN', 'COPY', 'CMD', 'ENTRYPOINT', 'Multi-stage Builds'] },
      { category: 'Compose', items: ['Services', 'Networks', 'Volumes', 'Environment Variables'] },
      { category: 'Advanced', items: ['Networking', 'Volumes', 'Docker Registry', 'Security'] },
    ],
    faqs: [
      { q: 'Why use Docker?', a: 'Docker ensures consistent environments, simplifies deployment, and improves scalability.' },
    ]
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    subtitle: 'Container orchestration at scale',
    description: 'Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-blue-600/20 to-purple-500/20',
    skills: ['Pods', 'Services', 'Deployments', 'ConfigMaps', 'Secrets', 'Ingress', 'Helm', 'Monitoring'],
    topics: [
      { category: 'Core Concepts', items: ['Pods', 'Services', 'Deployments', 'ReplicaSets', 'Namespaces'] },
      { category: 'Configuration', items: ['ConfigMaps', 'Secrets', 'Resource Limits', 'Probes'] },
      { category: 'Networking', items: ['Services', 'Ingress', 'Network Policies', 'DNS'] },
      { category: 'Storage', items: ['Volumes', 'PersistentVolumes', 'StorageClasses'] },
    ],
    faqs: [
      { q: 'When to use Kubernetes?', a: 'When you need to orchestrate multiple containers at scale with high availability.' },
    ]
  },
  {
    id: 'aws',
    title: 'AWS',
    subtitle: 'Amazon Web Services cloud platform',
    description: 'AWS is the most comprehensive and widely adopted cloud platform, offering over 200 services from data centers globally.',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-orange-500/20 to-yellow-500/20',
    skills: ['EC2', 'S3', 'Lambda', 'RDS', 'DynamoDB', 'CloudFormation', 'IAM', 'VPC'],
    topics: [
      { category: 'Compute', items: ['EC2', 'Lambda', 'ECS', 'EKS', 'Fargate'] },
      { category: 'Storage', items: ['S3', 'EBS', 'EFS', 'Glacier'] },
      { category: 'Database', items: ['RDS', 'DynamoDB', 'ElastiCache', 'Aurora'] },
      { category: 'Networking', items: ['VPC', 'Route 53', 'CloudFront', 'API Gateway'] },
    ],
    faqs: [
      { q: 'Is AWS certification worth it?', a: 'Yes, AWS certifications are highly valued and can boost your career prospects.' },
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    subtitle: 'Protect systems and data',
    description: 'Cyber security involves protecting systems, networks, and programs from digital attacks. It encompasses various practices from network security to ethical hacking.',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500/20 to-orange-500/20',
    skills: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Incident Response', 'Security Auditing', 'Compliance'],
    topics: [
      { category: 'Fundamentals', items: ['CIA Triad', 'Risk Management', 'Security Policies', 'Compliance'] },
      { category: 'Network Security', items: ['Firewalls', 'IDS/IPS', 'VPNs', 'Network Monitoring'] },
      { category: 'Application Security', items: ['OWASP Top 10', 'Secure Coding', 'Penetration Testing'] },
      { category: 'Cryptography', items: ['Encryption', 'Hashing', 'PKI', 'SSL/TLS'] },
    ],
    faqs: [
      { q: 'Is cyber security a good career?', a: 'Yes, with growing cyber threats, security professionals are in high demand.' },
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    subtitle: 'Turn data into insights',
    description: 'Data analysts collect, process, and analyze data to help organizations make informed decisions. They use statistical tools and visualization techniques.',
    icon: <LineChart className="w-6 h-6" />,
    color: 'from-teal-500/20 to-cyan-500/20',
    skills: ['SQL', 'Excel', 'Python/R', 'Statistics', 'Data Visualization', 'BI Tools', 'Data Cleaning'],
    topics: [
      { category: 'Tools', items: ['Excel', 'SQL', 'Python', 'R', 'Tableau', 'Power BI'] },
      { category: 'Statistics', items: ['Descriptive Stats', 'Probability', 'Hypothesis Testing', 'Regression'] },
      { category: 'Visualization', items: ['Charts', 'Dashboards', 'Storytelling with Data'] },
    ],
    faqs: [
      { q: 'Do data analysts need to code?', a: 'Basic SQL and Python/R skills are typically required for data analyst roles.' },
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    subtitle: 'Build intelligent systems',
    description: 'Machine learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-violet-500/20 to-purple-500/20',
    skills: ['Python', 'Math/Statistics', 'Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'MLOps'],
    topics: [
      { category: 'Fundamentals', items: ['Linear Algebra', 'Calculus', 'Statistics', 'Probability'] },
      { category: 'Algorithms', items: ['Regression', 'Classification', 'Clustering', 'Neural Networks'] },
      { category: 'Tools', items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch'] },
    ],
    faqs: [
      { q: 'Do I need a PhD for ML?', a: 'No, many ML engineers are self-taught or have bachelor\'s degrees with strong portfolios.' },
    ]
  },
  {
    id: 'android',
    title: 'Android Development',
    subtitle: 'Build Android apps',
    description: 'Android development involves creating applications for devices running the Android operating system using Kotlin or Java.',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-green-500/20 to-lime-500/20',
    skills: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Architecture', 'Testing', 'Publishing'],
    topics: [
      { category: 'Languages', items: ['Kotlin', 'Java'] },
      { category: 'UI', items: ['Jetpack Compose', 'XML Layouts', 'Material Design'] },
      { category: 'Architecture', items: ['MVVM', 'Clean Architecture', 'Dependency Injection'] },
    ],
    faqs: [
      { q: 'Kotlin or Java for Android?', a: 'Kotlin is now the preferred language for Android development.' },
    ]
  },
  {
    id: 'ios',
    title: 'iOS Development',
    subtitle: 'Build iOS apps',
    description: 'iOS development involves creating applications for Apple devices using Swift and SwiftUI.',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-gray-400/20 to-slate-500/20',
    skills: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'Networking', 'App Store'],
    topics: [
      { category: 'Languages', items: ['Swift'] },
      { category: 'UI', items: ['SwiftUI', 'UIKit', 'Human Interface Guidelines'] },
      { category: 'Frameworks', items: ['Core Data', 'Combine', 'Core Animation'] },
    ],
    faqs: [
      { q: 'Do I need a Mac for iOS development?', a: 'Yes, Xcode and iOS development require a Mac.' },
    ]
  },
  {
    id: 'game-developer',
    title: 'Game Developer',
    subtitle: 'Create interactive games',
    description: 'Game developers design and create video games for various platforms using game engines and programming languages.',
    icon: <Gamepad2 className="w-6 h-6" />,
    color: 'from-pink-500/20 to-rose-500/20',
    skills: ['Game Engines', 'Programming', '3D Math', 'Physics', 'Graphics', 'Audio', 'UI/UX'],
    topics: [
      { category: 'Engines', items: ['Unity', 'Unreal Engine', 'Godot'] },
      { category: 'Languages', items: ['C#', 'C++', 'GDScript'] },
      { category: 'Concepts', items: ['Game Loop', 'Physics', 'AI', 'Networking'] },
    ],
    faqs: [
      { q: 'Which game engine to start with?', a: 'Unity (C#) or Godot are great for beginners; Unreal (C++) for AAA-style games.' },
    ]
  },
  {
    id: 'ux-design',
    title: 'UX Design',
    subtitle: 'Design user experiences',
    description: 'UX designers focus on creating meaningful and relevant experiences for users, encompassing the entire process of acquiring and integrating a product.',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-fuchsia-500/20 to-pink-500/20',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Tools', 'Information Architecture'],
    topics: [
      { category: 'Research', items: ['User Interviews', 'Surveys', 'Personas', 'User Journeys'] },
      { category: 'Design', items: ['Wireframes', 'Mockups', 'Prototypes', 'Design Systems'] },
      { category: 'Tools', items: ['Figma', 'Sketch', 'Adobe XD', 'Framer'] },
    ],
    faqs: [
      { q: 'Do UX designers need to code?', a: 'Not required, but understanding HTML/CSS basics is helpful for collaboration.' },
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    subtitle: 'Lead product development',
    description: 'Product managers are responsible for the strategy, roadmap, and feature definition of a product or product line.',
    icon: <Users className="w-6 h-6" />,
    color: 'from-amber-500/20 to-orange-500/20',
    skills: ['Strategy', 'Roadmapping', 'User Research', 'Data Analysis', 'Stakeholder Management', 'Agile'],
    topics: [
      { category: 'Strategy', items: ['Vision', 'Roadmapping', 'Prioritization', 'OKRs'] },
      { category: 'Execution', items: ['Agile/Scrum', 'User Stories', 'Sprint Planning'] },
      { category: 'Analysis', items: ['Metrics', 'A/B Testing', 'User Feedback'] },
    ],
    faqs: [
      { q: 'Do PMs need technical background?', a: 'Helpful but not required; understanding of technology and development process is valuable.' },
    ]
  },
  {
    id: 'sql',
    title: 'SQL',
    subtitle: 'Master database queries',
    description: 'SQL (Structured Query Language) is the standard language for storing, manipulating, and retrieving data in relational databases.',
    icon: <Database className="w-6 h-6" />,
    color: 'from-blue-400/20 to-indigo-500/20',
    skills: ['Queries', 'Joins', 'Aggregations', 'Subqueries', 'Indexes', 'Transactions', 'Optimization'],
    topics: [
      { category: 'Basics', items: ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'WHERE', 'ORDER BY'] },
      { category: 'Joins', items: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN', 'CROSS JOIN'] },
      { category: 'Advanced', items: ['Subqueries', 'CTEs', 'Window Functions', 'Stored Procedures'] },
    ],
    faqs: [
      { q: 'Is SQL still relevant?', a: 'Absolutely, SQL is fundamental for any role involving data.' },
    ]
  },
  {
    id: 'git-github',
    title: 'Git & GitHub',
    subtitle: 'Version control mastery',
    description: 'Git is a distributed version control system. GitHub is a platform for hosting Git repositories and collaborating on code.',
    icon: <Wrench className="w-6 h-6" />,
    color: 'from-gray-500/20 to-zinc-500/20',
    skills: ['Commits', 'Branches', 'Merging', 'Pull Requests', 'Collaboration', 'CI/CD'],
    topics: [
      { category: 'Basics', items: ['init', 'add', 'commit', 'push', 'pull', 'clone'] },
      { category: 'Branching', items: ['branch', 'checkout', 'merge', 'rebase'] },
      { category: 'Collaboration', items: ['Pull Requests', 'Code Review', 'Issues', 'Actions'] },
    ],
    faqs: [
      { q: 'Git vs GitHub?', a: 'Git is the version control system; GitHub is a hosting platform for Git repositories.' },
    ]
  },
  {
    id: 'system-design',
    title: 'System Design',
    subtitle: 'Design scalable systems',
    description: 'System design involves creating the architecture of large-scale distributed systems, considering scalability, reliability, and performance.',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-slate-500/20 to-gray-500/20',
    skills: ['Scalability', 'Load Balancing', 'Caching', 'Databases', 'Microservices', 'API Design'],
    topics: [
      { category: 'Concepts', items: ['Scalability', 'Availability', 'Consistency', 'Latency'] },
      { category: 'Components', items: ['Load Balancers', 'CDNs', 'Caches', 'Message Queues'] },
      { category: 'Patterns', items: ['Microservices', 'Event-Driven', 'CQRS', 'Sharding'] },
    ],
    faqs: [
      { q: 'When to learn system design?', a: 'After gaining experience with building applications, typically for senior roles and interviews.' },
    ]
  },
];

const RoadmapCard = ({ roadmap, isExpanded, onToggle }: { roadmap: RoadmapData; isExpanded: boolean; onToggle: () => void }) => {
  return (
    <div className="border border-border bg-card overflow-hidden transition-all duration-300">
      {/* Header */}
      <button
        onClick={onToggle}
        className={`w-full p-6 flex items-start gap-4 text-left hover:bg-secondary/30 transition-colors bg-gradient-to-r ${roadmap.color}`}
      >
        <div className="p-3 bg-background/80 border border-border rounded-sm">
          {roadmap.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl font-medium text-foreground mb-1">
            {roadmap.title}
          </h3>
          <p className="font-mono text-xs text-muted-foreground line-clamp-1">
            {roadmap.subtitle}
          </p>
        </div>
        <div className="p-2">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-border">
          {/* Description */}
          <div className="p-6 bg-secondary/20">
            <p className="font-mono text-sm text-foreground/80 leading-relaxed">
              {roadmap.description}
            </p>
          </div>

          {/* Skills */}
          <div className="p-6 border-t border-border">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Key Skills</h4>
            <div className="flex flex-wrap gap-2">
              {roadmap.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-primary/10 text-primary font-mono text-xs border border-primary/20 rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="p-6 border-t border-border bg-secondary/10">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Learning Path</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roadmap.topics.map((topic) => (
                <div key={topic.category} className="p-4 bg-card border border-border">
                  <h5 className="font-mono text-sm font-medium text-foreground mb-2">{topic.category}</h5>
                  <ul className="space-y-1">
                    {topic.items.map((item) => (
                      <li key={item} className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary/50 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="p-6 border-t border-border">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">FAQ</h4>
            <div className="space-y-4">
              {roadmap.faqs.map((faq, index) => (
                <div key={index}>
                  <p className="font-mono text-sm font-medium text-foreground mb-1">{faq.q}</p>
                  <p className="font-mono text-xs text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Resources = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Roadmaps' },
    { id: 'role', label: 'Role-based' },
    { id: 'skill', label: 'Skill-based' },
    { id: 'tool', label: 'Tools & Platforms' },
  ];

  const roleRoadmaps = ['frontend', 'backend', 'fullstack', 'devops', 'ai-engineer', 'data-analyst', 'machine-learning', 'android', 'ios', 'game-developer', 'ux-design', 'product-manager', 'cyber-security'];
  const skillRoadmaps = ['javascript', 'python', 'react', 'typescript', 'nodejs', 'sql', 'system-design', 'git-github'];
  const toolRoadmaps = ['docker', 'kubernetes', 'aws'];

  const filteredRoadmaps = roadmaps.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'role') return roleRoadmaps.includes(r.id);
    if (filter === 'skill') return skillRoadmaps.includes(r.id);
    if (filter === 'tool') return toolRoadmaps.includes(r.id);
    return true;
  });

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
        <p className="font-mono text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Comprehensive learning paths to guide your journey in tech.
          Each roadmap contains curated topics, skills, and resources.
        </p>
        <p className="font-mono text-sm text-muted-foreground/60 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Content sourced from roadmap.sh — community created roadmaps for developers
        </p>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 font-mono text-sm border transition-all ${
                filter === cat.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-card border border-border text-center">
            <p className="font-display text-2xl md:text-3xl font-light text-foreground">{roadmaps.length}</p>
            <p className="font-mono text-xs text-muted-foreground">Roadmaps</p>
          </div>
          <div className="p-4 bg-card border border-border text-center">
            <p className="font-display text-2xl md:text-3xl font-light text-foreground">{roadmaps.reduce((acc, r) => acc + r.topics.length, 0)}</p>
            <p className="font-mono text-xs text-muted-foreground">Categories</p>
          </div>
          <div className="p-4 bg-card border border-border text-center">
            <p className="font-display text-2xl md:text-3xl font-light text-foreground">{roadmaps.reduce((acc, r) => acc + r.topics.reduce((a, t) => a + t.items.length, 0), 0)}+</p>
            <p className="font-mono text-xs text-muted-foreground">Topics</p>
          </div>
          <div className="p-4 bg-card border border-border text-center">
            <p className="font-display text-2xl md:text-3xl font-light text-foreground">2025</p>
            <p className="font-mono text-xs text-muted-foreground">Updated</p>
          </div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto space-y-4">
          {filteredRoadmaps.map((roadmap) => (
            <RoadmapCard
              key={roadmap.id}
              roadmap={roadmap}
              isExpanded={expandedId === roadmap.id}
              onToggle={() => setExpandedId(expandedId === roadmap.id ? null : roadmap.id)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
            Start Your Journey
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-8">
            Pick a roadmap, follow the path, and build projects along the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="default" size="lg" className="font-mono text-sm tracking-wide">
                Join E-Nexus
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="font-mono text-sm tracking-wide"
              onClick={() => setExpandedId(null)}
            >
              Collapse All
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs text-muted-foreground">
            Content adapted from roadmap.sh — Community created roadmaps, best practices, and learning paths for developers.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Resources;
