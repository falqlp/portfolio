import { Component } from '@angular/core';
import { ImageViewerComponent } from '../utils/image-viewer/image-viewer.component';
import { NgClass, NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryComponent } from '../galery/gallery.component';

@Component({
  selector: 'app-pokemon-manager',
  standalone: true,
  imports: [
    ImageViewerComponent,
    NgForOf,
    TranslateModule,
    NgClass,
    GalleryComponent,
  ],
  templateUrl: './pokemon-manager.component.html',
  styleUrl: './pokemon-manager.component.scss',
})
export class PokemonManagerComponent {
  protected baseUrl = 'assets/images/pokemon-manager/';
  protected pokemonManagerInfos = [
    {
      title: 'BATTLE',
      img: 'Battle',
      p: ['BATTLE_DESC1', 'BATTLE_DESC2'],
    },
    {
      title: 'STORAGE_PC',
      img: 'Storage PC',
      p: ['PC_DESC1', 'PC_DESC2'],
    },
    {
      title: 'NURSERY',
      img: 'Nursery',
      p: ['NURSERY_DESC1', 'NURSERY_DESC2', 'NURSERY_DESC3'],
    },
    {
      title: 'CALENDAR',
      img: 'Calendar',
      p: ['CALENDAR_DESC1', 'CALENDAR_DESC2', 'CALENDAR_DESC3'],
    },
    {
      title: 'POKEDEX',
      img: 'Pokedex',
      p: ['POKEDEX_DESC'],
    },
    {
      title: 'GAMES',
      img: 'Games',
      p: ['GAMES_DESC'],
    },
  ];
}
