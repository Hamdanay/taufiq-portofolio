import type { Project, SkillCategory } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "AI Conversation Agent Prototype (LangFlow & LLM)",
    subtitle: "Alur Kerja Visual Agentic AI & Automasi Pemrosesan Teks",
    category: "Artificial Intelligence & Prototyping",
    description: "Merancang dan mengimplementasikan alur kerja visual LLM (Large Language Model) sederhana menggunakan LangFlow untuk mengeksplorasi automasi pemrosesan teks, eksperimen prompt engineering, dan pemodelan conversational agent.",
    tags: ["LangFlow", "Python", "LLM", "Prompt Engineering", "AI Workflow"],
    metrics: [
      { label: "Method", value: "Visual Pipeline" },
      { label: "Focus", value: "Prompt & LLM Logic" },
      { label: "Status", value: "Functional Prototype" }
    ],
    architectureOverview: "Workflow dibangun secara visual di LangFlow dengan menghubungkan modul Prompt Template, LLM Model Node, dan Output Format Parser untuk menghasilkan respons otomatis yang terstruktur.",
    terraformSnippet: `# LangFlow AI Agent Pipeline Config
workflow:
  name: "Conversational Assistant"
  nodes:
    - id: "prompt_template"
      type: "PromptNode"
      inputs: ["user_query", "context"]
    - id: "llm_engine"
      type: "LLMModel"
      model: "gpt-4o-mini"
    - id: "output_parser"
      type: "JSONOutputParser"`,
    architectureNodes: [
      { id: "user", label: "User Input / Prompt Query", type: "entry" },
      { id: "langflow", label: "LangFlow Visual Pipeline", type: "gateway" },
      { id: "llm", label: "LLM Model Node (Python)", type: "compute" },
      { id: "parser", label: "Structured Response", type: "database" }
    ]
  },
  {
    id: "proj-2",
    title: "Data Center Office Support (Thursina IIBS)",
    subtitle: "Pengalaman Magang Operasional TI & Pemeliharaan Jaringan (Mei - Juni 2023)",
    category: "IT Infrastructure & Data Center",
    description: "Pengalaman magang profesional di Data Center Office Thursina IIBS (Mei - Juni 2023) dalam melakukan monitoring operasional jaringan harian, pemeliharaan server lokal, serta dokumentasi aset infrastruktur TI.",
    tags: ["Data Center Support", "Networking Basics", "IT Maintenance", "Server Monitoring"],
    metrics: [
      { label: "Period", value: "Mei - Juni 2023" },
      { label: "Role", value: "Data Center Office Intern" },
      { label: "Location", value: "Thursina IIBS" }
    ],
    architectureOverview: "Membantu tim TI utama dalam memantau kesehatan server fisik & virtual, merapikan perkabelan jaringan data center, serta melakukan troubleshooting awal perangkat keras komputer kantor.",
    terraformSnippet: `// Operational Maintenance Check (Data Center Office)
const dailyTask = {
  location: "Thursina IIBS Data Center Office",
  period: "Mei 2023 - Juni 2023",
  tasks: [
    "Server Rack Temperature & Power Status Inspection",
    "Local Network Switch & Router Connectivity Check",
    "Hardware Troubleshooting & Office IT Support"
  ]
};`,
    architectureNodes: [
      { id: "office", label: "Office Workstations", type: "entry" },
      { id: "switch", label: "Local Network Switches", type: "gateway" },
      { id: "datacenter", label: "Data Center Rack Servers", type: "compute" },
      { id: "monitoring", label: "System Status Log", type: "database" }
    ]
  },
  {
    id: "proj-3",
    title: "Relational Database & Web UI Design (MySQL & Tailwind)",
    subtitle: "Desain Skema Data Relasional & Antarmuka Responsif",
    category: "Web & Database Development",
    description: "Merancang struktur database relasional menggunakan MySQL serta membangun tampilan web responsif modern menggunakan HTML, Tailwind CSS, dan bantuan tools AI untuk pengkodean efisien.",
    tags: ["MySQL", "Tailwind CSS", "Python Scripting", "AI-Assisted Dev"],
    metrics: [
      { label: "Database", value: "MySQL Relational" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Workflow", value: "AI-Assisted Coding" }
    ],
    architectureOverview: "Frontend dirancang menggunakan utility-first classes dari Tailwind CSS, terhubung dengan backend script Python sederhana dan database MySQL untuk pengolahan data terstruktur.",
    terraformSnippet: `-- MySQL Schema Design & Queries
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT u.name, u.email FROM users u ORDER BY u.created_at DESC;`,
    architectureNodes: [
      { id: "browser", label: "Client Browser (Tailwind UI)", type: "entry" },
      { id: "script", label: "Python App Logic", type: "compute" },
      { id: "db", label: "MySQL Relational DB", type: "database" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Pemrograman & Database",
    iconName: "code",
    description: "Dasar-dasar pemrograman backend dan pengolahan data relasional.",
    skills: [
      { name: "Python (Basic Scripting & AI Prototyping)", level: "Dasar" },
      { name: "MySQL (Relational Database & Queries)", level: "Dasar" },
      { name: "Dasar Algoritma & Struktur Data", level: "Dasar" },
      { name: "JavaScript / TypeScript Basics", level: "Dasar" }
    ]
  },
  {
    title: "Web Front-End & UI Design",
    iconName: "cloud",
    description: "Pembuatan antarmuka web modern dan responsif.",
    skills: [
      { name: "Tailwind CSS (Utility-first Framework)", level: "Dasar-Menengah" },
      { name: "HTML5 & CSS3 Layouting", level: "Dasar-Menengah" },
      { name: "Responsive Web Layouts", level: "Dasar" }
    ]
  },
  {
    title: "AI Workflows & IT Support",
    iconName: "cpu",
    description: "Pengalaman praktis operasional TI dan eksplorasi tools AI modern.",
    skills: [
      { name: "LangFlow (Visual LLM Flow & AI Agents)", level: "Eksplorasi Proyek" },
      { name: "AI-Assisted Development & Prompting", level: "Praktisi Efisien" },
      { name: "Data Center Support (Thursina IIBS)", level: "Magang (2023)" },
      { name: "Dasar Jaringan & Komputer Kantor", level: "Paham Praktis" }
    ]
  }
];
