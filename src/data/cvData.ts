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

export const CV_SUMMARY = `Computer Science student at BINUS (software engineering & cloud). Interested in web development, cloud infrastructure, and practical AI tools.

Khidmah internship (Thursina IIBS, 2023): graduation data management and verification in a data-center/administration unit—building habits in accuracy, process discipline, and IT operations support alongside my technical project and certification work.`;

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
  },
  {
    period: '06/2020 – 07/2023',
    title: 'Science Major',
    institution: 'Thursina IIBS',
    detail: 'Senior High School',
  },
];

export const CV_CERTIFICATES = [
  {
    period: '09/2026 – Present',
    title: 'Cloud Computing Foundations Certificate',
    issuer: 'Google',
    credentialId: '725cc765-5ba3-4539-8a06-1b7d5784225a',
    verifyUrl: 'https://cloud.google.com/learn/certification',
  },
  {
    period: '06/2026 – Present',
    title: 'Intro to Large Language Models',
    issuer: 'Hacktiv8 Indonesia',
    verifyUrl: 'https://hacktiv8.com/',
  },
  {
    period: '06/2026 – Present',
    title: 'IT – AI Agent for Programming',
    issuer: 'Hacktiv8 Indonesia',
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
    id: 'proj-2',
    title: 'Data center & administration internship (Khidmah)',
    subtitle: 'Thursina IIBS · May–June 2023',
    category: 'Experience',
    description:
      'Organized and verified junior/senior high school graduation data, with administration support in the data center unit ahead of graduation ceremonies.',
    highlights: [
      'Context: graduation data preparation for junior and senior high school.',
      'Role: data handling, verification, and administration support.',
      'Outcome: accurate, ceremony-ready records.',
    ],
    tags: ['Data center', 'Administration', 'Data verification', 'Khidmah'],
    metrics: [
      { label: 'Period', value: '05/2023 – 06/2023' },
      { label: 'Role', value: 'Data center & administration intern' },
      { label: 'Location', value: 'Thursina IIBS' },
    ],
    architectureOverview:
      'Workflow: graduation datasets → verification → administration support → data-center records ready for the ceremony.',
    terraformSnippet: `// Khidmah — data center & administration (May–June 2023)
const responsibilities = [
  "Sort & organize SMP/SMA graduation data",
  "Verify records before graduation ceremony",
  "Administration support in data center operations",
];`,
    architectureNodes: [
      { id: 'records', label: 'Graduation datasets (junior / senior high)', type: 'entry' },
      { id: 'verify', label: 'Data verification', type: 'gateway' },
      { id: 'admin', label: 'Administration support', type: 'compute' },
      { id: 'dc', label: 'Data center records', type: 'database' },
    ],
  },
];
