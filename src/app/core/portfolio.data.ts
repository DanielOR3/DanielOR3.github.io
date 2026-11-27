export type Level = 'Práctico' | 'Intermedio' | 'En formación';
export interface Tech { name: string; level: Level }
export interface TechGroup { title: string; items: Tech[] }
export interface Project {
  slug: string; name: string; type: string; status?: string; description: string; problem: string;
  features: string[]; stack: string[]; architecture?: string; repo: string; repoLabel: string; diagram?: boolean;
}
export interface Job { period: string; role: string; company: string; points: string[] }

export const PROFILE = {
  fullName: 'Daniel Andrés Orrala Ramírez',
  initials: 'DO',
  role: 'Ingeniero en Tecnologías de la Información',
  tagline:
  'Ingeniero en Tecnologías de la Información enfocado en el desarrollo de aplicaciones web, con experiencia práctica construyendo soluciones que integran frontend, backend y bases de datos.',
  location: 'La Libertad, Ecuador',
  email: 'daniel.orralar@gmail.com',
  github: 'https://github.com/DanielOR3',
  linkedin: 'https://www.linkedin.com/in/daniel-orrala-a61492298/',
  cvUrl: 'https://drive.google.com/file/d/18GD5ywfrPM_xv6pZk2RQoC86CWBYEWZe/view?usp=sharing', 
};

export const ABOUT = [
  'Soy Ingeniero en Tecnologías de la Información orientado al desarrollo de software. Me interesa construir aplicaciones web de extremo a extremo, participando en el desarrollo de interfaces, APIs REST, lógica de negocio y diseño de bases de datos.',

  'He desarrollado proyectos personales utilizando tecnologías como Node.js, TypeScript, Angular y PostgreSQL, incorporando autenticación, procesamiento asíncrono, comunicación en tiempo real y pruebas automatizadas. También cuento con experiencia en digitalización y automatización de procesos operativos, gestión de información y soporte tecnológico, donde he aplicado soluciones para mejorar la organización y eficiencia de las actividades.'
];
export const ABOUT_POINTS = [
  'Desarrollo de aplicaciones web frontend y backend',
  'Diseño e implementación de APIs REST',
  'Bases de datos relacionales y modelado de datos',
  'Autenticación, autorización y seguridad',
  'Automatización y optimización de procesos'
];

// PROVISIONAL: ajusta cada nivel a lo que puedas defender en una entrevista.
const t = (name: string, level: Level = 'Práctico'): Tech => ({ name, level });
export const TECH_GROUPS: TechGroup[] = [
  { title: 'Backend', items: [t('Node.js'), t('Express.js'), t('TypeScript'), t('Python'), t('APIs REST'), t('JWT')] },
  { title: 'Bases de datos', items: [t('PostgreSQL'), t('SQL Server'), t('Drizzle ORM'), t('Redis'), t('MySQL', 'En formación')] },
  { title: 'Frontend', items: [t('Angular'), t('RxJS'), t('HTML'), t('CSS')] },
  { title: 'Herramientas y DevOps', items: [t('Git'), t('GitHub'), t('GitHub Actions'), t('Postman'), t('Docker', 'En formación')] },
  { title: 'Complementarias', items: [t('VBA'), t('Bash'), t('Power BI'), t('Excel', 'Intermedio')] },
];

