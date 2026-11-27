import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar';
import { PROFILE } from './core/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar />
    <main><router-outlet /></main>
    <footer class="foot container"><p>&copy; {{ year }} {{ name }}.</p></footer>
  `,
})
export class App {
  protected readonly year = new Date().getFullYear();
  protected readonly name = PROFILE.fullName;
}
