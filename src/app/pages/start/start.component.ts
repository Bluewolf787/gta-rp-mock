import { Component } from '@angular/core';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [Panel],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {}
