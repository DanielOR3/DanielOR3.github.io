import { Component, inject, signal } from '@angular/core';
import { PROFILE } from '../core/portfolio.data';
import { ScrollService } from '../core/scroll.service';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="nav">
      <div class="container nav__in">
        <a class="logo" href="/#inicio" (click)="go($event, 'inicio')" aria-label="Ir al inicio">{{ p.initials }}<span>.</span></a>
        <nav id="menu" class="nav__links" [class.open]="open()" aria-label="Principal">
          @for (l of links; track l.id) {
            <a [href]="'/#' + l.id" (click)="go($event, l.id)">{{ l.label }}</a>
          }
        </nav>
        <div class="nav__tools">
          @if (p.cvUrl) {
            <a class="btn btn--main btn--sm" [href]="p.cvUrl" target="_blank" rel="noopener">Ver CV</a>
          } @else {
            <span class="btn btn--sm is-disabled" aria-disabled="true">CV pendiente</span>
          }
          <button class="icon-btn" type="button" (click)="theme.toggle()" aria-label="Cambiar entre tema claro y oscuro">
            <svg class="i i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            <svg class="i i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
          </button>
          <button class="icon-btn menu-btn" type="button" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-controls="menu" aria-label="Abrir o cerrar el menú">
            <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </header>
  `,
})
export class Navbar {
  protected readonly p = PROFILE;
  protected readonly theme = inject(ThemeService);
  private readonly scroll = inject(ScrollService);
  protected readonly open = signal(false);
  protected readonly links = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'formacion', label: 'Formación' },
    { id: 'contacto', label: 'Contacto' },
  ];

  protected go(e: Event, id: string): void {
    e.preventDefault();
    this.open.set(false);
    this.scroll.to(id);
  }
}