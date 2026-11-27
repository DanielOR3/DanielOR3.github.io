import { Component } from '@angular/core';

@Component({
  selector: 'app-arch-diagram',
  standalone: true,
  template: `
    <svg class="arch" viewBox="0 0 520 270" role="img" aria-label="Diagrama de arquitectura de Uptime Monitor: cliente, API Express, Redis con BullMQ, worker, PostgreSQL y servicios monitoreados">
      <g class="arch__lines">
        <path d="M110 50H190M310 50H380M250 70V200M445 70V115M445 155V200M380 135H345V220H310"/>
      </g>
      <g class="arch__nodes">
        <rect x="10" y="30" width="100" height="40" rx="8"/><text x="60" y="55">Cliente</text>
        <rect class="hl" x="190" y="30" width="120" height="40" rx="8"/><text x="250" y="55">API Express</text>
        <rect x="380" y="30" width="130" height="40" rx="8"/><text x="445" y="55">Redis · BullMQ</text>
        <rect class="hl" x="380" y="115" width="130" height="40" rx="8"/><text x="445" y="140">Worker</text>
        <rect x="190" y="200" width="120" height="40" rx="8"/><text x="250" y="225">PostgreSQL</text>
        <rect x="380" y="200" width="130" height="40" rx="8"/><text x="445" y="225">Servicios web</text>
      </g>
    </svg>
  `,
})
export class ArchDiagram {}
