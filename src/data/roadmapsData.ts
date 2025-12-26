export interface RoadmapStep {
  id: string;
  title: string;
  items: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Roadmap {
  id: string;
  title: string;
  subtitle: string;
  category: 'role' | 'skill' | 'project' | 'practice';
  isNew?: boolean;
  color: string;
  steps: RoadmapStep[];
}

export const roadmaps: Roadmap[] = [
  // ============== ROLE-BASED ROADMAPS ==============
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Build beautiful user interfaces',
    category: 'role',
    color: 'from-blue-500 to-cyan-500',
    steps: [
      { id: '1', title: 'Internet Basics', items: ['How the Internet Works', 'HTTP/HTTPS', 'DNS', 'Browsers'], level: 'beginner' },
      { id: '2', title: 'HTML', items: ['Semantic HTML', 'Forms & Validation', 'Accessibility', 'SEO Basics'], level: 'beginner' },
      { id: '3', title: 'CSS', items: ['Box Model', 'Flexbox', 'Grid', 'Responsive Design', 'Animations'], level: 'beginner' },
      { id: '4', title: 'JavaScript', items: ['Syntax & Basics', 'DOM Manipulation', 'Fetch API', 'ES6+ Features'], level: 'beginner' },
      { id: '5', title: 'Version Control', items: ['Git Basics', 'GitHub', 'Branching', 'Pull Requests'], level: 'beginner' },
      { id: '6', title: 'Package Managers', items: ['npm', 'yarn', 'pnpm'], level: 'intermediate' },
      { id: '7', title: 'Build Tools', items: ['Vite', 'Webpack', 'esbuild', 'Parcel'], level: 'intermediate' },
      { id: '8', title: 'Framework', items: ['React', 'Vue.js', 'Angular', 'Svelte'], level: 'intermediate' },
      { id: '9', title: 'CSS Framework', items: ['Tailwind CSS', 'Bootstrap', 'Material UI'], level: 'intermediate' },
      { id: '10', title: 'TypeScript', items: ['Types', 'Interfaces', 'Generics', 'Type Guards'], level: 'intermediate' },
      { id: '11', title: 'Testing', items: ['Jest', 'Vitest', 'Cypress', 'Playwright'], level: 'advanced' },
      { id: '12', title: 'SSR/SSG', items: ['Next.js', 'Nuxt', 'Astro', 'Remix'], level: 'advanced' },
      { id: '13', title: 'Performance', items: ['Core Web Vitals', 'Lighthouse', 'Lazy Loading'], level: 'advanced' },
      { id: '14', title: 'PWA', items: ['Service Workers', 'Manifest', 'Offline Support'], level: 'advanced' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side development mastery',
    category: 'role',
    color: 'from-green-500 to-emerald-500',
    steps: [
      { id: '1', title: 'Internet', items: ['HTTP', 'APIs', 'REST', 'JSON'], level: 'beginner' },
      { id: '2', title: 'Pick a Language', items: ['JavaScript/Node.js', 'Python', 'Go', 'Java', 'Rust', 'PHP'], level: 'beginner' },
      { id: '3', title: 'Version Control', items: ['Git', 'GitHub/GitLab'], level: 'beginner' },
      { id: '4', title: 'Relational DB', items: ['PostgreSQL', 'MySQL', 'SQL Basics', 'Joins'], level: 'beginner' },
      { id: '5', title: 'NoSQL DB', items: ['MongoDB', 'Redis', 'Firebase'], level: 'intermediate' },
      { id: '6', title: 'APIs', items: ['REST', 'GraphQL', 'gRPC', 'WebSockets'], level: 'intermediate' },
      { id: '7', title: 'Authentication', items: ['JWT', 'OAuth 2.0', 'Sessions', 'SSO'], level: 'intermediate' },
      { id: '8', title: 'Caching', items: ['Redis', 'Memcached', 'CDN'], level: 'intermediate' },
      { id: '9', title: 'Security', items: ['HTTPS', 'CORS', 'OWASP', 'Hashing'], level: 'intermediate' },
      { id: '10', title: 'Testing', items: ['Unit Tests', 'Integration Tests', 'E2E Tests'], level: 'advanced' },
      { id: '11', title: 'Containers', items: ['Docker', 'Docker Compose'], level: 'advanced' },
      { id: '12', title: 'CI/CD', items: ['GitHub Actions', 'Jenkins', 'GitLab CI'], level: 'advanced' },
      { id: '13', title: 'Architecture', items: ['Monolith', 'Microservices', 'Serverless'], level: 'advanced' },
      { id: '14', title: 'Message Queues', items: ['RabbitMQ', 'Kafka', 'Redis Pub/Sub'], level: 'advanced' },
    ]
  },
  {
    id: 'fullstack',
    title: 'Full Stack',
    subtitle: 'End-to-end web development',
    category: 'role',
    color: 'from-indigo-500 to-violet-500',
    steps: [
      { id: '1', title: 'HTML & CSS', items: ['Semantic HTML', 'Flexbox/Grid', 'Responsive'], level: 'beginner' },
      { id: '2', title: 'JavaScript', items: ['ES6+', 'DOM', 'Async/Await', 'Fetch'], level: 'beginner' },
      { id: '3', title: 'Frontend Framework', items: ['React', 'Vue', 'Angular'], level: 'beginner' },
      { id: '4', title: 'Backend Language', items: ['Node.js', 'Python', 'Go'], level: 'intermediate' },
      { id: '5', title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'], level: 'intermediate' },
      { id: '6', title: 'APIs', items: ['REST', 'GraphQL', 'tRPC'], level: 'intermediate' },
      { id: '7', title: 'Authentication', items: ['JWT', 'OAuth', 'Sessions'], level: 'intermediate' },
      { id: '8', title: 'DevOps Basics', items: ['Docker', 'CI/CD', 'Cloud Deploy'], level: 'advanced' },
      { id: '9', title: 'Full Stack Frameworks', items: ['Next.js', 'Nuxt', 'SvelteKit'], level: 'advanced' },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    subtitle: 'Bridge development and operations',
    category: 'role',
    color: 'from-purple-500 to-pink-500',
    steps: [
      { id: '1', title: 'Programming', items: ['Python', 'Go', 'Bash', 'PowerShell'], level: 'beginner' },
      { id: '2', title: 'OS Concepts', items: ['Linux', 'Process Management', 'Networking'], level: 'beginner' },
      { id: '3', title: 'Terminal', items: ['Bash', 'Shell Scripting', 'Text Manipulation'], level: 'beginner' },
      { id: '4', title: 'Version Control', items: ['Git', 'GitHub', 'GitLab'], level: 'beginner' },
      { id: '5', title: 'Networking', items: ['DNS', 'HTTP/S', 'SSL/TLS', 'SSH'], level: 'intermediate' },
      { id: '6', title: 'Containers', items: ['Docker', 'Podman', 'LXC'], level: 'intermediate' },
      { id: '7', title: 'CI/CD', items: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD'], level: 'intermediate' },
      { id: '8', title: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'DigitalOcean'], level: 'intermediate' },
      { id: '9', title: 'IaC', items: ['Terraform', 'Pulumi', 'CloudFormation'], level: 'advanced' },
      { id: '10', title: 'Config Management', items: ['Ansible', 'Chef', 'Puppet'], level: 'advanced' },
      { id: '11', title: 'Orchestration', items: ['Kubernetes', 'Docker Swarm', 'Nomad'], level: 'advanced' },
      { id: '12', title: 'Monitoring', items: ['Prometheus', 'Grafana', 'Datadog', 'ELK'], level: 'advanced' },
      { id: '13', title: 'GitOps', items: ['ArgoCD', 'FluxCD'], level: 'advanced' },
    ]
  },
  {
    id: 'devsecops',
    title: 'DevSecOps',
    subtitle: 'Security-first DevOps',
    category: 'role',
    isNew: true,
    color: 'from-red-500 to-orange-500',
    steps: [
      { id: '1', title: 'DevOps Fundamentals', items: ['CI/CD', 'Containers', 'Cloud'], level: 'beginner' },
      { id: '2', title: 'Security Basics', items: ['CIA Triad', 'OWASP', 'Threat Modeling'], level: 'beginner' },
      { id: '3', title: 'SAST', items: ['Static Analysis', 'SonarQube', 'Semgrep'], level: 'intermediate' },
      { id: '4', title: 'DAST', items: ['Dynamic Testing', 'OWASP ZAP', 'Burp Suite'], level: 'intermediate' },
      { id: '5', title: 'Container Security', items: ['Image Scanning', 'Trivy', 'Runtime Security'], level: 'intermediate' },
      { id: '6', title: 'Secret Management', items: ['Vault', 'AWS Secrets Manager', 'SOPS'], level: 'advanced' },
      { id: '7', title: 'Compliance', items: ['SOC 2', 'GDPR', 'HIPAA', 'PCI-DSS'], level: 'advanced' },
      { id: '8', title: 'Incident Response', items: ['SIEM', 'Forensics', 'Playbooks'], level: 'advanced' },
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    subtitle: 'Turn data into insights',
    category: 'role',
    color: 'from-teal-500 to-cyan-500',
    steps: [
      { id: '1', title: 'Spreadsheets', items: ['Excel', 'Google Sheets', 'Formulas', 'Pivot Tables'], level: 'beginner' },
      { id: '2', title: 'SQL', items: ['SELECT', 'JOINs', 'Aggregations', 'Subqueries'], level: 'beginner' },
      { id: '3', title: 'Statistics', items: ['Descriptive Stats', 'Probability', 'Distributions'], level: 'beginner' },
      { id: '4', title: 'Python/R', items: ['Pandas', 'NumPy', 'Data Wrangling'], level: 'intermediate' },
      { id: '5', title: 'Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly'], level: 'intermediate' },
      { id: '6', title: 'BI Tools', items: ['Tableau', 'Power BI', 'Looker'], level: 'intermediate' },
      { id: '7', title: 'Data Cleaning', items: ['Missing Data', 'Outliers', 'Normalization'], level: 'intermediate' },
      { id: '8', title: 'Statistical Analysis', items: ['Hypothesis Testing', 'Regression', 'A/B Testing'], level: 'advanced' },
      { id: '9', title: 'Storytelling', items: ['Dashboards', 'Reports', 'Presentations'], level: 'advanced' },
    ]
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    subtitle: 'Build AI-powered applications',
    category: 'role',
    color: 'from-orange-500 to-red-500',
    steps: [
      { id: '1', title: 'Fundamentals', items: ['AI vs ML', 'LLMs', 'Embeddings', 'Tokens'], level: 'beginner' },
      { id: '2', title: 'Programming', items: ['Python', 'APIs', 'JSON'], level: 'beginner' },
      { id: '3', title: 'LLM Providers', items: ['OpenAI', 'Anthropic', 'Google', 'Mistral'], level: 'beginner' },
      { id: '4', title: 'Prompt Engineering', items: ['System Prompts', 'Few-shot', 'Chain of Thought'], level: 'intermediate' },
      { id: '5', title: 'Vector Databases', items: ['Pinecone', 'Chroma', 'Weaviate', 'pgvector'], level: 'intermediate' },
      { id: '6', title: 'RAG', items: ['Chunking', 'Embeddings', 'Retrieval', 'Generation'], level: 'intermediate' },
      { id: '7', title: 'Frameworks', items: ['LangChain', 'LlamaIndex', 'Haystack'], level: 'intermediate' },
      { id: '8', title: 'AI Agents', items: ['Function Calling', 'Tool Use', 'ReAct Pattern'], level: 'advanced' },
      { id: '9', title: 'Fine-tuning', items: ['LoRA', 'QLoRA', 'Dataset Prep'], level: 'advanced' },
      { id: '10', title: 'Safety & Ethics', items: ['Prompt Injection', 'Bias', 'Guardrails'], level: 'advanced' },
    ]
  },
  {
    id: 'ai-data-scientist',
    title: 'AI and Data Scientist',
    subtitle: 'Research and build ML models',
    category: 'role',
    color: 'from-violet-500 to-purple-500',
    steps: [
      { id: '1', title: 'Mathematics', items: ['Linear Algebra', 'Calculus', 'Statistics'], level: 'beginner' },
      { id: '2', title: 'Python', items: ['NumPy', 'Pandas', 'Matplotlib'], level: 'beginner' },
      { id: '3', title: 'ML Fundamentals', items: ['Supervised', 'Unsupervised', 'Evaluation'], level: 'beginner' },
      { id: '4', title: 'Classical ML', items: ['Regression', 'Classification', 'Clustering', 'Trees'], level: 'intermediate' },
      { id: '5', title: 'Deep Learning', items: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers'], level: 'intermediate' },
      { id: '6', title: 'Frameworks', items: ['TensorFlow', 'PyTorch', 'Scikit-learn'], level: 'intermediate' },
      { id: '7', title: 'NLP', items: ['Text Processing', 'Embeddings', 'LLMs'], level: 'advanced' },
      { id: '8', title: 'Computer Vision', items: ['Image Classification', 'Object Detection'], level: 'advanced' },
      { id: '9', title: 'MLOps', items: ['Experiment Tracking', 'Model Registry', 'Serving'], level: 'advanced' },
    ]
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    subtitle: 'Build data pipelines at scale',
    category: 'role',
    color: 'from-blue-600 to-indigo-500',
    steps: [
      { id: '1', title: 'Programming', items: ['Python', 'SQL', 'Bash'], level: 'beginner' },
      { id: '2', title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'], level: 'beginner' },
      { id: '3', title: 'Data Warehouses', items: ['Snowflake', 'BigQuery', 'Redshift'], level: 'intermediate' },
      { id: '4', title: 'ETL/ELT', items: ['Apache Airflow', 'dbt', 'Prefect'], level: 'intermediate' },
      { id: '5', title: 'Big Data', items: ['Spark', 'Hadoop', 'Flink'], level: 'intermediate' },
      { id: '6', title: 'Streaming', items: ['Kafka', 'Kinesis', 'Pulsar'], level: 'advanced' },
      { id: '7', title: 'Cloud', items: ['AWS', 'GCP', 'Azure Data Services'], level: 'advanced' },
      { id: '8', title: 'Data Quality', items: ['Great Expectations', 'Monitoring', 'Lineage'], level: 'advanced' },
    ]
  },
  {
    id: 'android',
    title: 'Android',
    subtitle: 'Build Android applications',
    category: 'role',
    color: 'from-green-500 to-lime-500',
    steps: [
      { id: '1', title: 'Kotlin', items: ['Syntax', 'OOP', 'Null Safety', 'Coroutines'], level: 'beginner' },
      { id: '2', title: 'Android Basics', items: ['Activities', 'Fragments', 'Intents'], level: 'beginner' },
      { id: '3', title: 'UI', items: ['XML Layouts', 'Jetpack Compose', 'Material Design'], level: 'beginner' },
      { id: '4', title: 'Architecture', items: ['MVVM', 'Clean Architecture', 'Repository Pattern'], level: 'intermediate' },
      { id: '5', title: 'Jetpack', items: ['ViewModel', 'LiveData', 'Room', 'Navigation'], level: 'intermediate' },
      { id: '6', title: 'Networking', items: ['Retrofit', 'OkHttp', 'Serialization'], level: 'intermediate' },
      { id: '7', title: 'DI', items: ['Hilt', 'Dagger', 'Koin'], level: 'advanced' },
      { id: '8', title: 'Testing', items: ['JUnit', 'Espresso', 'Mockito'], level: 'advanced' },
      { id: '9', title: 'Publishing', items: ['Play Store', 'Signing', 'Releases'], level: 'advanced' },
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    subtitle: 'Build intelligent systems',
    category: 'role',
    color: 'from-fuchsia-500 to-pink-500',
    steps: [
      { id: '1', title: 'Math', items: ['Linear Algebra', 'Calculus', 'Probability', 'Statistics'], level: 'beginner' },
      { id: '2', title: 'Python', items: ['NumPy', 'Pandas', 'Matplotlib'], level: 'beginner' },
      { id: '3', title: 'ML Basics', items: ['Supervised Learning', 'Unsupervised', 'Reinforcement'], level: 'beginner' },
      { id: '4', title: 'Algorithms', items: ['Linear Regression', 'Decision Trees', 'SVM', 'KNN'], level: 'intermediate' },
      { id: '5', title: 'Scikit-learn', items: ['Pipelines', 'Cross-validation', 'Feature Engineering'], level: 'intermediate' },
      { id: '6', title: 'Deep Learning', items: ['Neural Networks', 'Backpropagation', 'Activation'], level: 'intermediate' },
      { id: '7', title: 'DL Frameworks', items: ['TensorFlow', 'PyTorch', 'Keras'], level: 'advanced' },
      { id: '8', title: 'Architectures', items: ['CNNs', 'RNNs', 'Transformers', 'GANs'], level: 'advanced' },
      { id: '9', title: 'Production', items: ['Model Serving', 'Optimization', 'Monitoring'], level: 'advanced' },
    ]
  },
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    subtitle: 'Master the powerful database',
    category: 'role',
    color: 'from-blue-600 to-blue-400',
    steps: [
      { id: '1', title: 'SQL Basics', items: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'], level: 'beginner' },
      { id: '2', title: 'Data Types', items: ['Text', 'Numeric', 'Date/Time', 'JSON'], level: 'beginner' },
      { id: '3', title: 'Joins', items: ['INNER', 'LEFT', 'RIGHT', 'FULL', 'CROSS'], level: 'beginner' },
      { id: '4', title: 'Indexes', items: ['B-tree', 'Hash', 'GiST', 'GIN'], level: 'intermediate' },
      { id: '5', title: 'Advanced SQL', items: ['CTEs', 'Window Functions', 'Subqueries'], level: 'intermediate' },
      { id: '6', title: 'Performance', items: ['EXPLAIN', 'Query Optimization', 'Vacuuming'], level: 'intermediate' },
      { id: '7', title: 'Replication', items: ['Streaming', 'Logical', 'Failover'], level: 'advanced' },
      { id: '8', title: 'Security', items: ['Roles', 'RLS', 'Encryption'], level: 'advanced' },
      { id: '9', title: 'Extensions', items: ['PostGIS', 'pgvector', 'pg_cron'], level: 'advanced' },
    ]
  },
  {
    id: 'ios',
    title: 'iOS',
    subtitle: 'Build iOS applications',
    category: 'role',
    color: 'from-gray-500 to-slate-400',
    steps: [
      { id: '1', title: 'Swift', items: ['Syntax', 'Optionals', 'Closures', 'Protocols'], level: 'beginner' },
      { id: '2', title: 'Xcode', items: ['Interface Builder', 'Debugging', 'Instruments'], level: 'beginner' },
      { id: '3', title: 'UIKit', items: ['Views', 'Controllers', 'Navigation', 'TableView'], level: 'beginner' },
      { id: '4', title: 'SwiftUI', items: ['Declarative UI', 'State', 'Bindings', 'Modifiers'], level: 'intermediate' },
      { id: '5', title: 'Data Persistence', items: ['Core Data', 'UserDefaults', 'Keychain'], level: 'intermediate' },
      { id: '6', title: 'Networking', items: ['URLSession', 'Codable', 'REST APIs'], level: 'intermediate' },
      { id: '7', title: 'Architecture', items: ['MVC', 'MVVM', 'Clean Architecture'], level: 'advanced' },
      { id: '8', title: 'Testing', items: ['XCTest', 'UI Testing', 'Mocking'], level: 'advanced' },
      { id: '9', title: 'App Store', items: ['Publishing', 'Review Guidelines', 'TestFlight'], level: 'advanced' },
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    subtitle: 'Build decentralized applications',
    category: 'role',
    color: 'from-amber-500 to-yellow-400',
    steps: [
      { id: '1', title: 'Fundamentals', items: ['Cryptography', 'Hashing', 'Consensus'], level: 'beginner' },
      { id: '2', title: 'Bitcoin', items: ['UTXO', 'Mining', 'Wallets'], level: 'beginner' },
      { id: '3', title: 'Ethereum', items: ['Accounts', 'Gas', 'EVM'], level: 'beginner' },
      { id: '4', title: 'Solidity', items: ['Contracts', 'Functions', 'Modifiers', 'Events'], level: 'intermediate' },
      { id: '5', title: 'Development', items: ['Hardhat', 'Foundry', 'Testing'], level: 'intermediate' },
      { id: '6', title: 'DeFi', items: ['AMMs', 'Lending', 'Yield Farming'], level: 'intermediate' },
      { id: '7', title: 'Security', items: ['Auditing', 'Common Exploits', 'Best Practices'], level: 'advanced' },
      { id: '8', title: 'Layer 2', items: ['Rollups', 'Sidechains', 'State Channels'], level: 'advanced' },
    ]
  },
  {
    id: 'qa',
    title: 'QA',
    subtitle: 'Quality assurance engineering',
    category: 'role',
    color: 'from-emerald-500 to-green-400',
    steps: [
      { id: '1', title: 'QA Basics', items: ['Test Types', 'Test Cases', 'Bug Reporting'], level: 'beginner' },
      { id: '2', title: 'Manual Testing', items: ['Exploratory', 'Regression', 'UAT'], level: 'beginner' },
      { id: '3', title: 'Automation', items: ['Selenium', 'Playwright', 'Cypress'], level: 'intermediate' },
      { id: '4', title: 'API Testing', items: ['Postman', 'REST Assured', 'SoapUI'], level: 'intermediate' },
      { id: '5', title: 'Performance', items: ['JMeter', 'k6', 'Load Testing'], level: 'intermediate' },
      { id: '6', title: 'CI/CD', items: ['Test Pipelines', 'Reporting', 'Integration'], level: 'advanced' },
      { id: '7', title: 'Mobile Testing', items: ['Appium', 'Device Farms', 'Emulators'], level: 'advanced' },
    ]
  },
  {
    id: 'software-architect',
    title: 'Software Architect',
    subtitle: 'Design scalable systems',
    category: 'role',
    color: 'from-slate-600 to-gray-500',
    steps: [
      { id: '1', title: 'Fundamentals', items: ['Design Patterns', 'SOLID', 'DRY', 'KISS'], level: 'beginner' },
      { id: '2', title: 'Architecture Styles', items: ['Monolith', 'Microservices', 'SOA', 'Event-Driven'], level: 'intermediate' },
      { id: '3', title: 'System Design', items: ['Scalability', 'Availability', 'Consistency'], level: 'intermediate' },
      { id: '4', title: 'Databases', items: ['SQL vs NoSQL', 'Sharding', 'Replication'], level: 'intermediate' },
      { id: '5', title: 'Cloud Patterns', items: ['Load Balancing', 'Caching', 'CDN', 'Queues'], level: 'advanced' },
      { id: '6', title: 'Security', items: ['AuthN/AuthZ', 'Encryption', 'Zero Trust'], level: 'advanced' },
      { id: '7', title: 'Documentation', items: ['ADRs', 'C4 Model', 'UML'], level: 'advanced' },
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    subtitle: 'Protect systems and data',
    category: 'role',
    color: 'from-red-600 to-rose-500',
    steps: [
      { id: '1', title: 'Fundamentals', items: ['CIA Triad', 'Risk Management', 'Threats'], level: 'beginner' },
      { id: '2', title: 'Networking', items: ['TCP/IP', 'Firewalls', 'VPNs', 'IDS/IPS'], level: 'beginner' },
      { id: '3', title: 'Cryptography', items: ['Symmetric', 'Asymmetric', 'Hashing', 'PKI'], level: 'intermediate' },
      { id: '4', title: 'Web Security', items: ['OWASP Top 10', 'XSS', 'CSRF', 'SQLi'], level: 'intermediate' },
      { id: '5', title: 'Penetration Testing', items: ['Recon', 'Exploitation', 'Reporting'], level: 'intermediate' },
      { id: '6', title: 'Tools', items: ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark'], level: 'advanced' },
      { id: '7', title: 'Incident Response', items: ['Forensics', 'SIEM', 'Playbooks'], level: 'advanced' },
      { id: '8', title: 'Compliance', items: ['SOC 2', 'GDPR', 'HIPAA', 'ISO 27001'], level: 'advanced' },
    ]
  },
  {
    id: 'ux-design',
    title: 'UX Design',
    subtitle: 'Design great user experiences',
    category: 'role',
    color: 'from-pink-500 to-rose-400',
    steps: [
      { id: '1', title: 'UX Fundamentals', items: ['User-Centered Design', 'Usability', 'Accessibility'], level: 'beginner' },
      { id: '2', title: 'Research', items: ['User Interviews', 'Surveys', 'Personas'], level: 'beginner' },
      { id: '3', title: 'Information Architecture', items: ['Sitemaps', 'User Flows', 'Card Sorting'], level: 'intermediate' },
      { id: '4', title: 'Wireframing', items: ['Low-fi', 'Hi-fi', 'Prototyping'], level: 'intermediate' },
      { id: '5', title: 'Tools', items: ['Figma', 'Sketch', 'Adobe XD', 'Framer'], level: 'intermediate' },
      { id: '6', title: 'Usability Testing', items: ['Moderated', 'Unmoderated', 'A/B Testing'], level: 'advanced' },
      { id: '7', title: 'Design Systems', items: ['Components', 'Tokens', 'Documentation'], level: 'advanced' },
    ]
  },
  {
    id: 'technical-writer',
    title: 'Technical Writer',
    subtitle: 'Create clear documentation',
    category: 'role',
    color: 'from-sky-500 to-blue-400',
    steps: [
      { id: '1', title: 'Writing Fundamentals', items: ['Clarity', 'Conciseness', 'Structure'], level: 'beginner' },
      { id: '2', title: 'Doc Types', items: ['Tutorials', 'How-tos', 'References', 'Concepts'], level: 'beginner' },
      { id: '3', title: 'Tools', items: ['Markdown', 'Git', 'Static Site Generators'], level: 'intermediate' },
      { id: '4', title: 'API Documentation', items: ['OpenAPI', 'Examples', 'Code Samples'], level: 'intermediate' },
      { id: '5', title: 'Diagrams', items: ['Flowcharts', 'Sequence Diagrams', 'Architecture'], level: 'intermediate' },
      { id: '6', title: 'Docs as Code', items: ['CI/CD', 'Linting', 'Review Process'], level: 'advanced' },
    ]
  },
  {
    id: 'game-developer',
    title: 'Game Developer',
    subtitle: 'Create interactive games',
    category: 'role',
    color: 'from-rose-500 to-pink-400',
    steps: [
      { id: '1', title: 'Programming', items: ['C#', 'C++', 'GDScript'], level: 'beginner' },
      { id: '2', title: 'Game Engines', items: ['Unity', 'Unreal', 'Godot'], level: 'beginner' },
      { id: '3', title: 'Game Loop', items: ['Input', 'Update', 'Render'], level: 'beginner' },
      { id: '4', title: '2D Concepts', items: ['Sprites', 'Animation', 'Collision'], level: 'intermediate' },
      { id: '5', title: '3D Concepts', items: ['Meshes', 'Materials', 'Lighting'], level: 'intermediate' },
      { id: '6', title: 'Physics', items: ['Rigidbodies', 'Colliders', 'Raycasting'], level: 'intermediate' },
      { id: '7', title: 'AI', items: ['Pathfinding', 'State Machines', 'Behavior Trees'], level: 'advanced' },
      { id: '8', title: 'Multiplayer', items: ['Networking', 'Lag Compensation', 'Authority'], level: 'advanced' },
    ]
  },
  {
    id: 'server-side-game-developer',
    title: 'Server Side Game Developer',
    subtitle: 'Build game backends',
    category: 'role',
    color: 'from-orange-500 to-amber-400',
    steps: [
      { id: '1', title: 'Networking', items: ['TCP/UDP', 'WebSockets', 'Protocols'], level: 'beginner' },
      { id: '2', title: 'Game Server Basics', items: ['Game State', 'Tick Rate', 'Synchronization'], level: 'beginner' },
      { id: '3', title: 'Languages', items: ['Go', 'C++', 'Rust', 'Node.js'], level: 'intermediate' },
      { id: '4', title: 'Databases', items: ['Redis', 'PostgreSQL', 'Game-specific DBs'], level: 'intermediate' },
      { id: '5', title: 'Matchmaking', items: ['Skill-based', 'Lobbies', 'Queues'], level: 'advanced' },
      { id: '6', title: 'Scaling', items: ['Load Balancing', 'Sharding', 'Cloud Gaming'], level: 'advanced' },
    ]
  },
  {
    id: 'mlops',
    title: 'MLOps',
    subtitle: 'Operationalize machine learning',
    category: 'role',
    color: 'from-violet-600 to-indigo-500',
    steps: [
      { id: '1', title: 'ML Fundamentals', items: ['Training', 'Evaluation', 'Deployment'], level: 'beginner' },
      { id: '2', title: 'DevOps', items: ['CI/CD', 'Docker', 'Kubernetes'], level: 'beginner' },
      { id: '3', title: 'Experiment Tracking', items: ['MLflow', 'Weights & Biases', 'Neptune'], level: 'intermediate' },
      { id: '4', title: 'Feature Stores', items: ['Feast', 'Tecton', 'Hopsworks'], level: 'intermediate' },
      { id: '5', title: 'Model Registry', items: ['Versioning', 'Staging', 'Production'], level: 'intermediate' },
      { id: '6', title: 'Serving', items: ['TensorFlow Serving', 'Triton', 'BentoML'], level: 'advanced' },
      { id: '7', title: 'Monitoring', items: ['Data Drift', 'Model Performance', 'Alerts'], level: 'advanced' },
      { id: '8', title: 'Pipelines', items: ['Kubeflow', 'Airflow', 'SageMaker'], level: 'advanced' },
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    subtitle: 'Lead product development',
    category: 'role',
    color: 'from-amber-500 to-orange-400',
    steps: [
      { id: '1', title: 'PM Fundamentals', items: ['Product Thinking', 'User Focus', 'Business Goals'], level: 'beginner' },
      { id: '2', title: 'Discovery', items: ['User Research', 'Problem Validation', 'Opportunities'], level: 'beginner' },
      { id: '3', title: 'Strategy', items: ['Vision', 'Roadmapping', 'OKRs'], level: 'intermediate' },
      { id: '4', title: 'Prioritization', items: ['RICE', 'MoSCoW', 'Impact Mapping'], level: 'intermediate' },
      { id: '5', title: 'Execution', items: ['Agile/Scrum', 'User Stories', 'Sprint Planning'], level: 'intermediate' },
      { id: '6', title: 'Analytics', items: ['Metrics', 'A/B Testing', 'Funnels'], level: 'advanced' },
      { id: '7', title: 'Leadership', items: ['Stakeholder Management', 'Communication', 'Influence'], level: 'advanced' },
    ]
  },
  {
    id: 'engineering-manager',
    title: 'Engineering Manager',
    subtitle: 'Lead engineering teams',
    category: 'role',
    color: 'from-slate-500 to-zinc-400',
    steps: [
      { id: '1', title: 'Leadership', items: ['1:1s', 'Feedback', 'Coaching'], level: 'beginner' },
      { id: '2', title: 'Hiring', items: ['Interviewing', 'Onboarding', 'Team Building'], level: 'beginner' },
      { id: '3', title: 'Processes', items: ['Agile', 'Sprint Planning', 'Retrospectives'], level: 'intermediate' },
      { id: '4', title: 'Technical Skills', items: ['Architecture Review', 'Code Review', 'Tech Debt'], level: 'intermediate' },
      { id: '5', title: 'Team Health', items: ['Velocity', 'Burnout Prevention', 'Culture'], level: 'advanced' },
      { id: '6', title: 'Strategy', items: ['Roadmap Alignment', 'Resource Planning', 'Risk Management'], level: 'advanced' },
    ]
  },
  {
    id: 'devrel',
    title: 'Developer Relations',
    subtitle: 'Bridge developers and products',
    category: 'role',
    color: 'from-cyan-500 to-teal-400',
    steps: [
      { id: '1', title: 'Technical Skills', items: ['Coding', 'APIs', 'Documentation'], level: 'beginner' },
      { id: '2', title: 'Content Creation', items: ['Blog Posts', 'Tutorials', 'Videos'], level: 'beginner' },
      { id: '3', title: 'Public Speaking', items: ['Conferences', 'Webinars', 'Workshops'], level: 'intermediate' },
      { id: '4', title: 'Community', items: ['Discord', 'Forums', 'Events'], level: 'intermediate' },
      { id: '5', title: 'Advocacy', items: ['Feedback Loops', 'Product Input', 'User Stories'], level: 'advanced' },
      { id: '6', title: 'Metrics', items: ['Engagement', 'Adoption', 'Satisfaction'], level: 'advanced' },
    ]
  },
  {
    id: 'bi-analyst',
    title: 'BI Analyst',
    subtitle: 'Business intelligence analysis',
    category: 'role',
    color: 'from-teal-600 to-emerald-500',
    steps: [
      { id: '1', title: 'SQL', items: ['Queries', 'Joins', 'Aggregations'], level: 'beginner' },
      { id: '2', title: 'BI Tools', items: ['Power BI', 'Tableau', 'Looker'], level: 'beginner' },
      { id: '3', title: 'Data Modeling', items: ['Star Schema', 'Snowflake', 'Dimensions'], level: 'intermediate' },
      { id: '4', title: 'Visualization', items: ['Charts', 'Dashboards', 'KPIs'], level: 'intermediate' },
      { id: '5', title: 'Analysis', items: ['Trends', 'Forecasting', 'Segmentation'], level: 'advanced' },
      { id: '6', title: 'Storytelling', items: ['Executive Reports', 'Presentations'], level: 'advanced' },
    ]
  },

  // ============== SKILL-BASED ROADMAPS ==============
  {
    id: 'sql',
    title: 'SQL',
    subtitle: 'Database query language',
    category: 'skill',
    color: 'from-blue-500 to-indigo-400',
    steps: [
      { id: '1', title: 'Basics', items: ['SELECT', 'WHERE', 'ORDER BY', 'LIMIT'], level: 'beginner' },
      { id: '2', title: 'CRUD', items: ['INSERT', 'UPDATE', 'DELETE'], level: 'beginner' },
      { id: '3', title: 'Joins', items: ['INNER', 'LEFT', 'RIGHT', 'FULL'], level: 'intermediate' },
      { id: '4', title: 'Aggregations', items: ['GROUP BY', 'HAVING', 'COUNT', 'SUM', 'AVG'], level: 'intermediate' },
      { id: '5', title: 'Advanced', items: ['Subqueries', 'CTEs', 'Window Functions'], level: 'advanced' },
      { id: '6', title: 'Performance', items: ['Indexes', 'EXPLAIN', 'Optimization'], level: 'advanced' },
    ]
  },
  {
    id: 'computer-science',
    title: 'Computer Science',
    subtitle: 'CS fundamentals',
    category: 'skill',
    color: 'from-purple-500 to-violet-400',
    steps: [
      { id: '1', title: 'Programming', items: ['Variables', 'Control Flow', 'Functions'], level: 'beginner' },
      { id: '2', title: 'Data Structures', items: ['Arrays', 'Linked Lists', 'Trees', 'Graphs'], level: 'intermediate' },
      { id: '3', title: 'Algorithms', items: ['Sorting', 'Searching', 'Recursion'], level: 'intermediate' },
      { id: '4', title: 'Complexity', items: ['Big O', 'Time', 'Space'], level: 'intermediate' },
      { id: '5', title: 'OS Concepts', items: ['Processes', 'Threads', 'Memory'], level: 'advanced' },
      { id: '6', title: 'Networks', items: ['TCP/IP', 'HTTP', 'DNS'], level: 'advanced' },
    ]
  },
  {
    id: 'react',
    title: 'React',
    subtitle: 'UI library mastery',
    category: 'skill',
    color: 'from-cyan-500 to-blue-400',
    steps: [
      { id: '1', title: 'Basics', items: ['Components', 'JSX', 'Props', 'State'], level: 'beginner' },
      { id: '2', title: 'Hooks', items: ['useState', 'useEffect', 'useContext', 'useRef'], level: 'beginner' },
      { id: '3', title: 'Advanced Hooks', items: ['useReducer', 'useMemo', 'useCallback', 'Custom Hooks'], level: 'intermediate' },
      { id: '4', title: 'State Management', items: ['Context', 'Redux', 'Zustand', 'TanStack Query'], level: 'intermediate' },
      { id: '5', title: 'Routing', items: ['React Router', 'TanStack Router'], level: 'intermediate' },
      { id: '6', title: 'Forms', items: ['React Hook Form', 'Formik', 'Validation'], level: 'intermediate' },
      { id: '7', title: 'Testing', items: ['Jest', 'RTL', 'Cypress'], level: 'advanced' },
      { id: '8', title: 'Performance', items: ['Memo', 'Lazy Loading', 'Suspense'], level: 'advanced' },
    ]
  },
  {
    id: 'vue',
    title: 'Vue',
    subtitle: 'Progressive framework',
    category: 'skill',
    color: 'from-green-500 to-emerald-400',
    steps: [
      { id: '1', title: 'Basics', items: ['Templates', 'Directives', 'Reactivity'], level: 'beginner' },
      { id: '2', title: 'Components', items: ['Props', 'Events', 'Slots'], level: 'beginner' },
      { id: '3', title: 'Composition API', items: ['ref', 'reactive', 'computed', 'watch'], level: 'intermediate' },
      { id: '4', title: 'State', items: ['Pinia', 'Vuex'], level: 'intermediate' },
      { id: '5', title: 'Routing', items: ['Vue Router', 'Navigation Guards'], level: 'intermediate' },
      { id: '6', title: 'SSR', items: ['Nuxt.js', 'SSG', 'Hydration'], level: 'advanced' },
    ]
  },
  {
    id: 'angular',
    title: 'Angular',
    subtitle: 'Full-featured framework',
    category: 'skill',
    color: 'from-red-500 to-rose-400',
    steps: [
      { id: '1', title: 'TypeScript', items: ['Types', 'Classes', 'Decorators'], level: 'beginner' },
      { id: '2', title: 'Components', items: ['Templates', 'Data Binding', 'Lifecycle'], level: 'beginner' },
      { id: '3', title: 'Modules', items: ['NgModules', 'Lazy Loading', 'Standalone'], level: 'intermediate' },
      { id: '4', title: 'Services & DI', items: ['Injectable', 'Providers', 'Scopes'], level: 'intermediate' },
      { id: '5', title: 'RxJS', items: ['Observables', 'Operators', 'Subjects'], level: 'intermediate' },
      { id: '6', title: 'Forms', items: ['Template-driven', 'Reactive Forms', 'Validation'], level: 'advanced' },
      { id: '7', title: 'Routing', items: ['Router', 'Guards', 'Resolvers'], level: 'advanced' },
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    subtitle: 'Web programming language',
    category: 'skill',
    color: 'from-yellow-500 to-amber-400',
    steps: [
      { id: '1', title: 'Basics', items: ['Variables', 'Data Types', 'Operators'], level: 'beginner' },
      { id: '2', title: 'Control Flow', items: ['Conditionals', 'Loops', 'Functions'], level: 'beginner' },
      { id: '3', title: 'DOM', items: ['Selecting', 'Events', 'Manipulation'], level: 'beginner' },
      { id: '4', title: 'ES6+', items: ['Arrow Functions', 'Destructuring', 'Spread/Rest', 'Modules'], level: 'intermediate' },
      { id: '5', title: 'Async', items: ['Callbacks', 'Promises', 'async/await'], level: 'intermediate' },
      { id: '6', title: 'Advanced', items: ['Closures', 'Prototypes', 'this keyword'], level: 'advanced' },
      { id: '7', title: 'Patterns', items: ['Modules', 'Factory', 'Observer'], level: 'advanced' },
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    subtitle: 'Typed JavaScript',
    category: 'skill',
    color: 'from-blue-600 to-indigo-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Types', 'Type Inference', 'Type Annotations'], level: 'beginner' },
      { id: '2', title: 'Objects', items: ['Interfaces', 'Type Aliases', 'Optional Properties'], level: 'beginner' },
      { id: '3', title: 'Functions', items: ['Parameter Types', 'Return Types', 'Overloads'], level: 'intermediate' },
      { id: '4', title: 'Advanced Types', items: ['Union', 'Intersection', 'Literal Types'], level: 'intermediate' },
      { id: '5', title: 'Generics', items: ['Generic Functions', 'Constraints', 'Utility Types'], level: 'advanced' },
      { id: '6', title: 'Type Guards', items: ['typeof', 'instanceof', 'Custom Guards'], level: 'advanced' },
    ]
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    subtitle: 'JavaScript runtime',
    category: 'skill',
    color: 'from-green-600 to-emerald-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Modules', 'npm', 'package.json'], level: 'beginner' },
      { id: '2', title: 'Core Modules', items: ['fs', 'path', 'http', 'events'], level: 'beginner' },
      { id: '3', title: 'Express', items: ['Routes', 'Middleware', 'Error Handling'], level: 'intermediate' },
      { id: '4', title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'ORMs'], level: 'intermediate' },
      { id: '5', title: 'APIs', items: ['REST', 'GraphQL', 'Authentication'], level: 'intermediate' },
      { id: '6', title: 'Testing', items: ['Jest', 'Supertest', 'Mocking'], level: 'advanced' },
      { id: '7', title: 'Performance', items: ['Clustering', 'Caching', 'Profiling'], level: 'advanced' },
    ]
  },
  {
    id: 'python',
    title: 'Python',
    subtitle: 'Versatile programming',
    category: 'skill',
    color: 'from-blue-500 to-green-400',
    steps: [
      { id: '1', title: 'Basics', items: ['Variables', 'Data Types', 'Control Flow'], level: 'beginner' },
      { id: '2', title: 'Functions', items: ['Parameters', 'Return Values', 'Scope'], level: 'beginner' },
      { id: '3', title: 'Data Structures', items: ['Lists', 'Dicts', 'Sets', 'Tuples'], level: 'beginner' },
      { id: '4', title: 'OOP', items: ['Classes', 'Inheritance', 'Magic Methods'], level: 'intermediate' },
      { id: '5', title: 'Modules', items: ['Importing', 'Packages', 'Virtual Envs'], level: 'intermediate' },
      { id: '6', title: 'Advanced', items: ['Decorators', 'Generators', 'Context Managers'], level: 'advanced' },
      { id: '7', title: 'Web', items: ['Django', 'Flask', 'FastAPI'], level: 'advanced' },
    ]
  },
  {
    id: 'system-design',
    title: 'System Design',
    subtitle: 'Architect scalable systems',
    category: 'skill',
    color: 'from-slate-600 to-gray-500',
    steps: [
      { id: '1', title: 'Fundamentals', items: ['Scalability', 'Availability', 'Latency'], level: 'beginner' },
      { id: '2', title: 'Networking', items: ['DNS', 'CDN', 'Load Balancers'], level: 'intermediate' },
      { id: '3', title: 'Databases', items: ['SQL vs NoSQL', 'Indexing', 'Sharding'], level: 'intermediate' },
      { id: '4', title: 'Caching', items: ['Redis', 'Memcached', 'Cache Strategies'], level: 'intermediate' },
      { id: '5', title: 'Message Queues', items: ['Kafka', 'RabbitMQ', 'Pub/Sub'], level: 'advanced' },
      { id: '6', title: 'Microservices', items: ['Service Discovery', 'API Gateway', 'Circuit Breaker'], level: 'advanced' },
      { id: '7', title: 'Case Studies', items: ['URL Shortener', 'Twitter', 'Netflix'], level: 'advanced' },
    ]
  },
  {
    id: 'java',
    title: 'Java',
    subtitle: 'Enterprise development',
    category: 'skill',
    color: 'from-orange-600 to-red-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Syntax', 'Data Types', 'Control Flow'], level: 'beginner' },
      { id: '2', title: 'OOP', items: ['Classes', 'Inheritance', 'Polymorphism', 'Interfaces'], level: 'beginner' },
      { id: '3', title: 'Collections', items: ['List', 'Set', 'Map', 'Queue'], level: 'intermediate' },
      { id: '4', title: 'Exceptions', items: ['Try/Catch', 'Custom Exceptions', 'Best Practices'], level: 'intermediate' },
      { id: '5', title: 'Streams', items: ['Functional Style', 'map/filter/reduce'], level: 'intermediate' },
      { id: '6', title: 'Concurrency', items: ['Threads', 'Executors', 'Synchronization'], level: 'advanced' },
      { id: '7', title: 'Frameworks', items: ['Spring Boot', 'Hibernate', 'JUnit'], level: 'advanced' },
    ]
  },
  {
    id: 'aspnet-core',
    title: 'ASP.NET Core',
    subtitle: '.NET web framework',
    category: 'skill',
    color: 'from-purple-600 to-indigo-500',
    steps: [
      { id: '1', title: 'C# Basics', items: ['Syntax', 'OOP', 'LINQ'], level: 'beginner' },
      { id: '2', title: 'ASP.NET Basics', items: ['MVC', 'Routing', 'Controllers'], level: 'beginner' },
      { id: '3', title: 'APIs', items: ['Web API', 'Minimal APIs', 'Swagger'], level: 'intermediate' },
      { id: '4', title: 'Data Access', items: ['Entity Framework', 'Dapper', 'Migrations'], level: 'intermediate' },
      { id: '5', title: 'Security', items: ['Identity', 'JWT', 'OAuth'], level: 'advanced' },
      { id: '6', title: 'Advanced', items: ['Middleware', 'DI', 'Background Services'], level: 'advanced' },
    ]
  },
  {
    id: 'api-design',
    title: 'API Design',
    subtitle: 'Design great APIs',
    category: 'skill',
    color: 'from-teal-500 to-cyan-400',
    steps: [
      { id: '1', title: 'REST Basics', items: ['Resources', 'HTTP Methods', 'Status Codes'], level: 'beginner' },
      { id: '2', title: 'Best Practices', items: ['Naming', 'Versioning', 'Pagination'], level: 'beginner' },
      { id: '3', title: 'Documentation', items: ['OpenAPI', 'Swagger', 'Examples'], level: 'intermediate' },
      { id: '4', title: 'Security', items: ['Authentication', 'Authorization', 'Rate Limiting'], level: 'intermediate' },
      { id: '5', title: 'GraphQL', items: ['Schema', 'Queries', 'Mutations', 'Subscriptions'], level: 'advanced' },
      { id: '6', title: 'gRPC', items: ['Protobuf', 'Streaming', 'Service Definition'], level: 'advanced' },
    ]
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot',
    subtitle: 'Java framework',
    category: 'skill',
    color: 'from-green-600 to-lime-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Auto-configuration', 'Starters', 'Properties'], level: 'beginner' },
      { id: '2', title: 'Web', items: ['Controllers', 'REST APIs', 'Validation'], level: 'beginner' },
      { id: '3', title: 'Data', items: ['JPA', 'Repositories', 'Transactions'], level: 'intermediate' },
      { id: '4', title: 'Security', items: ['Spring Security', 'JWT', 'OAuth2'], level: 'intermediate' },
      { id: '5', title: 'Testing', items: ['JUnit', 'MockMvc', 'Testcontainers'], level: 'advanced' },
      { id: '6', title: 'Production', items: ['Actuator', 'Metrics', 'Logging'], level: 'advanced' },
    ]
  },
  {
    id: 'flutter',
    title: 'Flutter',
    subtitle: 'Cross-platform mobile',
    category: 'skill',
    color: 'from-cyan-600 to-blue-500',
    steps: [
      { id: '1', title: 'Dart', items: ['Syntax', 'OOP', 'Async'], level: 'beginner' },
      { id: '2', title: 'Widgets', items: ['Stateless', 'Stateful', 'Layout'], level: 'beginner' },
      { id: '3', title: 'State Management', items: ['setState', 'Provider', 'Riverpod', 'Bloc'], level: 'intermediate' },
      { id: '4', title: 'Navigation', items: ['Routes', 'Navigator', 'Go Router'], level: 'intermediate' },
      { id: '5', title: 'Networking', items: ['HTTP', 'Dio', 'JSON Parsing'], level: 'intermediate' },
      { id: '6', title: 'Platform', items: ['Android', 'iOS', 'Web', 'Desktop'], level: 'advanced' },
    ]
  },
  {
    id: 'cpp',
    title: 'C++',
    subtitle: 'Systems programming',
    category: 'skill',
    color: 'from-blue-700 to-indigo-600',
    steps: [
      { id: '1', title: 'Basics', items: ['Syntax', 'Variables', 'Control Flow'], level: 'beginner' },
      { id: '2', title: 'Pointers', items: ['References', 'Memory', 'Arrays'], level: 'beginner' },
      { id: '3', title: 'OOP', items: ['Classes', 'Inheritance', 'Polymorphism'], level: 'intermediate' },
      { id: '4', title: 'STL', items: ['Containers', 'Iterators', 'Algorithms'], level: 'intermediate' },
      { id: '5', title: 'Memory', items: ['RAII', 'Smart Pointers', 'Move Semantics'], level: 'advanced' },
      { id: '6', title: 'Modern C++', items: ['C++11/14/17/20', 'Templates', 'Lambdas'], level: 'advanced' },
    ]
  },
  {
    id: 'rust',
    title: 'Rust',
    subtitle: 'Safe systems programming',
    category: 'skill',
    color: 'from-orange-700 to-red-600',
    steps: [
      { id: '1', title: 'Basics', items: ['Variables', 'Data Types', 'Functions'], level: 'beginner' },
      { id: '2', title: 'Ownership', items: ['Borrowing', 'References', 'Lifetimes'], level: 'beginner' },
      { id: '3', title: 'Structs & Enums', items: ['Structs', 'Enums', 'Pattern Matching'], level: 'intermediate' },
      { id: '4', title: 'Error Handling', items: ['Result', 'Option', '? Operator'], level: 'intermediate' },
      { id: '5', title: 'Traits', items: ['Generics', 'Trait Bounds', 'dyn Trait'], level: 'advanced' },
      { id: '6', title: 'Concurrency', items: ['Threads', 'Channels', 'async/await'], level: 'advanced' },
    ]
  },
  {
    id: 'go',
    title: 'Go',
    subtitle: 'Simple, efficient language',
    category: 'skill',
    color: 'from-cyan-700 to-teal-600',
    steps: [
      { id: '1', title: 'Basics', items: ['Variables', 'Functions', 'Control Flow'], level: 'beginner' },
      { id: '2', title: 'Data Types', items: ['Slices', 'Maps', 'Structs'], level: 'beginner' },
      { id: '3', title: 'Interfaces', items: ['Methods', 'Implicit Implementation'], level: 'intermediate' },
      { id: '4', title: 'Concurrency', items: ['Goroutines', 'Channels', 'Select'], level: 'intermediate' },
      { id: '5', title: 'Error Handling', items: ['Errors', 'Panic/Recover'], level: 'intermediate' },
      { id: '6', title: 'Web', items: ['net/http', 'Gin', 'Echo'], level: 'advanced' },
    ]
  },
  {
    id: 'design-architecture',
    title: 'Design and Architecture',
    subtitle: 'Software design principles',
    category: 'skill',
    color: 'from-slate-500 to-zinc-400',
    steps: [
      { id: '1', title: 'Principles', items: ['SOLID', 'DRY', 'KISS', 'YAGNI'], level: 'beginner' },
      { id: '2', title: 'Patterns', items: ['Creational', 'Structural', 'Behavioral'], level: 'intermediate' },
      { id: '3', title: 'Architecture', items: ['Layered', 'Clean', 'Hexagonal'], level: 'intermediate' },
      { id: '4', title: 'DDD', items: ['Entities', 'Value Objects', 'Aggregates'], level: 'advanced' },
      { id: '5', title: 'Microservices', items: ['Decomposition', 'Communication', 'Data'], level: 'advanced' },
    ]
  },
  {
    id: 'graphql',
    title: 'GraphQL',
    subtitle: 'API query language',
    category: 'skill',
    color: 'from-pink-600 to-rose-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Queries', 'Mutations', 'Schema'], level: 'beginner' },
      { id: '2', title: 'Types', items: ['Scalars', 'Objects', 'Enums', 'Interfaces'], level: 'beginner' },
      { id: '3', title: 'Resolvers', items: ['Field Resolvers', 'Arguments', 'Context'], level: 'intermediate' },
      { id: '4', title: 'Client', items: ['Apollo Client', 'urql', 'Caching'], level: 'intermediate' },
      { id: '5', title: 'Advanced', items: ['Subscriptions', 'Directives', 'Federation'], level: 'advanced' },
    ]
  },
  {
    id: 'react-native',
    title: 'React Native',
    subtitle: 'Native mobile with React',
    category: 'skill',
    color: 'from-blue-600 to-cyan-500',
    steps: [
      { id: '1', title: 'React Basics', items: ['Components', 'Props', 'State', 'Hooks'], level: 'beginner' },
      { id: '2', title: 'Core Components', items: ['View', 'Text', 'Image', 'ScrollView'], level: 'beginner' },
      { id: '3', title: 'Styling', items: ['StyleSheet', 'Flexbox', 'Platform-specific'], level: 'intermediate' },
      { id: '4', title: 'Navigation', items: ['React Navigation', 'Stack', 'Tab', 'Drawer'], level: 'intermediate' },
      { id: '5', title: 'Native Modules', items: ['Bridging', 'Native Code', 'Turbo Modules'], level: 'advanced' },
      { id: '6', title: 'Expo', items: ['Managed Workflow', 'EAS Build', 'Updates'], level: 'advanced' },
    ]
  },
  {
    id: 'design-system',
    title: 'Design System',
    subtitle: 'Create consistent UI',
    category: 'skill',
    color: 'from-fuchsia-500 to-purple-400',
    steps: [
      { id: '1', title: 'Foundations', items: ['Colors', 'Typography', 'Spacing', 'Icons'], level: 'beginner' },
      { id: '2', title: 'Components', items: ['Buttons', 'Inputs', 'Cards', 'Modals'], level: 'beginner' },
      { id: '3', title: 'Tokens', items: ['Design Tokens', 'CSS Variables', 'Theming'], level: 'intermediate' },
      { id: '4', title: 'Documentation', items: ['Storybook', 'Usage Guidelines', 'Examples'], level: 'intermediate' },
      { id: '5', title: 'Accessibility', items: ['WCAG', 'ARIA', 'Keyboard Navigation'], level: 'advanced' },
    ]
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    subtitle: 'Master AI prompts',
    category: 'skill',
    color: 'from-orange-500 to-yellow-400',
    steps: [
      { id: '1', title: 'Basics', items: ['Clear Instructions', 'Context', 'Examples'], level: 'beginner' },
      { id: '2', title: 'Techniques', items: ['Zero-shot', 'Few-shot', 'Chain of Thought'], level: 'beginner' },
      { id: '3', title: 'System Prompts', items: ['Role Definition', 'Constraints', 'Format'], level: 'intermediate' },
      { id: '4', title: 'Advanced', items: ['Tree of Thought', 'Self-Consistency', 'ReAct'], level: 'intermediate' },
      { id: '5', title: 'Optimization', items: ['Iteration', 'Evaluation', 'A/B Testing'], level: 'advanced' },
    ]
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    subtitle: 'Document database',
    category: 'skill',
    color: 'from-green-600 to-emerald-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Documents', 'Collections', 'CRUD'], level: 'beginner' },
      { id: '2', title: 'Querying', items: ['Find', 'Filters', 'Projections', 'Sort'], level: 'beginner' },
      { id: '3', title: 'Aggregation', items: ['Pipeline', 'Stages', 'Operators'], level: 'intermediate' },
      { id: '4', title: 'Indexes', items: ['Single Field', 'Compound', 'Text', 'Geospatial'], level: 'intermediate' },
      { id: '5', title: 'Schema Design', items: ['Embedding', 'References', 'Patterns'], level: 'advanced' },
      { id: '6', title: 'Replication', items: ['Replica Sets', 'Sharding', 'Atlas'], level: 'advanced' },
    ]
  },
  {
    id: 'linux',
    title: 'Linux',
    subtitle: 'Operating system mastery',
    category: 'skill',
    color: 'from-yellow-600 to-orange-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Terminal', 'File System', 'Permissions'], level: 'beginner' },
      { id: '2', title: 'Commands', items: ['ls', 'cd', 'grep', 'find', 'awk', 'sed'], level: 'beginner' },
      { id: '3', title: 'Users & Groups', items: ['Users', 'Groups', 'sudo', 'chmod'], level: 'intermediate' },
      { id: '4', title: 'Processes', items: ['ps', 'top', 'kill', 'systemd'], level: 'intermediate' },
      { id: '5', title: 'Networking', items: ['IP', 'Ports', 'iptables', 'SSH'], level: 'advanced' },
      { id: '6', title: 'Shell Scripting', items: ['Bash', 'Variables', 'Loops', 'Functions'], level: 'advanced' },
    ]
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    subtitle: 'Container orchestration',
    category: 'skill',
    color: 'from-blue-600 to-indigo-500',
    steps: [
      { id: '1', title: 'Concepts', items: ['Pods', 'Nodes', 'Cluster'], level: 'beginner' },
      { id: '2', title: 'Workloads', items: ['Deployments', 'ReplicaSets', 'DaemonSets'], level: 'beginner' },
      { id: '3', title: 'Services', items: ['ClusterIP', 'NodePort', 'LoadBalancer', 'Ingress'], level: 'intermediate' },
      { id: '4', title: 'Configuration', items: ['ConfigMaps', 'Secrets', 'Environment'], level: 'intermediate' },
      { id: '5', title: 'Storage', items: ['Volumes', 'PersistentVolumes', 'StorageClasses'], level: 'advanced' },
      { id: '6', title: 'Operations', items: ['Helm', 'Operators', 'Monitoring', 'Logging'], level: 'advanced' },
    ]
  },
  {
    id: 'docker',
    title: 'Docker',
    subtitle: 'Containerization',
    category: 'skill',
    color: 'from-sky-600 to-blue-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Images', 'Containers', 'Docker CLI'], level: 'beginner' },
      { id: '2', title: 'Dockerfile', items: ['FROM', 'RUN', 'COPY', 'CMD', 'ENTRYPOINT'], level: 'beginner' },
      { id: '3', title: 'Networking', items: ['Bridge', 'Host', 'Overlay', 'Port Mapping'], level: 'intermediate' },
      { id: '4', title: 'Volumes', items: ['Bind Mounts', 'Named Volumes', 'tmpfs'], level: 'intermediate' },
      { id: '5', title: 'Compose', items: ['Services', 'Networks', 'Volumes', 'Environments'], level: 'intermediate' },
      { id: '6', title: 'Best Practices', items: ['Multi-stage Builds', 'Layer Caching', 'Security'], level: 'advanced' },
    ]
  },
  {
    id: 'aws',
    title: 'AWS',
    subtitle: 'Amazon cloud platform',
    category: 'skill',
    color: 'from-orange-500 to-yellow-400',
    steps: [
      { id: '1', title: 'Basics', items: ['Regions', 'AZs', 'IAM', 'Billing'], level: 'beginner' },
      { id: '2', title: 'Compute', items: ['EC2', 'Lambda', 'ECS', 'Fargate'], level: 'beginner' },
      { id: '3', title: 'Storage', items: ['S3', 'EBS', 'EFS', 'Glacier'], level: 'intermediate' },
      { id: '4', title: 'Database', items: ['RDS', 'DynamoDB', 'ElastiCache', 'Aurora'], level: 'intermediate' },
      { id: '5', title: 'Networking', items: ['VPC', 'Route 53', 'CloudFront', 'ELB'], level: 'advanced' },
      { id: '6', title: 'DevOps', items: ['CloudFormation', 'CodePipeline', 'CloudWatch'], level: 'advanced' },
    ]
  },
  {
    id: 'terraform',
    title: 'Terraform',
    subtitle: 'Infrastructure as Code',
    category: 'skill',
    color: 'from-purple-600 to-violet-500',
    steps: [
      { id: '1', title: 'Basics', items: ['HCL', 'Providers', 'Resources'], level: 'beginner' },
      { id: '2', title: 'State', items: ['Local State', 'Remote State', 'State Locking'], level: 'beginner' },
      { id: '3', title: 'Variables', items: ['Input Variables', 'Output Values', 'Locals'], level: 'intermediate' },
      { id: '4', title: 'Modules', items: ['Creating Modules', 'Registry', 'Versioning'], level: 'intermediate' },
      { id: '5', title: 'Workspaces', items: ['Multiple Envs', 'State Separation'], level: 'advanced' },
      { id: '6', title: 'Best Practices', items: ['Organization', 'Testing', 'CI/CD'], level: 'advanced' },
    ]
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    subtitle: 'CS fundamentals',
    category: 'skill',
    color: 'from-violet-600 to-purple-500',
    steps: [
      { id: '1', title: 'Arrays', items: ['Operations', 'Two Pointers', 'Sliding Window'], level: 'beginner' },
      { id: '2', title: 'Linked Lists', items: ['Singly', 'Doubly', 'Operations'], level: 'beginner' },
      { id: '3', title: 'Stacks & Queues', items: ['Implementation', 'Applications'], level: 'beginner' },
      { id: '4', title: 'Trees', items: ['Binary Trees', 'BST', 'Traversal'], level: 'intermediate' },
      { id: '5', title: 'Graphs', items: ['BFS', 'DFS', 'Shortest Path'], level: 'intermediate' },
      { id: '6', title: 'Sorting', items: ['Bubble', 'Merge', 'Quick', 'Heap'], level: 'intermediate' },
      { id: '7', title: 'Dynamic Programming', items: ['Memoization', 'Tabulation', 'Common Patterns'], level: 'advanced' },
    ]
  },
  {
    id: 'redis',
    title: 'Redis',
    subtitle: 'In-memory data store',
    category: 'skill',
    color: 'from-red-600 to-rose-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Strings', 'Keys', 'TTL'], level: 'beginner' },
      { id: '2', title: 'Data Types', items: ['Lists', 'Sets', 'Hashes', 'Sorted Sets'], level: 'beginner' },
      { id: '3', title: 'Pub/Sub', items: ['Channels', 'Subscribe', 'Publish'], level: 'intermediate' },
      { id: '4', title: 'Transactions', items: ['MULTI', 'EXEC', 'WATCH'], level: 'intermediate' },
      { id: '5', title: 'Persistence', items: ['RDB', 'AOF', 'Hybrid'], level: 'advanced' },
      { id: '6', title: 'Cluster', items: ['Replication', 'Sentinel', 'Cluster Mode'], level: 'advanced' },
    ]
  },
  {
    id: 'git-github',
    title: 'Git and GitHub',
    subtitle: 'Version control',
    category: 'skill',
    color: 'from-gray-600 to-zinc-500',
    steps: [
      { id: '1', title: 'Basics', items: ['init', 'add', 'commit', 'status'], level: 'beginner' },
      { id: '2', title: 'Branching', items: ['branch', 'checkout', 'merge'], level: 'beginner' },
      { id: '3', title: 'Remote', items: ['clone', 'push', 'pull', 'fetch'], level: 'beginner' },
      { id: '4', title: 'GitHub', items: ['Pull Requests', 'Issues', 'Actions'], level: 'intermediate' },
      { id: '5', title: 'Advanced', items: ['rebase', 'cherry-pick', 'stash'], level: 'intermediate' },
      { id: '6', title: 'Workflows', items: ['Git Flow', 'GitHub Flow', 'Trunk-based'], level: 'advanced' },
    ]
  },
  {
    id: 'php',
    title: 'PHP',
    subtitle: 'Server-side scripting',
    category: 'skill',
    color: 'from-indigo-600 to-blue-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Syntax', 'Variables', 'Control Flow'], level: 'beginner' },
      { id: '2', title: 'Functions', items: ['Built-in', 'Custom', 'Scope'], level: 'beginner' },
      { id: '3', title: 'OOP', items: ['Classes', 'Interfaces', 'Traits', 'Namespaces'], level: 'intermediate' },
      { id: '4', title: 'Databases', items: ['PDO', 'MySQL', 'Eloquent'], level: 'intermediate' },
      { id: '5', title: 'Frameworks', items: ['Laravel', 'Symfony', 'CodeIgniter'], level: 'advanced' },
      { id: '6', title: 'Modern PHP', items: ['Composer', 'PSR Standards', 'PHP 8+'], level: 'advanced' },
    ]
  },
  {
    id: 'cloudflare',
    title: 'Cloudflare',
    subtitle: 'Edge computing & CDN',
    category: 'skill',
    color: 'from-orange-500 to-amber-400',
    steps: [
      { id: '1', title: 'DNS', items: ['Records', 'Proxying', 'DNSSEC'], level: 'beginner' },
      { id: '2', title: 'CDN', items: ['Caching', 'Cache Rules', 'Purge'], level: 'beginner' },
      { id: '3', title: 'Security', items: ['WAF', 'DDoS Protection', 'Rate Limiting'], level: 'intermediate' },
      { id: '4', title: 'Workers', items: ['Edge Functions', 'KV Storage', 'Durable Objects'], level: 'intermediate' },
      { id: '5', title: 'Pages', items: ['Deployment', 'Functions', 'Preview'], level: 'advanced' },
    ]
  },
  {
    id: 'ai-red-teaming',
    title: 'AI Red Teaming',
    subtitle: 'Test AI security',
    category: 'skill',
    color: 'from-red-700 to-rose-600',
    steps: [
      { id: '1', title: 'AI Security Basics', items: ['Threat Models', 'Attack Surfaces'], level: 'beginner' },
      { id: '2', title: 'Prompt Injection', items: ['Direct', 'Indirect', 'Jailbreaking'], level: 'intermediate' },
      { id: '3', title: 'Data Extraction', items: ['Training Data', 'System Prompts'], level: 'intermediate' },
      { id: '4', title: 'Adversarial Attacks', items: ['Input Manipulation', 'Evasion'], level: 'advanced' },
      { id: '5', title: 'Defense', items: ['Input Validation', 'Output Filtering', 'Guardrails'], level: 'advanced' },
    ]
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    subtitle: 'Autonomous AI systems',
    category: 'skill',
    color: 'from-violet-600 to-purple-500',
    steps: [
      { id: '1', title: 'Fundamentals', items: ['What are Agents', 'LLMs as Reasoning'], level: 'beginner' },
      { id: '2', title: 'Tool Use', items: ['Function Calling', 'Tool Definition', 'Execution'], level: 'beginner' },
      { id: '3', title: 'Patterns', items: ['ReAct', 'Plan and Execute', 'Reflection'], level: 'intermediate' },
      { id: '4', title: 'Frameworks', items: ['LangChain Agents', 'AutoGPT', 'CrewAI'], level: 'intermediate' },
      { id: '5', title: 'Multi-Agent', items: ['Collaboration', 'Orchestration', 'Hierarchies'], level: 'advanced' },
      { id: '6', title: 'Production', items: ['Reliability', 'Observability', 'Safety'], level: 'advanced' },
    ]
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    subtitle: 'React framework',
    category: 'skill',
    color: 'from-gray-700 to-zinc-600',
    steps: [
      { id: '1', title: 'Basics', items: ['Pages', 'Routing', 'Linking'], level: 'beginner' },
      { id: '2', title: 'Data Fetching', items: ['getServerSideProps', 'getStaticProps', 'ISR'], level: 'beginner' },
      { id: '3', title: 'App Router', items: ['Server Components', 'Client Components', 'Layouts'], level: 'intermediate' },
      { id: '4', title: 'API Routes', items: ['Route Handlers', 'Server Actions'], level: 'intermediate' },
      { id: '5', title: 'Optimization', items: ['Image', 'Font', 'Script'], level: 'advanced' },
      { id: '6', title: 'Deployment', items: ['Vercel', 'Self-hosted', 'Edge Runtime'], level: 'advanced' },
    ]
  },
  {
    id: 'code-review',
    title: 'Code Review',
    subtitle: 'Review code effectively',
    category: 'skill',
    color: 'from-emerald-600 to-green-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Purpose', 'Process', 'Etiquette'], level: 'beginner' },
      { id: '2', title: 'What to Review', items: ['Logic', 'Style', 'Performance', 'Security'], level: 'beginner' },
      { id: '3', title: 'Feedback', items: ['Constructive Comments', 'Suggestions', 'Praise'], level: 'intermediate' },
      { id: '4', title: 'Tools', items: ['GitHub PRs', 'GitLab MRs', 'Code Climate'], level: 'intermediate' },
      { id: '5', title: 'Best Practices', items: ['Small PRs', 'Automated Checks', 'Documentation'], level: 'advanced' },
    ]
  },
  {
    id: 'kotlin',
    title: 'Kotlin',
    subtitle: 'Modern JVM language',
    category: 'skill',
    color: 'from-purple-600 to-violet-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Variables', 'Functions', 'Control Flow'], level: 'beginner' },
      { id: '2', title: 'Null Safety', items: ['Nullable Types', 'Safe Calls', 'Elvis Operator'], level: 'beginner' },
      { id: '3', title: 'OOP', items: ['Classes', 'Interfaces', 'Data Classes'], level: 'intermediate' },
      { id: '4', title: 'Functional', items: ['Lambdas', 'Higher-order Functions', 'Collections'], level: 'intermediate' },
      { id: '5', title: 'Coroutines', items: ['Suspend Functions', 'Flows', 'Channels'], level: 'advanced' },
    ]
  },
  {
    id: 'html',
    title: 'HTML',
    subtitle: 'Web structure',
    category: 'skill',
    color: 'from-orange-600 to-red-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Tags', 'Elements', 'Attributes'], level: 'beginner' },
      { id: '2', title: 'Text', items: ['Headings', 'Paragraphs', 'Lists', 'Links'], level: 'beginner' },
      { id: '3', title: 'Media', items: ['Images', 'Video', 'Audio'], level: 'beginner' },
      { id: '4', title: 'Forms', items: ['Inputs', 'Validation', 'Accessibility'], level: 'intermediate' },
      { id: '5', title: 'Semantic', items: ['header', 'nav', 'main', 'article', 'footer'], level: 'intermediate' },
      { id: '6', title: 'SEO', items: ['Meta Tags', 'Open Graph', 'Schema.org'], level: 'advanced' },
    ]
  },
  {
    id: 'css',
    title: 'CSS',
    subtitle: 'Web styling',
    category: 'skill',
    color: 'from-blue-600 to-indigo-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Selectors', 'Properties', 'Values'], level: 'beginner' },
      { id: '2', title: 'Box Model', items: ['Margin', 'Padding', 'Border', 'Box-sizing'], level: 'beginner' },
      { id: '3', title: 'Layout', items: ['Flexbox', 'Grid', 'Positioning'], level: 'intermediate' },
      { id: '4', title: 'Responsive', items: ['Media Queries', 'Mobile-first', 'Units'], level: 'intermediate' },
      { id: '5', title: 'Animations', items: ['Transitions', 'Keyframes', 'Transforms'], level: 'advanced' },
      { id: '6', title: 'Modern CSS', items: ['Variables', 'Container Queries', 'Subgrid'], level: 'advanced' },
    ]
  },
  {
    id: 'swift-swiftui',
    title: 'Swift & SwiftUI',
    subtitle: 'Apple development',
    category: 'skill',
    color: 'from-orange-500 to-red-400',
    steps: [
      { id: '1', title: 'Swift Basics', items: ['Variables', 'Functions', 'Optionals'], level: 'beginner' },
      { id: '2', title: 'SwiftUI Basics', items: ['Views', 'Modifiers', 'State'], level: 'beginner' },
      { id: '3', title: 'Layout', items: ['Stacks', 'Grids', 'GeometryReader'], level: 'intermediate' },
      { id: '4', title: 'State Management', items: ['@State', '@Binding', '@ObservedObject'], level: 'intermediate' },
      { id: '5', title: 'Navigation', items: ['NavigationStack', 'Sheets', 'Alerts'], level: 'advanced' },
      { id: '6', title: 'Data', items: ['Core Data', 'SwiftData', 'CloudKit'], level: 'advanced' },
    ]
  },
  {
    id: 'shell-bash',
    title: 'Shell / Bash',
    subtitle: 'Command line mastery',
    category: 'skill',
    color: 'from-gray-700 to-zinc-600',
    steps: [
      { id: '1', title: 'Basics', items: ['Commands', 'Arguments', 'Options'], level: 'beginner' },
      { id: '2', title: 'Navigation', items: ['cd', 'ls', 'pwd', 'find'], level: 'beginner' },
      { id: '3', title: 'File Operations', items: ['cp', 'mv', 'rm', 'mkdir'], level: 'beginner' },
      { id: '4', title: 'Text Processing', items: ['grep', 'sed', 'awk', 'cut'], level: 'intermediate' },
      { id: '5', title: 'Scripting', items: ['Variables', 'Conditionals', 'Loops'], level: 'intermediate' },
      { id: '6', title: 'Advanced', items: ['Functions', 'Error Handling', 'Process Substitution'], level: 'advanced' },
    ]
  },
  {
    id: 'laravel',
    title: 'Laravel',
    subtitle: 'PHP framework',
    category: 'skill',
    color: 'from-red-600 to-rose-500',
    steps: [
      { id: '1', title: 'Basics', items: ['Installation', 'Directory Structure', 'Artisan'], level: 'beginner' },
      { id: '2', title: 'Routing', items: ['Routes', 'Controllers', 'Middleware'], level: 'beginner' },
      { id: '3', title: 'Eloquent', items: ['Models', 'Relationships', 'Migrations'], level: 'intermediate' },
      { id: '4', title: 'Blade', items: ['Templates', 'Components', 'Directives'], level: 'intermediate' },
      { id: '5', title: 'Authentication', items: ['Auth Scaffolding', 'Sanctum', 'Policies'], level: 'advanced' },
      { id: '6', title: 'Advanced', items: ['Queues', 'Events', 'Broadcasting'], level: 'advanced' },
    ]
  },
  {
    id: 'elasticsearch',
    title: 'Elasticsearch',
    subtitle: 'Search engine',
    category: 'skill',
    isNew: true,
    color: 'from-yellow-500 to-amber-400',
    steps: [
      { id: '1', title: 'Basics', items: ['Indices', 'Documents', 'Mappings'], level: 'beginner' },
      { id: '2', title: 'CRUD', items: ['Index', 'Get', 'Update', 'Delete'], level: 'beginner' },
      { id: '3', title: 'Search', items: ['Match', 'Term', 'Bool Query'], level: 'intermediate' },
      { id: '4', title: 'Aggregations', items: ['Metrics', 'Buckets', 'Pipelines'], level: 'intermediate' },
      { id: '5', title: 'Analysis', items: ['Analyzers', 'Tokenizers', 'Filters'], level: 'advanced' },
    ]
  },
  {
    id: 'wordpress',
    title: 'WordPress',
    subtitle: 'CMS development',
    category: 'skill',
    isNew: true,
    color: 'from-blue-700 to-indigo-600',
    steps: [
      { id: '1', title: 'Basics', items: ['Installation', 'Dashboard', 'Content'], level: 'beginner' },
      { id: '2', title: 'Themes', items: ['Theme Structure', 'Templates', 'Customization'], level: 'intermediate' },
      { id: '3', title: 'Plugins', items: ['Plugin API', 'Hooks', 'Shortcodes'], level: 'intermediate' },
      { id: '4', title: 'Custom Types', items: ['Post Types', 'Taxonomies', 'Meta'], level: 'advanced' },
      { id: '5', title: 'REST API', items: ['Endpoints', 'Authentication', 'Headless'], level: 'advanced' },
    ]
  },
  {
    id: 'django',
    title: 'Django',
    subtitle: 'Python web framework',
    category: 'skill',
    isNew: true,
    color: 'from-green-700 to-emerald-600',
    steps: [
      { id: '1', title: 'Basics', items: ['Projects', 'Apps', 'Settings'], level: 'beginner' },
      { id: '2', title: 'Models', items: ['ORM', 'Migrations', 'QuerySets'], level: 'beginner' },
      { id: '3', title: 'Views', items: ['Function-based', 'Class-based', 'Templates'], level: 'intermediate' },
      { id: '4', title: 'Forms', items: ['ModelForms', 'Validation', 'Widgets'], level: 'intermediate' },
      { id: '5', title: 'DRF', items: ['Serializers', 'ViewSets', 'Authentication'], level: 'advanced' },
      { id: '6', title: 'Advanced', items: ['Signals', 'Middleware', 'Caching'], level: 'advanced' },
    ]
  },

  // ============== PROJECT IDEAS ==============
  {
    id: 'frontend-projects',
    title: 'Frontend Projects',
    subtitle: 'Build frontend skills',
    category: 'project',
    color: 'from-blue-500 to-cyan-400',
    steps: [
      { id: '1', title: 'Beginner', items: ['Portfolio Site', 'Todo App', 'Calculator', 'Weather App'], level: 'beginner' },
      { id: '2', title: 'Intermediate', items: ['E-commerce UI', 'Dashboard', 'Chat Interface', 'Blog'], level: 'intermediate' },
      { id: '3', title: 'Advanced', items: ['Collaborative Editor', 'Real-time App', 'Design System'], level: 'advanced' },
    ]
  },
  {
    id: 'backend-projects',
    title: 'Backend Projects',
    subtitle: 'Build backend skills',
    category: 'project',
    color: 'from-green-500 to-emerald-400',
    steps: [
      { id: '1', title: 'Beginner', items: ['REST API', 'URL Shortener', 'Task Manager'], level: 'beginner' },
      { id: '2', title: 'Intermediate', items: ['Auth System', 'File Upload', 'Payment Integration'], level: 'intermediate' },
      { id: '3', title: 'Advanced', items: ['Real-time Chat', 'Job Queue', 'Microservice'], level: 'advanced' },
    ]
  },
  {
    id: 'devops-projects',
    title: 'DevOps Projects',
    subtitle: 'Build DevOps skills',
    category: 'project',
    color: 'from-purple-500 to-pink-400',
    steps: [
      { id: '1', title: 'Beginner', items: ['Dockerize App', 'CI Pipeline', 'Deploy to Cloud'], level: 'beginner' },
      { id: '2', title: 'Intermediate', items: ['Kubernetes Deploy', 'IaC Setup', 'Monitoring Stack'], level: 'intermediate' },
      { id: '3', title: 'Advanced', items: ['GitOps Pipeline', 'Service Mesh', 'Multi-region Deploy'], level: 'advanced' },
    ]
  },

  // ============== BEST PRACTICES ==============
  {
    id: 'aws-best-practices',
    title: 'AWS Best Practices',
    subtitle: 'Cloud architecture patterns',
    category: 'practice',
    color: 'from-orange-500 to-yellow-400',
    steps: [
      { id: '1', title: 'Security', items: ['IAM Policies', 'Least Privilege', 'Encryption'], level: 'beginner' },
      { id: '2', title: 'Cost', items: ['Right-sizing', 'Reserved Instances', 'Spot Instances'], level: 'intermediate' },
      { id: '3', title: 'Reliability', items: ['Multi-AZ', 'Auto Scaling', 'Backup'], level: 'intermediate' },
      { id: '4', title: 'Performance', items: ['Caching', 'CDN', 'Read Replicas'], level: 'advanced' },
    ]
  },
  {
    id: 'api-security-best-practices',
    title: 'API Security',
    subtitle: 'Secure API development',
    category: 'practice',
    color: 'from-red-500 to-rose-400',
    steps: [
      { id: '1', title: 'Authentication', items: ['OAuth 2.0', 'JWT', 'API Keys'], level: 'beginner' },
      { id: '2', title: 'Authorization', items: ['RBAC', 'Scopes', 'Permissions'], level: 'intermediate' },
      { id: '3', title: 'Protection', items: ['Rate Limiting', 'Input Validation', 'CORS'], level: 'intermediate' },
      { id: '4', title: 'Monitoring', items: ['Logging', 'Alerting', 'Anomaly Detection'], level: 'advanced' },
    ]
  },
  {
    id: 'backend-performance',
    title: 'Backend Performance',
    subtitle: 'Optimize server performance',
    category: 'practice',
    color: 'from-green-500 to-emerald-400',
    steps: [
      { id: '1', title: 'Database', items: ['Indexing', 'Query Optimization', 'Connection Pooling'], level: 'beginner' },
      { id: '2', title: 'Caching', items: ['Redis', 'In-memory', 'CDN'], level: 'intermediate' },
      { id: '3', title: 'Async', items: ['Background Jobs', 'Message Queues', 'Event-driven'], level: 'intermediate' },
      { id: '4', title: 'Scaling', items: ['Horizontal', 'Load Balancing', 'Sharding'], level: 'advanced' },
    ]
  },
  {
    id: 'frontend-performance',
    title: 'Frontend Performance',
    subtitle: 'Optimize web performance',
    category: 'practice',
    color: 'from-blue-500 to-cyan-400',
    steps: [
      { id: '1', title: 'Loading', items: ['Code Splitting', 'Lazy Loading', 'Preloading'], level: 'beginner' },
      { id: '2', title: 'Assets', items: ['Image Optimization', 'Compression', 'CDN'], level: 'intermediate' },
      { id: '3', title: 'Rendering', items: ['Virtual DOM', 'Memoization', 'SSR'], level: 'intermediate' },
      { id: '4', title: 'Metrics', items: ['Core Web Vitals', 'Lighthouse', 'RUM'], level: 'advanced' },
    ]
  },
  {
    id: 'code-review-best-practices',
    title: 'Code Review',
    subtitle: 'Effective code review',
    category: 'practice',
    color: 'from-emerald-500 to-green-400',
    steps: [
      { id: '1', title: 'Process', items: ['PR Size', 'Review Time', 'Automation'], level: 'beginner' },
      { id: '2', title: 'Focus Areas', items: ['Logic', 'Readability', 'Tests', 'Security'], level: 'intermediate' },
      { id: '3', title: 'Communication', items: ['Constructive Feedback', 'Questions', 'Suggestions'], level: 'intermediate' },
      { id: '4', title: 'Culture', items: ['Psychological Safety', 'Learning', 'Standards'], level: 'advanced' },
    ]
  },
];

export const categories = [
  { id: 'all', label: 'All', count: roadmaps.length },
  { id: 'role', label: 'Role-based', count: roadmaps.filter(r => r.category === 'role').length },
  { id: 'skill', label: 'Skill-based', count: roadmaps.filter(r => r.category === 'skill').length },
  { id: 'project', label: 'Projects', count: roadmaps.filter(r => r.category === 'project').length },
  { id: 'practice', label: 'Best Practices', count: roadmaps.filter(r => r.category === 'practice').length },
];
