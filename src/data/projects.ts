import projectScans from '@/assets/project-scans.jpg';
import projectPerpetual from '@/assets/project-perpetual.jpg';
import projectTypography from '@/assets/project-typography.jpg';
import projectBook from '@/assets/project-book.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  date?: string;
  image: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: 'scans',
    title: 'Index of Indices',
    subtitle: 'of Lists and Links',
    date: 'Dec. 2024',
    image: projectScans,
    description: 'An index of other indices or collections of references and tools about and for graphic design, type design, &c.',
  },
  {
    id: 'perpetual',
    title: 'Perpetual',
    subtitle: 'iOS Application',
    date: 'Feb. 2025',
    image: projectPerpetual,
    description: 'An iOS app that translates the passage of time into a clear, intuitive visual format.',
  },
  {
    id: 'typography',
    title: 'St. Martin Stencil',
    subtitle: 'Type Design',
    date: 'Nov. 2024',
    image: projectTypography,
    description: 'The Stencil Type That Wasn\'t. A typeface inspired by historical stencil letterforms.',
  },
  {
    id: 'book',
    title: 'Editorial Works',
    subtitle: 'Book Design',
    date: 'Oct. 2024',
    image: projectBook,
    description: 'A collection of editorial and book design projects exploring typography and layout.',
  },
];
