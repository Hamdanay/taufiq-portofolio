import type { ExperienceEntry } from '../types/experience';
import type { Project } from '../types/portfolio';

export const CV_PDF_PATH = '/Taufiqurrahman Hamdan Al Ayubi - CV.pdf';
export const CV_PDF_FILENAME = 'Taufiqurrahman Hamdan Al Ayubi - CV.pdf';

export const BIODATA = {
  fullName: 'Taufiqurrahman Hamdan Al Ayubi',
  shortName: 'Taufiq',
  headline: 'Computer Science Student · Bina Nusantara University',
  tagline:
    'Seeking cloud and web development internships — ready to learn quickly and contribute on real teams.',
  email: 'urrahmantaufiq00@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/taufiqurrahman-hamdan-al-ayubi-48bb44229/',
  linkedinLabel: 'LinkedIn',
  githubUrl: 'https://github.com/Hamdanay',
  githubLabel: 'GitHub',
  location: 'Batam, Indonesia',
  country: 'Indonesia',
};

export const HERO_STATS = [
  { value: '3', label: 'Technical certs (Google & Hacktiv8)' },
  { value: '2 mo', label: 'Khidmah internship · Thursina IIBS 2023' },
  { value: '2', label: 'Portfolio projects' },
];

export const TOOL_SKILLS = [
  'Visual Studio Code',
  'GitHub',
  'Figma',
  'Canva',
  'LLM tools',
];

export const HERO_SKILL_TAGS = [
  'Cloud infrastructure',
  'Web development',
  'Python',
  'UI/UX design',
  'LLM & AI agents',
  'MySQL',
  'GitHub',
  'LinkedIn',
];

export const CV_SUMMARY = `Computer Science student at BINUS (software engineering & cloud). Interested in web development, cloud infrastructure, and practical AI tools.`;

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'exp-khidmah',
    role: 'Data center & administration intern',
    organization: 'Thursina IIBS',
    period: 'May – June 2023',
    program: 'Khidmah internship',
    location: 'Indonesia',
    summary:
      'Supported graduation data preparation for junior and senior high school and assisted the data center and administration unit ahead of graduation ceremonies.',
    highlights: [
      'Organized and verified SMP/SMA graduation records before ceremonies.',
      'Handled data with accuracy and consistent process discipline.',
      'Provided administration support within data center operations.',
    ],
    tags: ['Data center', 'Administration', 'Data verification', 'Khidmah'],
  },
];

export const STACK_EXPERTISE = [
  {
    id: 'cloud',
    title: 'Cloud & infrastructure',
    summary: 'Architecture diagrams and GCP foundations from Google certification.',
    items: ['Google Cloud Platform', 'Cloud concepts & basic Linux', 'Prompt engineering'],
  },
  {
    id: 'web',
    title: 'Web development',
    summary: 'APIs, backends, and interfaces for web applications.',
    items: ['HTML, CSS, JavaScript', 'PHP, Laravel, Node.js', 'REST API & MySQL'],
  },
  {
    id: 'ai',
    title: 'AI & productivity',
    summary: 'Exploring LLMs and AI tools for programming workflows.',
    items: ['Large Language Models', 'AI agents for programming', 'Figma & design tools'],
  },
];

export const CV_EDUCATION = [
  {
    period: '09/2024 – Present',
    title: 'Computer Science',
    institution: 'Bina Nusantara University',
    detail: 'Bachelor',
    score: 'GPA 3.55',
  },
  {
    period: '06/2020 – 07/2023',
    title: 'Science Major',
    institution: 'Thursina IIBS',
    detail: 'Senior High School',
    score: 'Diploma grade 91.3',
  },
];

