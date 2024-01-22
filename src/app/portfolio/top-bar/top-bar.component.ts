import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  protected lang = this.translateService.defaultLang;
  constructor(
    protected translateService: TranslateService,
    protected navigationService: NavigationService
  ) {}

  protected changeLanguage(): void {
    const newLang = this.lang === 'fr-FR' ? 'en-EN' : 'fr-FR';
    this.lang = newLang;
    this.translateService.use(newLang);
  }

  protected goTo(slide: number): void {
    this.navigationService.updateNavigation(slide);
  }
}
