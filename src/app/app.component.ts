import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PrimaryProjectsComponent } from './components/projets-principaux/primary-projects.component';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { SecondaryProjectsComponent } from './components/secondary-projects/secondary-projects.component';
import { EducationComponent } from './components/education/education.component';
import { FirstSlideComponent } from './components/first-slide/first-slide.component';

register();

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    TranslateModule,
    HttpClientModule,
    TopBarComponent,
    PrimaryProjectsComponent,
    SecondaryProjectsComponent,
    EducationComponent,
    FirstSlideComponent,
  ],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  @ViewChild('swiperContainer') protected swiperContainer: ElementRef;
  protected swiper = Swiper;
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateSize();
  }

  public ngAfterViewInit(): void {
    const swiperOption: SwiperOptions = {
      effect: 'slide',
      slidesPerView: 1,
      direction: 'vertical',
      mousewheel: true,
    };
    Object.assign(this.swiperContainer.nativeElement, swiperOption);
    this.swiperContainer.nativeElement.initialize();
  }

  protected updateSize(): void {
    this.swiperContainer.nativeElement.height = window.innerHeight - 82;
  }

  protected goToSlide(slide: number): void {
    this.swiperContainer.nativeElement.swiper.slideTo(slide);
  }
}
