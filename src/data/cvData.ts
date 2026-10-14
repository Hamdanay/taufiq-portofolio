import type { ExperienceEntry } from '../types/experience';
import type { Project } from '../types/portfolio';

export const CV_PDF_PATH = '/Taufiqurrahman Hamdan Al Ayubi - CV.pdf';
export const CV_PDF_FILENAME = 'Taufiqurrahman Hamdan Al Ayubi - CV.pdf';

export const BIODATA = {
  fullName: 'Taufiqurrahman Hamdan Al Ayubi',
  shortName: 'Taufiq',
  headline: 'Computer Science Student at Bina Nusantara University',
  tagline:
    'Exploring web development, cloud fundamentals, and practical AI tools. Open for internship opportunities in Bandung, Jakarta, or remote.',
  email: 'urrahmantaufiq00@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/taufiqurrahman-hamdan-al-ayubi-48bb44229/',
  linkedinLabel: 'LinkedIn',
  githubUrl: 'https://github.com/Hamdanay',
  githubLabel: 'GitHub',
  location: 'Bandung, Indonesia (Open to Remote / Relocation)',
  country: 'Indonesia',
};

export const CORE_TECH_STACK = [
  'React',
  'Tailwind CSS',
  'Python',
  'MySQL',
  'Docker',
  'Git & GitHub',
];

export const CV_SUMMARY = `Computer Science student at Bina Nusantara University (Binusian 28, Semester 5). Passionate about web development, relational databases, and cloud fundamentals. Focused on building reliable software with clean UI and modern developer workflows.`;

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'exp-khidmah',
    role: 'IT Administration Intern',
    organization: 'Thursina IIBS',
    period: 'May – June 2023',
    program: 'Khidmah Internship Program',
    location: 'East Java, Indonesia',
    summary:
      'Supported the school administration and data office in organizing, retrieving, and verifying student academic records for Junior High (SMP) and Senior High (SMA) graduation.',
    highlights: [
      'Retrieved, cross-checked, and verified academic record documents for SMP and SMA graduation candidates.',
      'Maintained structured archives to ensure complete student graduation data readiness.',
      'Assisted administration staff with daily student record organization and document workflows.',
    ],
    tags: ['IT Administration', 'Academic Records', 'Document Verification', 'Data Management', 'Khidmah Program'],
  },
];

export const SKILL_GROUPS = [
  {
    title: 'Languages & Database',
    skills: ['Python', 'MySQL', 'JavaScript', 'TypeScript (Basics)', 'SQL Queries'],
  },
  {
    title: 'Web & Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML5 & CSS3', 'Responsive UI', 'Vite'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git & GitHub', 'Docker (Basics)', 'GitHub Actions', 'VS Code', 'Figma', 'LangFlow'],
  },
];

export const CV_EDUCATION = [
  {
    period: '2024 – Present',
    title: 'Bachelor of Computer Science (Informatika)',
    institution: 'Bina Nusantara University',
    detail: 'Undergraduate Student · Binusian 28',
    score: 'GPA 3.55',
  },
  {
    period: '2020 – 2023',
    title: 'Natural Sciences (IPA)',
    institution: 'Thursina IIBS',
    detail: 'Senior High School',
    score: 'Diploma Grade 91.3',
  },
];

export const CV_CERTIFICATES = [
  {
    period: 'Issued Sep 2024',
    title: 'Cloud Computing Foundations Certificate',
    issuer: 'Google Cloud',
    imageUrl: '/certs/google-cloud-foundations.png',
    credentialId: '725cc765-5ba3-4539-8a06-1b7d5784225a',
    verifyUrl: 'https://cloud.google.com/learn/certification',
  },
  {
    period: 'Issued Jun 2024',
    title: 'Intro to Large Language Models',
    issuer: 'Hacktiv8 Indonesia',
    imageUrl: '/certs/hacktiv8-llm.jpg',
    verifyUrl: 'https://hacktiv8.com/',
  },
  {
    period: 'Issued Jun 2024',
    title: 'IT – AI Agent for Programming',
    issuer: 'Hacktiv8 Indonesia',
    imageUrl: '/certs/hacktiv8-ai-agent.jpg',
    credentialId: '01338/H8/CSR/ISUE/V/2026',
    verifyUrl: 'https://hacktiv8.com/',
  },
];

