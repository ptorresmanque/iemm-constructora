import type { Lang } from '../i18n/ui';

export type ProjectCategory = 'residential' | 'corporate' | 'industrial' | 'infrastructure';

export type ProjectId = 'alura' | 'techhub' | 'logistica' | 'puente';

export interface Project {
  id: ProjectId;
  category: ProjectCategory;
  titleKey: `projects.${ProjectId}.title`;
  descriptionKey: `projects.${ProjectId}.description`;
  cover: string;
  images: string[];
  span: 'large' | 'small' | 'wide';
}

const PICSUM_BASE = 'https://picsum.photos/seed';
const SIZE = '1600/900';

function picsum(id: ProjectId, n: number): string {
  return `${PICSUM_BASE}/iemm-${id}-${n}/${SIZE}`;
}

export const projects: Project[] = [
  {
    id: 'alura',
    category: 'residential',
    titleKey: 'projects.alura.title',
    descriptionKey: 'projects.alura.description',
    cover: '/images/project-alura.jpg',
    images: [
      '/images/project-alura.jpg',
      picsum('alura', 2),
      picsum('alura', 3),
      picsum('alura', 4),
    ],
    span: 'large',
  },
  {
    id: 'techhub',
    category: 'corporate',
    titleKey: 'projects.techhub.title',
    descriptionKey: 'projects.techhub.description',
    cover: '/images/project-techhub.jpg',
    images: [
      '/images/project-techhub.jpg',
      picsum('techhub', 2),
      picsum('techhub', 3),
      picsum('techhub', 4),
    ],
    span: 'small',
  },
  {
    id: 'logistica',
    category: 'industrial',
    titleKey: 'projects.logistica.title',
    descriptionKey: 'projects.logistica.description',
    cover: '/images/project-logistica.jpg',
    images: [
      '/images/project-logistica.jpg',
      picsum('logistica', 2),
      picsum('logistica', 3),
      picsum('logistica', 4),
    ],
    span: 'small',
  },
  {
    id: 'puente',
    category: 'infrastructure',
    titleKey: 'projects.puente.title',
    descriptionKey: 'projects.puente.description',
    cover: '/images/project-puente.jpg',
    images: [
      '/images/project-puente.jpg',
      picsum('puente', 2),
      picsum('puente', 3),
      picsum('puente', 4),
    ],
    span: 'wide',
  },
];

export function getCategoryLabel(category: ProjectCategory, lang: Lang): string {
  const key = `projects.category.${category}` as const;
  return key;
}