export const CV_CERTIFICATES = [
  {
    period: '09/2026 – Present',
    title: 'Cloud Computing Foundations Certificate',
    issuer: 'Google',
    imageUrl: '/certs/google-cloud-foundations.png',
    credentialId: '725cc765-5ba3-4539-8a06-1b7d5784225a',
    verifyUrl: 'https://cloud.google.com/learn/certification',
  },
  {
    period: '06/2026 – Present',
    title: 'Intro to Large Language Models',
    issuer: 'Hacktiv8 Indonesia',
    imageUrl: '/certs/hacktiv8-llm.jpg',
    verifyUrl: 'https://hacktiv8.com/',
  },
  {
    period: '06/2026 – Present',
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
    title: 'Cloud infrastructure simulation',
    subtitle: 'Independent project · May 2026',
    category: 'Cloud infrastructure',
    description:
      'Designed a cloud architecture diagram for a supermarket self-checkout system—from in-store terminals to application services and data storage.',
    highlights: [
      'Context: self-checkout flow for a mid-size supermarket.',
      'Role: architecture design and infrastructure documentation.',
      'Outcome: end-to-end diagram (clients, API, services, database).',
    ],
    tags: ['Cloud architecture', 'System design', 'Self-checkout', 'Infrastructure diagram'],
    metrics: [
      { label: 'Period', value: '05/2026' },
      { label: 'Type', value: 'Independent project' },
      { label: 'Focus', value: 'Architecture diagram' },
    ],
    architectureOverview:
      'Cloud flow for self-checkout: store terminals, API/integration layer, application services, and transactional/catalog databases—documented in a single infrastructure diagram.',
    terraformSnippet: `# Cloud infrastructure simulation — self-checkout (conceptual)
components:
  - id: checkout_client
    role: "In-store self-checkout terminals"
  - id: api_gateway
    role: "Entry point for checkout & payment APIs"
  - id: app_services
    role: "Business logic & integration layer"
  - id: database
    role: "Transactional & catalog data"`,
    architectureNodes: [
      { id: 'client', label: 'Self-checkout terminals', type: 'entry' },
      { id: 'gateway', label: 'API & integration layer', type: 'gateway' },
      { id: 'services', label: 'Application services', type: 'compute' },
      { id: 'data', label: 'Database & storage', type: 'database' },
    ],
  },
  {
    id: 'proj-booknest',
    title: 'BookNest — Book Collection Manager',
    subtitle: 'Independent full-stack project · 2026',
    category: 'Full-stack web',
    description:
      'A web app to manage a physical book collection—titles, copies, categories, shelves, condition status, and cover images. React SPA on Vercel with a serverless Express API and SQLite, focused on a consistent forest-themed UI and clear admin workflows (inventory only, not a store or lending system).',
    highlights: [
      'Context: personal or small-team library inventory and shelf tracking.',
      'Role: full-stack — UI design, REST API, database schema, and deployment.',
      'Features: ISBN validation, paginated lists with debounced search, book history, cover upload, condition/status rules, cohesive UI theme.',
      'Outcome: live demo and open-source repo with end-to-end collection management.',
    ],
    tags: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'SQLite',
      'Vercel',
    ],
    metrics: [
      { label: 'Period', value: '2026' },
      { label: 'Type', value: 'Independent project' },
      { label: 'Stack', value: 'SPA + serverless API' },
    ],
    liveUrl: 'https://frontend-tau-eight-58.vercel.app/',
    repoUrl: 'https://github.com/Hamdanay/BookNest',
    readmeUrl: 'https://github.com/Hamdanay/BookNest#readme',
    setupNote:
      'Clone the repo, run npm install in both backend and frontend, then npm run dev in each (see README).',
    demoNote:
      'The online demo uses the Vercel-hosted API. Demo data may reset when the serverless instance is idle.',
    screenshots: [
      {
        src: '/projects/booknest/dashboard.jpg',
        alt: 'BookNest inventory dashboard with stats and charts',
        caption: 'Inventory dashboard',
      },
      {
        src: '/projects/booknest/add-book.png',
        alt: 'BookNest add book form with bibliographic fields',
        caption: 'Add book workflow',
      },
    ],
    architectureOverview:
      'React + Vite SPA (static on Vercel) calls serverless Express routes; business logic persists catalog, copies, shelves, and uploads in SQLite.',
    terraformSnippet: `// BookNest — client → API → SQLite (simplified)
// Frontend: React + Vite + Tailwind (Vercel SPA)
// API: Express on Vercel serverless functions

app.get('/api/books', paginateWithDebounce);
app.post('/api/books', validateIsbn, createBookWithHistory);
app.post('/api/uploads/cover', uploadCover);`,
    architectureNodes: [
      { id: 'spa', label: 'React SPA (Vercel static)', type: 'entry' },
      { id: 'api', label: 'Express serverless API', type: 'gateway' },
      { id: 'logic', label: 'Validation, pagination, history', type: 'compute' },
      { id: 'sqlite', label: 'SQLite persistence', type: 'database' },
    ],
  },
];
