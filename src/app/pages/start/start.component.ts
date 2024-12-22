import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [NgStyle, Panel],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {}
