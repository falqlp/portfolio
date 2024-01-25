import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgForOf, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TechnoLogosComponent } from '../techno-logos/techno-logos.component';
import {ImageViewerComponent} from "../../utils/image-viewer/image-viewer.component";

@Component({
  selector: 'app-secondary-projects',
  standalone: true,
  imports: [
    TranslateModule,
    NgForOf,
    MatCardModule,
    MatTooltipModule,
    TechnoLogosComponent,
    NgIf,
    ImageViewerComponent,
  ],
  templateUrl: './secondary-projects.component.html',
  styleUrl: './secondary-projects.component.scss',
})
export class SecondaryProjectsComponent {
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

  protected projects = [
    {
      title: 'D3.js',
      p: ['D3JS_DESC1', 'D3JS_DESC2'],
      a: 'https://github.com/falqlp/dataviz',
      img: 'assets/images/d3js/preview.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'D3js'],
    },
    {
      title: 'HTML CSS PHP',
      p: ['HTML_CSS_BDD_DESC1', 'HTML_CSS_BDD_DESC2'],
      a: 'https://github.com/falqlp/html-css-bdd',
      img: 'assets/images/html-css-bdd/preview2.png',
      technologies: ['HTML', 'CSS', 'PHP', 'MariaDB', 'Docker'],
    },
    {
      title: 'Portfolio',
      p: ['PORTFOLIO_DESC1', 'PORTFOLIO_DESC2'],
      a: 'https://github.com/falqlp/portfolio',
      img: 'assets/images/portfolio/portfolio-preview.png',
      technologies: ['HTML', 'CSS', 'SCSS', 'Angular'],
    },
  ];
}
