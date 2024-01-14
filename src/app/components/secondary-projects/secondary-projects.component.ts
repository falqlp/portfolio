import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-secondary-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './secondary-projects.component.html',
  styleUrl: './secondary-projects.component.scss',
})
export class SecondaryProjectsComponent {}
