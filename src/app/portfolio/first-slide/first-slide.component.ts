import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-first-slide',
  standalone: true,
  imports: [NgClass],
  templateUrl: './first-slide.component.html',
  styleUrl: './first-slide.component.scss',
})
export class FirstSlideComponent implements OnInit, OnDestroy {
  protected texteAnime = '';
  protected isTypingCompleted = false;
  private index = 0;

  constructor(protected translateService: TranslateService) {}

  public ngOnDestroy(): void {
    window.removeEventListener('load', this.initTypeWriter);
  }

  public ngOnInit(): void {
    window.addEventListener('load', () => this.initTypeWriter());
  }

  protected initTypeWriter(): void {
    this.translateService.onLangChange
      .asObservable()
      .pipe(startWith(null))
      .subscribe(() => {
        this.index = 0;
        this.texteAnime = '';
        this.isTypingCompleted = false;
        this.typeWriter();
      });
  }

  protected typeWriter(): void {
    this.translateService.get('INTRO').subscribe((texte) => {
      if (this.index < texte.length) {
        this.texteAnime += texte.charAt(this.index);
        this.index += 1;
        setTimeout(() => this.typeWriter(), 50);
      } else {
        this.isTypingCompleted = true;
      }
    });
  }
}
