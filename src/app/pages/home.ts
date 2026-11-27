import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { About, Contact, Education, Experience, Hero, Projects, Technologies } from '../sections/sections';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, About, Technologies, Projects, Experience, Education, Contact],
  template: `<app-hero /><app-about /><app-technologies /><app-projects /><app-experience /><app-education /><app-contact />`,
})
export class Home {
  constructor() {
    inject(Title).setTitle('Daniel Andrés Orrala Ramírez | Backend Developer Junior');
    inject(Meta).updateTag({
      name: 'description',
      content: 'Portafolio Daniel Andrés Orrala Ramírez: APIs REST, Node.js, TypeScript, PostgreSQL y proyectos backend.',
    });
  }
}
