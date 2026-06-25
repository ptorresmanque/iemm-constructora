export const languages = {
  es: 'Es',
  en: 'En',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

const t = {
  es: {
    'meta.title': 'IEMM Constructora | Construyendo el Futuro con Solidez',
    'meta.description': 'Más de dos décadas transformando paisajes urbanos con ingeniería de precisión y compromiso inquebrantable con la excelencia.',

    'nav.projects': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.cta': 'Solicitar Presupuesto',
    'nav.mobile.toggle': 'Abrir menú',
    'nav.lang.label': 'Idioma',

    'hero.eyebrow': 'Constructora líder desde 2004',
    'hero.title.a': 'Construyendo el',
    'hero.title.highlight': 'Futuro',
    'hero.title.b': 'con Solidez',
    'hero.subtitle': 'Más de dos décadas transformando paisajes urbanos con ingeniería de precisión y compromiso inquebrantable con la excelencia.',
    'hero.cta.primary': 'Solicitar Presupuesto',
    'hero.cta.secondary': 'Ver Proyectos',

    'about.eyebrow': 'Nuestra Trayectoria',
    'about.title': 'Veinte años forjando bases sólidas',
    'about.p1': 'IEMM Constructora nació con la visión de elevar los estándares de la construcción civil a través de la innovación técnica y la ética profesional. No solo levantamos estructuras; forjamos la base del desarrollo comunitario.',
    'about.p2': 'Nuestro equipo multidisciplinario combina décadas de conocimiento en campo con las últimas tecnologías BIM para asegurar que cada proyecto se entregue a tiempo, dentro del presupuesto y con una calidad que supera las expectativas más exigentes.',
    'about.badge.number': '20+',
    'about.badge.text': 'Años de experiencia ininterrumpida en el sector',
    'about.list.1': 'Profesionalismo Certificado',
    'about.list.2': 'Seguridad Industrial de Vanguardia',
    'about.list.3': 'Compromiso con la Sostenibilidad',

    'projects.eyebrow': 'Portafolio',
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Obras que definen nuestro compromiso con la solidez.',
    'projects.cta': 'Ver Portafolio Completo',
    'projects.category.repair': 'Reparación',
    'projects.category.infrastructure': 'Infraestructura',
    'projects.category.sports': 'Deportivo',
    'projects.reparaciones.title': 'Reparaciones y mejoras estructurales',
    'projects.reparaciones.description': 'Complejo residencial de 12 niveles y 48 unidades premium en zona exclusiva. Construcción de 18 meses con tecnología BIM y fachada ventilada de última generación. Amenities: rooftop pool, gimnasio, salón de eventos y co-working. Entrega 2024.',
    'projects.edfUfro.title': 'Edificio UFRO',
    'projects.edfUfro.description': 'Edificio corporativo de 8 niveles y 6.200 m² en el distrito financiero. Núcleo de circulación con acabados de acero pulido y concreto arquitectónico expuesto. Certificación LEED Gold obtenida en 2023.',
    'projects.canchaFutbol.title': 'Cancha de Fútbol',
    'projects.canchaFutbol.description': 'Nave industrial de 15.000 m² con 14 m de altura libre, 28 docks de carga y sprinklers ESFR. Pavimento de hormigón con fibras de 20 cm, capacidad portante 5 t/m². Operativo desde 2022 para cliente del sector retail.',
    'projects.canchaInterior.title': 'Cancha Interior',
    'projects.canchaInterior.description': 'Nave industrial de 15.000 m² con 14 m de altura libre, 28 docks de carga y sprinklers ESFR. Pavimento de hormigón con fibras de 20 cm, capacidad portante 5 t/m². Operativo desde 2022 para cliente del sector retail.',
    'projects.iglesia.title': 'Iglesia Rural',
    'projects.iglesia.description': 'Iglesia parroquial de 500 m² con fachada de piedra y techo de láminas metálicas. Construcción de 12 meses con tecnología BIM y acabados de alta calidad. Entrega 2024.',
    'projects.hidropack.title': 'Hidropack',
    'projects.hidropack.description': 'Nave industrial de 15.000 m² con 14 m de altura libre, 28 docks de carga y sprinklers ESFR. Pavimento de hormigón con fibras de 20 cm, capacidad portante 5 t/m². Operativo desde 2022 para cliente del sector retail.',

    'carousel.close': 'Cerrar galería',
    'carousel.prev': 'Imagen anterior',
    'carousel.next': 'Imagen siguiente',
    'carousel.counter': '{current} de {total}',
    'carousel.viewGallery': 'Ver galería',

    'services.eyebrow': 'Lo que hacemos',
    'services.title': 'Servicios Especializados',
    'services.subtitle': 'Soluciones integrales para cada etapa de su proyecto.',
    'services.1.title': 'Construcción Civil',
    'services.1.desc': 'Ejecución integral de proyectos residenciales, comerciales e industriales bajo los más altos estándares internacionales.',
    'services.2.title': 'Remodelaciones',
    'services.2.desc': 'Modernización y revitalización de estructuras existentes, optimizando espacios con materiales de primera calidad.',
    'services.3.title': 'Consultoría',
    'services.3.desc': 'Asesoramiento técnico, gestión de permisos y estudios de factibilidad para asegurar el éxito desde la concepción.',
    'services.cta': 'Saber Más',

    'contact.title': 'Hablemos de su próximo proyecto',
    'contact.subtitle': 'Nuestro equipo está listo para convertir su visión en una estructura sólida y duradera. Contáctenos hoy para una asesoría inicial.',
    'contact.location.title': 'Ubicación',
    'contact.location.value': 'Garibaldi 0880, Temuco, Chile',
    'contact.phone.title': 'Teléfono',
    'contact.phone.value': '+569 95255572',
    'contact.email.title': 'Correo',
    'contact.email.value': 'proyectos@iemm.cl',
    'contact.form.name': 'Nombre Completo',
    'contact.form.name.placeholder': 'Juan Pérez',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.email.placeholder': 'juan@ejemplo.com',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Cuéntenos sobre su proyecto...',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.success': '¡Gracias! Hemos recibido su mensaje y le responderemos pronto.',
    'contact.form.error': 'Ocurrió un error al enviar el mensaje. Inténtelo de nuevo.',

    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.careers': 'Carreras',
    'footer.linkedin': 'LinkedIn',
    'footer.copyright': '© 2026 IEMM Constructora. Todos los derechos reservados.',
  },
  en: {
    'meta.title': 'IEMM Constructora | Building the Future with Strength',
    'meta.description': 'Over two decades transforming urban landscapes with precision engineering and an unwavering commitment to excellence.',

    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a Quote',
    'nav.mobile.toggle': 'Open menu',
    'nav.lang.label': 'Language',

    'hero.eyebrow': 'Leading builders since 2004',
    'hero.title.a': 'Building the',
    'hero.title.highlight': 'Future',
    'hero.title.b': 'with Strength',
    'hero.subtitle': 'Over two decades transforming urban landscapes with precision engineering and an unwavering commitment to excellence.',
    'hero.cta.primary': 'Request a Quote',
    'hero.cta.secondary': 'View Projects',

    'about.eyebrow': 'Our Journey',
    'about.title': 'Twenty years building solid foundations',
    'about.p1': 'IEMM Constructora was born with the vision of raising the standards of civil construction through technical innovation and professional ethics. We do not just build structures; we forge the foundation of community development.',
    'about.p2': 'Our multidisciplinary team combines decades of field knowledge with the latest BIM technologies to ensure every project is delivered on time, on budget, and with quality that exceeds the most demanding expectations.',
    'about.badge.number': '20+',
    'about.badge.text': 'Years of uninterrupted experience in the sector',
    'about.list.1': 'Certified Professionalism',
    'about.list.2': 'Cutting-edge Industrial Safety',
    'about.list.3': 'Commitment to Sustainability',

    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Works that define our commitment to solidity.',
    'projects.cta': 'View Full Portfolio',
    'projects.category.repair': 'Repair',
    'projects.category.infrastructure': 'infrastructure',
    'projects.category.sports': 'Sports',

    'projects.reparaciones.title': 'Reparaciones y mejoras estructurales',
    'projects.reparaciones.description': 'Complejo residencial de 12 niveles y 48 unidades premium en zona exclusiva. Construcción de 18 meses con tecnología BIM y fachada ventilada de última generación. Amenities: rooftop pool, gimnasio, salón de eventos y co-working. Entrega 2024.',
    'projects.edfUfro.title': 'Edificio UFRO',
    'projects.edfUfro.description': 'Edificio corporativo de 8 niveles y 6.200 m² en el distrito financiero. Núcleo de circulación con acabados de acero pulido y concreto arquitectónico expuesto. Certificación LEED Gold obtenida en 2023.',
    'projects.canchaFutbol.title': 'Cancha de Fútbol',
    'projects.canchaFutbol.description': 'Nave industrial de 15.000 m² con 14 m de altura libre, 28 docks de carga y sprinklers ESFR. Pavimento de hormigón con fibras de 20 cm, capacidad portante 5 t/m². Operativo desde 2022 para cliente del sector retail.',
    'projects.canchaInterior.title': 'Cancha Interior',
    'projects.canchaInterior.description': 'Nave industrial de 15.000 m² con 14 m de altura libre, 28 docks de carga y sprinklers ESFR. Pavimento de hormigón con fibras de 20 cm, capacidad portante 5 t/m². Operativo desde 2022 para cliente del sector retail.',
    'projects.iglesia.title': 'Iglesia Rural',
    'projects.iglesia.description': 'Iglesia parroquial de 500 m² con fachada de piedra y techo de láminas metálicas. Construcción de 12 meses con tecnología BIM y acabados de alta calidad. Entrega 2024.',
    'projects.hidropack.title': 'Hidropack',
    'projects.hidropack.description': 'Nave industrial de 15.000 m² con 14 m de altura libre, 28 docks de carga y sprinklers ESFR. Pavimento de hormigón con fibras de 20 cm, capacidad portante 5 t/m². Operativo desde 2022 para cliente del sector retail.',

    'carousel.close': 'Close gallery',
    'carousel.prev': 'Previous image',
    'carousel.next': 'Next image',
    'carousel.counter': '{current} of {total}',
    'carousel.viewGallery': 'View gallery',

    'services.eyebrow': 'What we do',
    'services.title': 'Specialized Services',
    'services.subtitle': 'Comprehensive solutions for every stage of your project.',
    'services.1.title': 'Civil Construction',
    'services.1.desc': 'Full execution of residential, commercial, and industrial projects under the highest international standards.',
    'services.2.title': 'Remodeling',
    'services.2.desc': 'Modernization and revitalization of existing structures, optimizing spaces with premium materials.',
    'services.3.title': 'Consulting',
    'services.3.desc': 'Technical advisory, permit management, and feasibility studies to ensure success from conception.',
    'services.cta': 'Learn More',

    'contact.title': "Let's talk about your next project",
    'contact.subtitle': 'Our team is ready to turn your vision into a solid, lasting structure. Contact us today for an initial consultation.',
    'contact.location.title': 'Location',
    'contact.location.value': 'Garibaldi 0880, Temuco, Chile',
    'contact.phone.title': 'Phone',
    'contact.phone.value': '+569 95255572',
    'contact.email.title': 'Email',
    'contact.email.value': 'proyectos@iemm.cl',
    'contact.form.name': 'Full Name',
    'contact.form.name.placeholder': 'John Doe',
    'contact.form.email': 'Email Address',
    'contact.form.email.placeholder': 'john@example.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us about your project...',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Thank you! We have received your message and will reply soon.',
    'contact.form.error': 'There was an error sending your message. Please try again.',

    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.careers': 'Careers',
    'footer.linkedin': 'LinkedIn',
    'footer.copyright': '© 2026 IEMM Constructora. All rights reserved.',
  },
} as const;

export type TranslationKey = keyof typeof t.es;

type Vars = Record<string, string | number>;

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, name) =>
    name in vars ? String(vars[name]) : `{${name}}`,
  );
}

export function useTranslations(lang: Lang) {
  return function translate(key: TranslationKey, vars?: Vars): string {
    const raw = t[lang][key] ?? t[defaultLang][key] ?? key;
    return interpolate(raw, vars);
  };
}
