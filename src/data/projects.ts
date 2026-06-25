import type { Lang } from '../i18n/ui';

export type ProjectCategory = 'repair' | 'infrastructure' | 'sports';

export type ProjectId = 'reparaciones' | 'edfUfro' | 'canchaFutbol' | 'canchaInterior' | 'hidropack' | 'iglesia';

export interface Project {
  id: ProjectId;
  category: ProjectCategory;
  titleKey: `projects.${ProjectId}.title`;
  descriptionKey: `projects.${ProjectId}.description`;
  cover: string;
  images: string[];
  span: 'large' | 'small' | 'wide';
}


export const projects: Project[] = [
  {
    id: 'reparaciones',
    category: 'repair',
    titleKey: 'projects.reparaciones.title',
    descriptionKey: 'projects.reparaciones.description',
    cover: '/images/project-reparaciones.jpg',
    images: [
      '/images/project-reparaciones.jpg',
      '/images/project-reparaciones1.jpg',
      '/images/project-reparaciones2.jpg',
      '/images/project-reparaciones3.jpg',
      '/images/project-reparaciones4.jpg',
      '/images/project-reparaciones5.jpg',
    ],
    span: 'small',
  },
  {
    id: 'edfUfro',
    category: 'infrastructure',
    titleKey: 'projects.edfUfro.title',
    descriptionKey: 'projects.edfUfro.description',
    cover: '/images/project-edfUfro.jpg',
    images: [
      '/images/project-edfUfro.jpg',
      '/images/project-edfUfro1.jpg',
      '/images/project-edfUfro2.jpg',
      '/images/project-edfUfro3.jpg',
      '/images/project-edfUfro4.jpg',
      '/images/project-edfUfro5.jpg',
    ],
    span: 'large',
  },
  {
    id: 'canchaFutbol',
    category: 'sports',
    titleKey: 'projects.canchaFutbol.title',
    descriptionKey: 'projects.canchaFutbol.description',
    cover: '/images/project-canchaFutbol.jpg',
    images: [
      '/images/project-canchaFutbol.jpg',
      '/images/project-canchaFutbol1.jpg',
      '/images/project-canchaFutbol2.jpg',
      '/images/project-canchaFutbol3.jpg',
      '/images/project-canchaFutbol4.jpg',
      '/images/project-canchaFutbol5.jpg'
    ],
    span: 'wide',
  },
  {
    id: 'canchaInterior',
    category: 'sports',
    titleKey: 'projects.canchaInterior.title',
    descriptionKey: 'projects.canchaInterior.description',
    cover: '/images/project-canchaInterior.jpg',
    images: [
      '/images/project-canchaInterior.jpg',
      '/images/project-canchaInterior1.jpg',
      '/images/project-canchaInterior2.jpg'
    ],
    span: 'small',
  },
  {
    id: 'iglesia',
    category: 'infrastructure',
    titleKey: 'projects.iglesia.title',
    descriptionKey: 'projects.iglesia.description',
    cover: '/images/project-iglesia.jpg',
    images: [
      '/images/project-iglesia.jpg',
      '/images/project-iglesia1.jpg',
      '/images/project-iglesia2.jpg',
      '/images/project-iglesia3.jpg'
    ],
    span: 'small',
  },
  {
    id: 'hidropack',
    category: 'infrastructure',
    titleKey: 'projects.hidropack.title',
    descriptionKey: 'projects.hidropack.description',
    cover: '/images/project-hidropack.jpg',
    images: [
      '/images/project-hidropack.jpg',
      '/images/project-hidropack1.jpg',
      '/images/project-hidropack2.jpg',
      '/images/project-hidropack3.jpg',
      '/images/project-hidropack4.jpg',
    ],
    span: 'wide',
  }
];

export function getCategoryLabel(category: ProjectCategory, lang: Lang): string {
  const key = `projects.category.${category}` as const;
  return key;
}
