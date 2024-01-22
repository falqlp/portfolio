import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { SecondaryProjectsComponent } from './secondary-projects/secondary-projects.component';
import { PrimaryProjectsComponent } from './projets-principaux/primary-projects.component';
import { FirstSlideComponent } from './first-slide/first-slide.component';
import { NavigationService } from '../navigation.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SecondaryProjectsComponent,
    PrimaryProjectsComponent,
    FirstSlideComponent,
    EducationComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChild('swiperContainer') protected swiperContainer: ElementRef;
  protected swiper = Swiper;
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateSize();
  }

  constructor(protected navigationService: NavigationService) {}

  public ngAfterViewInit(): void {
    const swiperOption: SwiperOptions = {
      effect: 'slide',
      slidesPerView: 1,
      direction: 'vertical',
      mousewheel: true,
    };
    Object.assign(this.swiperContainer.nativeElement, swiperOption);
    this.swiperContainer.nativeElement.initialize();
    this.navigationService
      .getNavigation()
      .pipe(takeUntilDestroyed())
      .subscribe(this.goToSlide);
  }

  protected updateSize(): void {
    this.swiperContainer.nativeElement.height = window.innerHeight - 82;
  }

  protected goToSlide(slide: number): void {
    this.swiperContainer.nativeElement.swiper.slideTo(slide);
  }
}
