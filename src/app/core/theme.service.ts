import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly root = inject(DOCUMENT).documentElement;

  toggle(): void {
    const next = this.root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    this.root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch { /* sin almacenamiento */ }
  }
}
