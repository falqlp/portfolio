import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  constructor(protected translateService: TranslateService) {}

  protected changeLanguage(): void {
    this.translateService.currentLang;
    this.translateService.use(
      this.translateService.currentLang === 'fr-FR' ? 'en-EN' : 'fr-FR'
    );
  }
}
