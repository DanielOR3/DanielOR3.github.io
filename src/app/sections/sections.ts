import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ABOUT, ABOUT_POINTS, CERTS, EDUCATION, JOBS, Level, PROFILE, PROJECTS, TECH_GROUPS } from '../core/portfolio.data';
import { ScrollService } from '../core/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  
  template: `
    <section id="inicio" class="hero">
      <div class="container hero__in">
        <div>
          <p class="eyebrow">Hola, soy</p>
          <h1>{{ p.fullName }}</h1>
          <p class="role">{{ p.role }}</p>
          <p class="lead">{{ p.tagline }}</p>
          <div class="actions">
            <a class="btn btn--main" href="/#proyectos" (click)="go($event, 'proyectos')">Ver proyectos</a>
            @if (p.cvUrl) {
              <a class="btn" [href]="p.cvUrl" target="_blank" rel="noopener">Ver CV</a>
            } @else {
              <span class="btn is-disabled" aria-disabled="true">CV pendiente</span>
            }
            <a class="btn" href="/#contacto" (click)="go($event, 'contacto')">Contactarme</a>          </div>
        </div>
          <figure class="hero__photo">
            <img src="/images/foto-perfil.jpg" alt="Foto de Daniel Andrés Orrala Ramírez" width="480" height="600" />
          </figure>
      </div>
    </section>
  `,
})
export class Hero {
  protected readonly p = PROFILE;
  private readonly scroll = inject(ScrollService);

  protected go(e: Event, id: string): void {
    e.preventDefault();
    this.scroll.to(id);
  }
}
@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="sobre-mi" class="section">
      <div class="container">
        <header class="sh"><p class="eyebrow">Perfil</p><h2>Sobre mí</h2></header>
        <div class="about__body">
          <div>@for (t of about; track t) { <p>{{ t }}</p> }</div>
          <ul class="checks">@for (a of points; track a) { <li>{{ a }}</li> }</ul>
        </div>
      </div>
    </section>
  `,
})
export class About {
  protected readonly about = ABOUT;
  protected readonly points = ABOUT_POINTS;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  template: `
    <section id="tecnologias" class="section">
      <div class="container">
        <header class="sh">
          <p class="eyebrow">Stack</p><h2>Tecnologías y herramientas</h2>
          <p class="muted">El nivel indica cuánto he trabajado con cada tecnología, no un porcentaje de dominio.</p>
        </header>
        <div class="grid">
          @for (g of groups; track g.title) {
            <article class="card">
              <h3>{{ g.title }}</h3>
              <ul class="tech">
                @for (t of g.items; track t.name) {
                  <li><span>{{ t.name }}</span><span [class]="'lvl lvl--' + cls(t.level)">{{ t.level }}</span></li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Technologies {
  protected readonly groups = TECH_GROUPS;
  protected cls(l: Level): string { return l === 'Práctico' ? 'p' : l === 'Intermedio' ? 'i' : 'f'; }
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="proyectos" class="section">
      <div class="container">
        <header class="sh"><p class="eyebrow">Trabajo</p><h2>Proyectos destacados</h2></header>
        <div class="projects">
          @for (p of projects; track p.slug; let first = $first) {
            <article class="card project" [class.featured]="first">
              <p class="meta">{{ p.type }}</p>
              <h3>{{ p.name }}</h3>
              @if (p.status) { <p class="status">{{ p.status }}</p> }
              <p>{{ p.description }}</p>
              <ul class="pills">@for (s of p.stack; track s) { <li>{{ s }}</li> }</ul>
              <div class="actions">
                <a class="btn btn--sm" [href]="p.repo" target="_blank" rel="noopener">{{ p.repoLabel }}</a>
                <a class="btn btn--sm btn--main" [routerLink]="['/proyectos', p.slug]">Detalles técnicos</a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Projects { protected readonly projects = PROJECTS; }

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experiencia" class="section">
      <div class="container">
        <header class="sh"><p class="eyebrow">Trayectoria</p><h2>Experiencia profesional</h2></header>
        <ol class="timeline">
          @for (j of jobs; track j.period) {
            <li>
              <p class="meta">{{ j.period }}</p>
              <h3>{{ j.role }}, {{ j.company }}</h3>
              <ul class="bullets">@for (pt of j.points; track pt) { <li>{{ pt }}</li> }</ul>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class Experience { protected readonly jobs = JOBS; }

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section id="formacion" class="section">
      <div class="container">
        <header class="sh"><p class="eyebrow">Formación</p><h2>Formación académica y certificaciones</h2></header>
        <div class="grid grid--2">
          @for (e of education; track e.title) {
            <article class="card"><p class="meta">{{ e.year }}</p><h3>{{ e.title }}</h3><p class="muted">{{ e.place }}</p></article>
          }
        </div>
        <ul class="certs">
          @for (c of certs; track c.name) {
            <li><strong>{{ c.name }}</strong><span>{{ c.org }}, {{ c.year }}</span></li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class Education {
  protected readonly education = EDUCATION;
  protected readonly certs = CERTS;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contacto" class="section">
      <div class="container">
        <header class="sh">
          <p class="eyebrow">Contacto</p><h2>Hablemos</h2>
        </header>
        <div class="grid">
          <a class="card tile" [href]="'mailto:' + p.email"><span class="meta">Correo</span><strong>{{ p.email }}</strong></a>
          <a class="card tile" [href]="p.github" target="_blank" rel="noopener"><span class="meta">GitHub</span><strong>DanielOR3</strong></a>
          <a class="card tile" [href]="p.linkedin" target="_blank" rel="noopener"><span class="meta">LinkedIn</span><strong>Daniel Orrala</strong></a>
          <div class="card tile"><span class="meta">Ubicación</span><strong>{{ p.location }}</strong></div>
        </div>
      </div>
    </section>
  `,
})
export class Contact { protected readonly p = PROFILE; }
