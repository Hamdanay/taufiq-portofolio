export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  program?: string;
  location?: string;
  summary: string;
  highlights: string[];
  tags: string[];
}
