import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgForOf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TechnoLogosComponent } from '../techno-logos/techno-logos.component';

@Component({
  selector: 'app-secondary-projects',
  standalone: true,
  imports: [
    TranslateModule,
    NgForOf,
    MatCardModule,
    MatTooltipModule,
    TechnoLogosComponent,
  ],
  templateUrl: './secondary-projects.component.html',
  styleUrl: './secondary-projects.component.scss',
})
export class SecondaryProjectsComponent {
  protected readonly technologiesIconPath = 'assets/images/technologies/';
  protected d3js = {
    p: ['D3JS_DESC1', 'D3JS_DESC2'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'D3js'],
  };

  protected eceau = {
    p: ['D3JS_DESC1', 'D3JS_DESC2'],
    technologies: ['HTML', 'CSS', 'PowerBI'],
  };

  protected htmlCssBdd = {
    p: ['HTML_CSS_BDD_DESC1', 'HTML_CSS_BDD_DESC2'],
    technologies: ['HTML', 'CSS', 'PHP', 'MariaDB', 'Docker'],
  };
}
