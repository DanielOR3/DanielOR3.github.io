import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS } from '../core/portfolio.data';
import { ArchDiagram } from '../shared/arch-diagram';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, ArchDiagram],
  template: `
    <div class="container detail">
      <a class="back" routerLink="/" fragment="proyectos">Volver a proyectos</a>
      @if (project; as p) {
        <p class="meta">{{ p.type }}</p>
        <h1>{{ p.name }}</h1>
        @if (p.status) { <p class="status">{{ p.status }}</p> }
        <p class="lead">{{ p.description }}</p>
        <div class="actions"><a class="btn btn--main" [href]="p.repo" target="_blank" rel="noopener">{{ p.repoLabel }}</a></div>

        <h2>Problema que resuelve</h2>
        <p>{{ p.problem }}</p>

        <h2>Características</h2>
        <ul class="bullets">@for (f of p.features; track f) { <li>{{ f }}</li> }</ul>

        @if (p.architecture) {
          <h2>Arquitectura</h2>
          <p>{{ p.architecture }}</p>
          @if (p.diagram) { <figure class="hero__visual"><app-arch-diagram /></figure> }
        }

        <h2>Tecnologías</h2>
        <ul class="pills">@for (s of p.stack; track s) { <li>{{ s }}</li> }</ul>
      } @else {
        <h1>Proyecto no encontrado</h1>
      }
    </div>
  `,
})
export class ProjectDetail {
  protected readonly project = PROJECTS.find((p) => p.slug === inject(ActivatedRoute).snapshot.paramMap.get('slug'));

  constructor() {
    if (this.project) {
      inject(Title).setTitle(this.project.name + ' | Daniel Orrala');
      inject(Meta).updateTag({ name: 'description', content: this.project.description });
    }
  }
}
