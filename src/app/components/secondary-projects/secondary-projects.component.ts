import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgForOf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-secondary-projects',
  standalone: true,
  imports: [TranslateModule, NgForOf, MatCardModule, MatTooltipModule],
  templateUrl: './secondary-projects.component.html',
  styleUrl: './secondary-projects.component.scss',
})
export class SecondaryProjectsComponent {
  protected readonly technologiesIconPath = 'assets/images/technologies/';
  protected d3js = {
    technologies: ['HTML', 'CSS', 'JavaScript', 'D3js'],
  };

  protected eceau = {
    technologies: ['HTML', 'CSS', 'PowerBI'],
  };

  protected htmlCssBdd = {
    technologies: ['HTML', 'CSS', 'PHP', 'MariaDB'],
  };
}
