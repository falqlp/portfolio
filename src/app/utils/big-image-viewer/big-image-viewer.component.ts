import { Component } from '@angular/core';
import { BigImageViewerService } from './big-image-viewer.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-big-image-viewer',
  standalone: true,
  imports: [AsyncPipe, NgIf, MatIconModule],
  templateUrl: './big-image-viewer.component.html',
  styleUrl: './big-image-viewer.component.scss',
})
export class BigImageViewerComponent {
  protected urlObservable = this.bigImageViewerService.getImage();
  constructor(protected bigImageViewerService: BigImageViewerService) {}
  protected close(): void {
    this.bigImageViewerService.setImage('');
  }
}
