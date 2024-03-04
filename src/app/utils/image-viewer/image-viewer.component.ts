import { Component, ElementRef, Input } from '@angular/core';
import { BigImageViewerService } from '../big-image-viewer/big-image-viewer.service';
import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [NgClass, NgIf, NgOptimizedImage],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.scss',
})
export class ImageViewerComponent {
  @Input() public src: string;
  @Input() public alt: string;

  protected maxHeight: boolean;

  constructor(
    protected bigImageViewerService: BigImageViewerService,
    protected elementRef: ElementRef
  ) {}

  protected onImgLoad(): void {
    const hwRatioImg =
      this.elementRef.nativeElement.children[0].naturalHeight /
      this.elementRef.nativeElement.children[0].naturalWidth;
    const hwRatioImgDiv =
      this.elementRef.nativeElement.parentElement.clientHeight /
      this.elementRef.nativeElement.parentElement.clientWidth;
    this.maxHeight = hwRatioImg > hwRatioImgDiv;
  }

  protected click(): void {
    this.bigImageViewerService.setImage(this.src);
  }
}
