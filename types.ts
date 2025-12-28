export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  WORK = 'work',
  ACHIEVEMENTS = 'achievements',
  CONTACT = 'contact'
}