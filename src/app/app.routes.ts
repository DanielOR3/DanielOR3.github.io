import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { ProjectDetail } from './pages/project-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'proyectos/:slug', component: ProjectDetail },
  { path: '**', redirectTo: '' },
];
