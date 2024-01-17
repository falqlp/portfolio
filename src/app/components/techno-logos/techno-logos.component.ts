import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-techno-logos',
  standalone: true,
  imports: [MatTooltipModule, NgForOf],
  templateUrl: './techno-logos.component.html',
  styleUrl: './techno-logos.component.scss',
})
export class TechnoLogosComponent {
  @Input() public technologies: string[];
  protected readonly technologiesIconPath = 'assets/images/technologies/';
}
