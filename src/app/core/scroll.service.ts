import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router);

  async to(id: string): Promise<void> {
    if (this.router.url.split(/[#?]/)[0] !== '/') {
      await this.router.navigateByUrl('/');
    }
    setTimeout(() => this.doc.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }
}