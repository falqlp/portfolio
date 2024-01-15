import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  Input,
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
  ],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  @ViewChild('swiperContainer') protected swiperContainer: ElementRef;
  protected swiper = Swiper;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateSize();
  }

  ngAfterViewInit(): void {
    const swiperOption: SwiperOptions = {
      effect: 'cube',
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
