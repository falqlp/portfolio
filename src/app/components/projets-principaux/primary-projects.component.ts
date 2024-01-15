import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-primary-projects',
  standalone: true,
  imports: [NgForOf, TranslateModule],
  templateUrl: './primary-projects.component.html',
  styleUrl: './primary-projects.component.scss',
})
export class PrimaryProjectsComponent {
  protected readonly technologiesIconPath = 'assets/images/technologies/';
  protected pokemonManager = {
    technologies: [
      'html',
      'css',
      'sass',
      'angular',
      'typescript',
      'express',
      'mongodb',
    ],
  };

  protected aquiweb = {
    technologies: [
      'html',
      'css',
      'sass',
      'angular',
      'typescript',
      'java',
      'spring',
      'hibernate',
      'postgresql',
    ],
  };
}
