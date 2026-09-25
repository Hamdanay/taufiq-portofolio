import type { Project } from '../types/portfolio';

export const CV_PDF_PATH = '/Taufiqurrahman Hamdan Al Ayubi - CV.pdf';
export const CV_PDF_FILENAME = 'Taufiqurrahman Hamdan Al Ayubi - CV.pdf';

export const BIODATA = {
  fullName: 'Taufiqurrahman Hamdan Al Ayubi',
  shortName: 'Taufiq',
  headline: 'Mahasiswa Ilmu Komputer · Universitas Bina Nusantara',
  tagline:
    'Mencari peluang magang atau peran junior di cloud, pengembangan web, dan eksplorasi AI — siap belajar cepat dan berkontribusi pada tim.',
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
  { value: '2', label: 'Proyek di portofolio' },
];

export const TOOL_SKILLS = [
  'Visual Studio Code',
  'GitHub',
  'Figma',
  'Canva',
  'Alat LLM',
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

export const CV_SUMMARY = `Saya mahasiswa Ilmu Komputer di BINUS dengan fokus Software Engineering dan cloud. Minat utama pada web, infrastruktur cloud, dan AI, didukung sertifikasi Google Cloud, LLM, AI Agents, serta UI/UX.

Pengalaman praktis meliputi Program Khidmah di Unit Administrasi dan Data Center Thursina IIBS (Mei–Juni 2023): dukungan infrastruktur IT dan operasional sistem.`;

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
    summary: 'API, backend, dan antarmuka untuk aplikasi web.',
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
    period: '09/2024 – sekarang',
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

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Simulasi infrastruktur cloud',
    subtitle: 'Proyek mandiri · Mei 2026',
    category: 'Infrastruktur cloud',
    description:
      'Merancang diagram arsitektur cloud untuk sistem self-checkout supermarket, dari terminal di toko hingga layanan aplikasi dan penyimpanan data.',
    highlights: [
      'Konteks: alur checkout mandiri di supermarket skala menengah.',
      'Peran: perancang arsitektur dan dokumentasi infrastruktur.',
      'Hasil: diagram end-to-end (klien, API, layanan, database).',
    ],
    tags: ['Arsitektur cloud', 'Desain sistem', 'Self-checkout', 'Diagram infrastruktur'],
    metrics: [
      { label: 'Periode', value: '05/2026' },
      { label: 'Jenis', value: 'Proyek mandiri' },
      { label: 'Fokus', value: 'Diagram arsitektur' },
    ],
    architectureOverview:
      'Alur cloud untuk self-checkout: terminal di toko, lapisan API/integrasi, layanan aplikasi, serta database transaksi dan katalog — divisualkan dalam satu diagram infrastruktur.',
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
      { id: 'client', label: 'Terminal self-checkout', type: 'entry' },
      { id: 'gateway', label: 'Lapisan API & integrasi', type: 'gateway' },
      { id: 'services', label: 'Layanan aplikasi', type: 'compute' },
      { id: 'data', label: 'Database & penyimpanan', type: 'database' },
    ],
  },
  {
    id: 'proj-2',
    title: 'Magang data center & administrasi (Khidmah)',
    subtitle: 'Thursina IIBS · Mei–Juni 2023',
    category: 'Pengalaman',
    description:
      'Mengelola dan merapikan data kelulusan siswa SMP/SMA, verifikasi berkas, serta dukungan administrasi di unit data center menjelang acara wisuda.',
    highlights: [
      'Konteks: persiapan data kelulusan SMP dan SMA.',
      'Peran: pengelolaan data, verifikasi, dan dukungan administrasi.',
      'Hasil: data siap pakai dan akurat untuk upacara kelulusan.',
    ],
    tags: ['Data center', 'Administrasi', 'Verifikasi data', 'Khidmah'],
    metrics: [
      { label: 'Periode', value: '05/2023 – 06/2023' },
      { label: 'Peran', value: 'Magang data center & administrasi' },
      { label: 'Lokasi', value: 'Thursina IIBS' },
    ],
    architectureOverview:
      'Alur kerja: kumpulan data kelulusan → verifikasi → dukungan administrasi → arsip data center yang siap digunakan untuk wisuda.',
    terraformSnippet: `// Khidmah — data center & administration (May–June 2023)
const responsibilities = [
  "Sort & organize SMP/SMA graduation data",
  "Verify records before graduation ceremony",
  "Administration support in data center operations",
];`,
    architectureNodes: [
      { id: 'records', label: 'Data kelulusan SMP / SMA', type: 'entry' },
      { id: 'verify', label: 'Verifikasi data', type: 'gateway' },
      { id: 'admin', label: 'Dukungan administrasi', type: 'compute' },
      { id: 'dc', label: 'Arsip data center', type: 'database' },
    ],
  },
];
