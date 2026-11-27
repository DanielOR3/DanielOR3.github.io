import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './core/portfolio.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'proyectos/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PROJECTS.map((p) => ({ slug: p.slug })),
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