export const PROJECTS: Project[] = [
  {
    slug: 'uptime-monitor',
    name: 'Uptime Monitor',
    type: 'Proyecto personal · Desarrollo backend',
    status: 'Backend y frontend completos y probados · Despliegue en la nube pendiente',
    description:
      'Plataforma de monitoreo de disponibilidad de sitios web y APIs: chequeos periódicos, detección de caídas, incidentes, alertas automáticas, dashboard en tiempo real y página de estado pública.',    problem: 'Enterarse a tiempo de que un sitio o una API dejó de responder, sin falsas alarmas por un fallo aislado.',
    features: [
      'Frontend Angular: dashboard en vivo, detalle con gráfica de latencia, formulario de monitores y ajustes de Telegram y enlace público.',
      'Renovación de tokens sin carreras: un solo refresh compartido entre todas las peticiones que reciben 401.',
      'Configuración en runtime: la URL de la API se lee de config.json, así una misma imagen Docker sirve para cualquier entorno.',
      'Gráfica de latencia en SVG sin dependencias, donde los huecos de un monitor pausado se ven como huecos.',
      'Pruebas: 73 en el backend y 52 en el frontend.',
    ],
    stack: ['Node.js', 'TypeScript', 'Express 5', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'BullMQ', 'Socket.IO', 'Zod', 'JWT', 'Vitest', 'Supertest', 'Docker', 'GitHub Actions'],
    architecture:
      'La API Express y el worker son procesos independientes. El worker publica cada resultado en un canal de Redis y cada instancia de la API lo reenvía por WebSocket al dashboard Angular. Redis y BullMQ gestionan los trabajos periódicos y PostgreSQL almacena usuarios, monitores, chequeos e incidentes.', 
    repo: 'https://github.com/DanielOR3/uptime-monitor',
    repoLabel: 'Repositorio',
    diagram: true,
  },
  {
    slug: 'inventario-naval',
    name: 'Gestión de Inventario y Mantenimiento Naval',
    type: 'Proyecto personal · Automatización y gestión de inventarios',
    description:
      'Sistema orientado a organizar y controlar el inventario de repuestos y el mantenimiento naval, con herramientas para validar registros, analizar disponibilidad y facilitar decisiones.',
    problem: 'Seguimiento manual y disperso del inventario de repuestos y del mantenimiento de equipos.',
    features: [
      'Validación de registros.',
      'Organización de la información de inventarios.',
      'Análisis de disponibilidad de repuestos.',
      'Alertas ante riesgo de desabastecimiento.',
      'Apoyo al seguimiento de mantenimiento.',
    ],
    stack: ['Python', 'Power BI', 'Automatización'],
    repo: 'https://github.com/DanielOR3/inventario-naval-mantenimiento',
    repoLabel: 'Repositorio',
  },
  {
    slug: 'gestion-incidencias-cnel',
    name: 'Modelo de Gestión de Incidencias, CNEL EP',
    type: 'Proyecto académico · Trabajo de titulación',
    status: 'Modelo diseñado e implementado en un entorno de pruebas',
    description:
      'Diseño de un modelo de gestión de incidencias basado en ITIL para el área de sistemas de CNEL EP, e implementación del modelo en Zammad, un sistema de tickets de código abierto, sobre un servidor Linux virtualizado.',
    problem: 'Mejorar cómo se clasifican, atienden, escalan y documentan las incidencias en el área de sistemas de CNEL EP.',
    features: [
      'Análisis del proceso de gestión de incidencias.',
      'Clasificación y categorización de incidencias bajo ITIL.',
      'Definición del proceso de escalamiento y métricas de resolución.',
      'Despliegue de Zammad en un servidor Linux sobre una máquina virtual en VirtualBox.',
      'Configuración de flujos de atención, roles de usuario, SLAs y categorías según el modelo propuesto.',
      'Implementación del proceso de escalamiento dentro del sistema.',
      'Base de conocimiento configurada en Zammad.',
    ],
    stack: ['Zammad', 'ITIL', 'Linux', 'VirtualBox', 'Base de conocimiento'],
    architecture:
      'El modelo se diseñó primero y luego se implementó en Zammad, desplegado en un servidor Linux dentro de una máquina virtual en VirtualBox. Allí se configuraron categorías, escalamiento y base de conocimiento tal como lo planteaba el modelo.',
    repo: 'https://repositorio.upse.edu.ec/handle/46000/10924',
    repoLabel: 'Repositorio académico',
  },
];

export const JOBS: Job[] = [
  {
    period: 'Abril 2025 – Abril 2026',
    role: 'Digitalización y Automatización de Procesos',
    company: 'Corporación Marzam',
    points: [
      'Diseño y despliegue de un sistema de control documental, alojado en Nextcloud que centralizó más de 900 documentos técnicos.',
      'Automatización del control del plan de mantenimiento preventivo de motores principales y auxiliares, incluido el cálculo de volúmenes de combustible.',
      'Digitalización y codificación del catálogo de repuestos para el control de inventario y la identificación rápida de piezas.',
      'Estructuración del inventario de equipos de cubierta y sala de máquinas de cinco buques, por sistema.',
      'Digitalización y organización de manuales, planos y documentación técnica de la flota.',
      'Soporte técnico interno a usuarios del área operativa.',
    ],
  },
  {
    period: 'Febrero 2023 – Mayo 2023',
    role: 'Pasante en Soporte TI',
    company: 'GAD Municipal de La Libertad',
    points: [
      'Instalación, configuración y mantenimiento preventivo de equipos informáticos.',
      'Diagnóstico y mantenimiento básico de PCs; respaldo y recuperación de información.',
      'Atención de incidencias con ticketing institucional y soporte presencial a más de 20 usuarios.',
    ],
  },
];

export const EDUCATION = [
  { title: 'Ingeniero en Tecnologías de la Información', place: 'Universidad Estatal Península de Santa Elena (UPSE)', year: '2024' },
  { title: 'Bachiller en Servicios de Aplicaciones Informáticas', place: 'Unidad Educativa Eugenio Espejo', year: '2019' },
];

export const CERTS = [
  { name: 'Defensa a la Red', org: 'Cisco Networking Academy', year: '2026' },
  { name: 'Inglés A1', org: 'New York Language School', year: '2026' },
  { name: 'Seguridad de Terminales', org: 'Cisco Networking Academy', year: '2025' },
  { name: 'Dispositivos de Red y Configuración Inicial', org: 'Cisco Networking Academy', year: '2025' },
  { name: 'Conceptos Básicos de Redes', org: 'Cisco Networking Academy', year: '2024' },
  { name: 'Introducción a la Ciberseguridad', org: 'Cisco Networking Academy', year: '2024' },
  { name: 'Scrum Fundamentals', org: 'ScrumStudy', year: '2024' },
];
