import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {}
