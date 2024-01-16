import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-primary-projects',
  standalone: true,
  imports: [NgForOf, TranslateModule, MatTooltipModule],
  templateUrl: './primary-projects.component.html',
  styleUrl: './primary-projects.component.scss',
})
export class PrimaryProjectsComponent {
  protected readonly technologiesIconPath = 'assets/images/technologies/';
  protected pokemonManager = {
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