export const CV_LANGUAGES = [
  { language: 'Indonesian', level: 'Native' },
  { language: 'English', level: 'Intermediate' },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Cloud Infrastructure Simulation',
    subtitle: 'System Architecture Design · 2024',
    category: 'Cloud Infrastructure',
    description:
      'Designed a cloud architecture topology for a supermarket self-checkout system, mapping end-to-end data flows from in-store terminals to application services and persistent databases.',
    highlights: [
      'Modeled self-checkout flow across client terminals, API gateway, and transactional storage.',
      'Structured infrastructure documentation focusing on service decoupling and high availability.',
      'Created clear visual node topologies for technical communication.',
    ],
    tags: ['Cloud Architecture', 'System Design', 'Self-Checkout Flow', 'Topology Diagram'],
    metrics: [
      { label: 'Type', value: 'Architecture Design' },
      { label: 'Focus', value: 'System Decoupling' },
      { label: 'Domain', value: 'Retail Self-Checkout' },
    ],
    architectureOverview:
      'Data flow: In-store self-checkout terminals communicate via HTTPS to the API integration layer, which delegates transactions to compute microservices backed by database persistence.',
    architectureNodes: [
      { id: 'client', label: 'Self-checkout terminals', type: 'entry' },
      { id: 'gateway', label: 'API & Integration Layer', type: 'gateway' },
      { id: 'services', label: 'Application Services', type: 'compute' },
      { id: 'data', label: 'Database & Storage', type: 'database' },
    ],
  },
  {
    id: 'proj-booknest',
    title: 'BookNest — Book Collection Manager',
    subtitle: 'Full-Stack Web Application · 2026',
    category: 'Full-Stack Web',
    description:
      'A web application to manage physical book collections: tracking titles, copies, categories, shelves, condition status, and covers. Features a responsive React SPA deployed on Vercel with a serverless Express API and SQLite database.',
    highlights: [
      'Full-stack development: responsive UI design, RESTful API endpoints, and database schema.',
      'Features include ISBN validation, paginated lists with debounced search, book condition tracking, and cover uploads.',
      'Designed with a cohesive forest-themed design system and clean user workflows.',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'SQLite', 'Vercel'],
    metrics: [
      { label: 'Architecture', value: 'SPA + Serverless API' },
      { label: 'Frontend', value: 'React & Tailwind' },
      { label: 'Backend', value: 'Express & SQLite' },
    ],
    liveUrl: 'https://frontend-tau-eight-58.vercel.app/',
    repoUrl: 'https://github.com/Hamdanay/BookNest',
    readmeUrl: 'https://github.com/Hamdanay/BookNest#readme',
    setupNote:
      'Clone repository, run npm install in both backend and frontend directories, then npm run dev.',
    demoNote:
      'Live demo uses Vercel serverless functions. Initial request might experience a brief cold start.',
    screenshots: [
      {
        src: '/projects/booknest/dashboard.jpg',
        alt: 'BookNest inventory dashboard with stats and book collection table',
        caption: 'Inventory dashboard & collection view',
      },
      {
        src: '/projects/booknest/add-book.png',
        alt: 'BookNest add book form modal with ISBN and bibliographic fields',
        caption: 'Book addition & validation form',
      },
    ],
    architectureOverview:
      'React + Vite SPA on Vercel communicates with serverless Express routes. Business logic handles validation, search debouncing, and persists catalog and shelf records in SQLite.',
    architectureNodes: [
      { id: 'spa', label: 'React SPA (Vercel CDN)', type: 'entry' },
      { id: 'api', label: 'Express Serverless API', type: 'gateway' },
      { id: 'logic', label: 'Validation & Book Operations', type: 'compute' },
      { id: 'sqlite', label: 'SQLite Persistence', type: 'database' },
    ],
  },
  {
    id: 'proj-booknest-ops',
    title: 'BookNest — CI/CD, Container & Backup Pipeline',
    subtitle: 'DevOps & Reliability Extension · 2026',
    category: 'DevOps & Reliability',
    description:
      'Production hardening for BookNest: Docker Compose multi-service containerization (Nginx + Node + SQLite volumes), GitHub Actions CI pipeline, and automated SQLite backup scripts with Telegram off-site alerts and health check verification.',
    highlights: [
      'Containerized deployment using Docker Compose with Nginx reverse proxy.',
      'Automated GitHub Actions CI running unit tests and multi-stage Docker build verification on push to main.',
      'Automated SQLite backup script featuring PRAGMA integrity checks, 7-day local retention, and off-site backup upload via Telegram bot.',
      'Documented disaster recovery restore workflow verified with /api/health endpoint.',
    ],
    tags: [
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Nginx',
      'SQLite',
      'Bash / PowerShell',
      'Disaster Recovery',
    ],
    metrics: [
      { label: 'CI Pipeline', value: 'GitHub Actions' },
      { label: 'Container', value: 'Docker Compose' },
      { label: 'Off-site Backup', value: 'Telegram Bot API' },
    ],
    repoUrl: 'https://github.com/Hamdanay/BookNest',
    readmeUrl: 'https://github.com/Hamdanay/BookNest#cicd-pipeline-github-actions',
    setupNote:
      'From repo root: run docker compose up -d. Backup scripts can be run manually or via scheduled cron.',
    screenshots: [
      {
        src: '/projects/booknest-ops/architecture.png',
        alt: 'BookNest system architecture: Docker, Nginx reverse proxy, CI/CD, and 3-2-1 backup strategy',
        caption: 'System architecture & backup topology',
      },
      {
        src: '/projects/booknest-ops/github-actions.jpg',
        alt: 'Successful GitHub Actions workflow for BookNest unit tests and Docker image build',
        caption: 'GitHub Actions automated CI pipeline',
      },
      {
        src: '/projects/booknest-ops/telegram-backup.jpg',
        alt: 'BookNest backup script success with Telegram text alert and database file upload',
        caption: 'Automated backup & Telegram notification',
      },
      {
        src: '/projects/booknest-ops/restore-docker.jpg',
        alt: 'Database restore success in terminal with healthy Docker Compose services',
        caption: 'Disaster recovery restore verification',
      },
    ],
    architectureOverview:
      'Code push triggers GitHub Actions for test & build validation. Production stack runs behind Nginx reverse proxy to Express and SQLite volumes. Backup scripts perform integrity checks and upload database snapshots off-site.',
    architectureNodes: [
      { id: 'git', label: 'Push to Main → GitHub Actions', type: 'entry' },
      { id: 'ci', label: 'Test & Docker Build Verification', type: 'gateway' },
      { id: 'stack', label: 'Nginx + Express + SQLite Volume', type: 'compute' },
      { id: 'backup', label: 'Local Retention & Telegram Backup', type: 'database' },
    ],
  },
];
