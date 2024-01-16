import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatExpansionModule, TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {}
