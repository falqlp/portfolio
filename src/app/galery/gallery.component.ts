import { Component } from '@angular/core';
import { ImageViewerComponent } from '../utils/image-viewer/image-viewer.component';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [ImageViewerComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  protected imgs = [
    'Battle',
    'Home',
    'Pokedex detail',
    'Starters',
    'StoragePc',
  ];
}
