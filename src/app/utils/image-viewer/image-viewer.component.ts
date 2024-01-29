import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { BigImageViewerService } from '../big-image-viewer/big-image-viewer.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.scss',
})
export class ImageViewerComponent implements AfterViewInit {
  @Input() public src: string;
  @Input() public alt: string;

  protected maxHeight = false;

  constructor(
    protected bigImageViewerService: BigImageViewerService,
    protected elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const hwRatioImg =
        this.elementRef.nativeElement.children[0].naturalHeight /
        this.elementRef.nativeElement.children[0].naturalWidth;
      const hwRatioImgDiv =
        this.elementRef.nativeElement.parentElement.clientHeight /
        this.elementRef.nativeElement.parentElement.clientWidth;
      this.maxHeight = hwRatioImg > hwRatioImgDiv;
    }, 100);
  }

  protected click(): void {
    this.bigImageViewerService.setImage(this.src);
  }
}
