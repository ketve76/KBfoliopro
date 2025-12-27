export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  images?: string[]; // Support for multiple gallery images
  link: string;
  featured: boolean;
  features?: string[]; // New field for detailed modal
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  details?: string[]; // New field for detailed modal
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}