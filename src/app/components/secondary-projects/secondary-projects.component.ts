import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgForOf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-secondary-projects',
  standalone: true,
  imports: [TranslateModule, NgForOf, MatCardModule],
  templateUrl: './secondary-projects.component.html',
  styleUrl: './secondary-projects.component.scss',
})
export class SecondaryProjectsComponent {
  protected readonly technologiesIconPath = 'assets/images/technologies/';
  protected d3js = {
    technologies: ['html', 'css', 'javascript', 'd3'],
  };

  protected eceau = {
    technologies: ['html', 'css', 'powerbi'],
  };

  protected htmlCssBdd = {
    technologies: ['html', 'css', 'php', 'mariadb'],
  };
}
