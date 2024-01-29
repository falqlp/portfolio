import { Component } from '@angular/core';
import { ImageViewerComponent } from '../utils/image-viewer/image-viewer.component';
import { NgClass, NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pokemon-manager',
  standalone: true,
  imports: [ImageViewerComponent, NgForOf, TranslateModule, NgClass],
  templateUrl: './pokemon-manager.component.html',
  styleUrl: './pokemon-manager.component.scss',
})
export class PokemonManagerComponent {
  protected baseUrl = 'assets/images/pokemon-manager/';
  protected paragraphs = [
    {
      img: 'home',
      p: 'Work in progress',
    },
    {
      img: 'home',
      p: 'Work in progress',
    },
    {
      img: 'home',
      p: 'Work in progress',
    },
    {
      img: 'home',
      p: 'Work in progress',
    },
    {
      img: 'home',
      p: 'Work in progress',
    },
  ];
}
