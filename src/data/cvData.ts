import type { Project, SkillCategory } from '../types/portfolio';

export const CV_PDF_PATH = '/Taufiqurrahman Hamdan Al Ayubi - CV.pdf';
export const CV_PDF_FILENAME = 'Taufiqurrahman Hamdan Al Ayubi - CV.pdf';

export const BIODATA = {
  fullName: 'Taufiqurrahman Hamdan Al Ayubi',
  shortName: 'Taufiq',
  headline: 'Computer Science Student | Binus University',
  phone: '+62 822 8803 9540',
  phoneHref: 'tel:+6282288039540',
  email: 'urrahmantaufiq00@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/taufiqurrahman-hamdan-al-ayubi-48bb44229/',
  linkedinLabel: 'LinkedIn',
  githubUrl: 'https://github.com/Hamdanay',
  githubLabel: 'GitHub',
  location: 'Batam, Indonesia',
  country: 'Indonesia',
};

export const HERO_STATS = [
  { value: '2+', label: 'Tahun Belajar & Praktik' },
  { value: '2', label: 'Proyek Portfolio' },
];

export const HERO_SKILL_TAGS = [
  'Cloud Infrastructure',
  'Web Development',
  'Python',
  'UI/UX Design',
  'LLM & AI Agent',
  'MySQL',
  'GitHub',
  'LinkedIn',
];

export const CV_SUMMARY = `I am an Informatics student at BINUS University focusing on Software Engineering and Cloud Technology. My main interests lie in web development, cloud infrastructure, and applied Deep Learning, supported by certifications in Google Cloud, Large Language Models, AI Agents, and UI/UX Design. I also gained practical experience through a Khidmah program at Thursina IIBS Unit Administration and Data Center (May–June 2023), where I was involved in IT infrastructure and system support operations.

Looking ahead, I aim to deepen my expertise in cloud computing and Deep Learning while expanding real-world software development experience. My goal is to contribute to innovative technology projects and grow as a skilled engineer who creates meaningful impact.`;

export const CV_EDUCATION = [
  {
    period: '09/2024 – Present',
    title: 'Computer Science',
    institution: 'Universitas Bina Nusantara',
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
  },
  {
    period: '06/2026 – Present',
    title: 'Intro to Large Language Models',
    issuer: 'Hacktiv8 Indonesia',
  },
  {
    period: '06/2026 – Present',
    title: 'IT – AI Agent for Programming',
    issuer: 'Hacktiv8 Indonesia',
    credentialId: '01338/H8/CSR/ISUE/V/2026',
  },
];

export const CV_LANGUAGES = [
  { language: 'English', level: 'Intermediate' },
  { language: 'Indonesia', level: 'Native' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Cloud & infrastructure',
    iconName: 'cloud',
    description: 'From the Skills section of my CV.',
    skills: [
      { name: 'Prompt Engineering', level: 'Listed skill' },
      {
        name: 'Cloud Infrastructure (Google Cloud Platform, basic cloud concepts, basic Linux)',
        level: 'Listed skill',
      },
    ],
  },
  {
    title: 'Development & data',
    iconName: 'code',
    description: 'Web, app, database, and programming stack.',
    skills: [
      { name: 'Database: MySQL / PostgreSQL', level: 'Listed skill' },
      {
        name: 'Web & App Development: HTML, CSS, JavaScript, PHP, Laravel, Node.js, REST API',
        level: 'Listed skill',
      },
      { name: 'Programming: Python, C, PHP, JavaScript', level: 'Listed skill' },
      { name: 'Basic UI/UX Design', level: 'Listed skill' },
    ],
  },
  {
    title: 'Tools',
    iconName: 'cpu',
    description: 'Software I use for building and design work.',
    skills: [
      {
        name: 'Visual Studio Code, GitHub, Canva, Figma, LLM tools',
        level: 'Listed skill',
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Cloud Infrastructure Simulation',
    subtitle: 'Independent tech project · May 2026',
    category: 'Cloud infrastructure',
    description:
      'Designed a comprehensive cloud infrastructure architecture diagram for a supermarket self-checkout system.',
    tags: ['Cloud architecture', 'System design', 'Self-checkout', 'Infrastructure diagram'],
    metrics: [
      { label: 'Period', value: '05/2026' },
      { label: 'Type', value: 'Independent project' },
      { label: 'Focus', value: 'Architecture diagram' },
    ],
    architectureOverview:
      'End-to-end cloud layout for a supermarket self-checkout flow: client terminals, application services, and backing data stores documented as an infrastructure diagram.',
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
      { id: 'gateway', label: 'API / integration layer', type: 'gateway' },
      { id: 'services', label: 'Application services', type: 'compute' },
      { id: 'data', label: 'Database & storage', type: 'database' },
    ],
  },
  {
    id: 'proj-2',
    title: 'Data Center & Administration Intern (Program Khidmah)',
    subtitle: 'Thursina International Islamic Boarding School (IIBS) · May–June 2023',
    category: 'Experience',
    description:
      'Responsible for sorting and organizing student graduation data for both Junior High School (SMP) and Senior High School (SMA) levels in preparation for the graduation ceremony. Assisted in data verification, administration support, and ensuring accurate records within the school’s data center operations.',
    tags: ['Data center', 'Administration', 'Data verification', 'Khidmah'],
    metrics: [
      { label: 'Period', value: '05/2023 – 06/2023' },
      { label: 'Role', value: 'Data Center & Administration Intern' },
      { label: 'Location', value: 'Thursina IIBS' },
    ],
    architectureOverview:
      'Supported Unit Administration and Data Center: graduation datasets for SMP and SMA, verification workflows, and accurate records for ceremony preparation.',
    terraformSnippet: `// Khidmah — data center & administration (May–June 2023)
const responsibilities = [
  "Sort & organize SMP/SMA graduation data",
  "Verify records before graduation ceremony",
  "Administration support in data center operations",
];`,
    architectureNodes: [
      { id: 'records', label: 'Graduation datasets (SMP / SMA)', type: 'entry' },
      { id: 'verify', label: 'Data verification', type: 'gateway' },
      { id: 'admin', label: 'Administration support', type: 'compute' },
      { id: 'dc', label: 'Data center records', type: 'database' },
    ],
  },
];
