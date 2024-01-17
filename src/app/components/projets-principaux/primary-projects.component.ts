import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TechnoLogosComponent } from '../techno-logos/techno-logos.component';

@Component({
  selector: 'app-primary-projects',
  standalone: true,
  imports: [NgForOf, TranslateModule, MatTooltipModule, TechnoLogosComponent],
  templateUrl: './primary-projects.component.html',
  styleUrl: './primary-projects.component.scss',
})
export class PrimaryProjectsComponent {
  protected readonly technologiesIconPath = 'assets/images/technologies/';
  protected pokemonManager = {
    p: ['PM_DESC1', 'PM_DESC2', 'PM_DESC3'],
    technologies: [
      'HTML',
      'CSS',
      'SCSS',
      'Angular',
      'TypeScript',
      'ExpressJS',
      'MongoDB',
    ],
  };

  protected aquiweb = {
    p: ['AW_DESC1', 'AW_DESC2', 'AW_DESC3'],
    technologies: [
      'HTML',
      'CSS',
      'SCSS',
      'Angular',
      'TypeScript',
      'Java',
      'Spring',
      'Hibernate',
      'PostgreSQL',
    ],
  };
}
