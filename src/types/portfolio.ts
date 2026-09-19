export interface Metric {
  label: string;
  value: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: 'entry' | 'gateway' | 'compute' | 'cache' | 'database';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  metrics: Metric[];
  architectureOverview: string;
  terraformSnippet: string;
  architectureNodes: ArchitectureNode[];
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  iconName: 'cloud' | 'code' | 'cpu';
  description: string;
  skills: SkillItem[];
}
