export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  demoUrl: string;
  sourceCodeUrl?: string; // If undefined, displays "Source code not added"
  category: 'game' | 'webapp' | 'tool';
  tags: string[];
  features?: string[];
}

export interface SkillItem {
  name: string;
  category: 'core' | 'framework' | 'styling' | 'tool';
  description: string;
  highlight: string;
  iconName: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}
