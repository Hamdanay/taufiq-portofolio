import type { Project, SkillCategory } from '../types/portfolio';

export const CV_PDF_PATH = '/Taufiqurrahman Hamdan Al Ayubi - CV.pdf';
export const CV_PDF_FILENAME = 'Taufiqurrahman Hamdan Al Ayubi - CV.pdf';

export const BIODATA = {
  fullName: 'Taufiqurrahman Hamdan Al Ayubi',
  shortName: 'Taufiq',
  headline: 'Mahasiswa Ilmu Komputer · Universitas Bina Nusantara',
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
  { value: '3', label: 'Sertifikat teknis (Google & Hacktiv8)' },
  { value: '2 bln', label: 'Magang Khidmah · Thursina IIBS 2023' },
  { value: '6+', label: 'Stack inti: web, cloud, dan AI' },
];

export const HERO_SKILL_TAGS = [
  'Infrastruktur cloud',
  'Pengembangan web',
  'Python',
  'Desain UI/UX',
  'LLM & agen AI',
  'MySQL',
  'GitHub',
  'LinkedIn',
];

export const CV_SUMMARY = `Saya mahasiswa Ilmu Komputer di Universitas Bina Nusantara dengan fokus Software Engineering dan teknologi cloud. Minat utama saya pada pengembangan web, infrastruktur cloud, dan penerapan deep learning, didukung sertifikasi Google Cloud, Large Language Models, AI Agents, serta UI/UX Design.

Pengalaman praktis saya meliputi Program Khidmah di Unit Administrasi dan Data Center Thursina IIBS (Mei–Juni 2023), termasuk dukungan infrastruktur IT dan operasional sistem.

Ke depan, saya ingin memperdalam cloud computing dan deep learning sambil menambah pengalaman pengembangan software di dunia nyata, serta berkontribusi pada proyek teknologi yang berdampak.`;

export const STACK_EXPERTISE = [
  {
    id: 'cloud',
    title: 'Cloud & infrastruktur',
    summary: 'Perancangan diagram arsitektur dan fondasi GCP dari sertifikasi Google.',
    items: ['Google Cloud Platform', 'Konsep cloud & Linux dasar', 'Prompt engineering'],
  },
  {
    id: 'web',
    title: 'Pengembangan web',
    summary: 'Stack full-stack dari CV untuk API, backend, dan antarmuka.',
    items: ['HTML, CSS, JavaScript', 'PHP, Laravel, Node.js', 'REST API & MySQL'],
  },
  {
    id: 'ai',
    title: 'AI & produktivitas',
    summary: 'Eksplorasi LLM dan alat AI untuk alur kerja pemrograman.',
    items: ['Large Language Models', 'AI agent untuk programming', 'Figma & alat desain'],
  },
];

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
    period: '09/2026 – sekarang',
    title: 'Cloud Computing Foundations Certificate',
    issuer: 'Google',
    credentialId: '725cc765-5ba3-4539-8a06-1b7d5784225a',
    verifyUrl: 'https://cloud.google.com/learn/certification',
  },
  {
    period: '06/2026 – sekarang',
    title: 'Intro to Large Language Models',
    issuer: 'Hacktiv8 Indonesia',
    verifyUrl: 'https://hacktiv8.com/',
  },
  {
    period: '06/2026 – sekarang',
    title: 'IT – AI Agent for Programming',
    issuer: 'Hacktiv8 Indonesia',
    credentialId: '01338/H8/CSR/ISUE/V/2026',
    verifyUrl: 'https://hacktiv8.com/',
  },
];

export const CV_LANGUAGES = [
  { language: 'Bahasa Indonesia', level: 'Bahasa ibu' },
  { language: 'Bahasa Inggris', level: 'Menengah' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Cloud & infrastruktur',
    iconName: 'cloud',
    description: 'Keahlian dari bagian Skills pada CV.',
    skills: [
      { name: 'Prompt engineering', level: 'Tercantum di CV' },
      {
        name: 'Infrastruktur cloud (GCP, konsep cloud dasar, Linux dasar)',
        level: 'Tercantum di CV',
      },
    ],
  },
  {
    title: 'Pengembangan & data',
    iconName: 'code',
    description: 'Web, aplikasi, basis data, dan bahasa pemrograman.',
    skills: [
      { name: 'Basis data: MySQL / PostgreSQL', level: 'Tercantum di CV' },
      {
        name: 'Web & aplikasi: HTML, CSS, JavaScript, PHP, Laravel, Node.js, REST API',
        level: 'Tercantum di CV',
      },
      { name: 'Pemrograman: Python, C, PHP, JavaScript', level: 'Tercantum di CV' },
      { name: 'Desain UI/UX dasar', level: 'Tercantum di CV' },
    ],
  },
  {
    title: 'Alat bantu',
    iconName: 'cpu',
    description: 'Perangkat lunak untuk membangun dan mendesain.',
    skills: [
      {
        name: 'Visual Studio Code, GitHub, Canva, Figma, alat LLM',
        level: 'Tercantum di CV',
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
