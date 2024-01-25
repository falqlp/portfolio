import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { register } from 'swiper/element/bundle';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './portfolio/top-bar/top-bar.component';
import {BigImageViewerComponent} from "./utils/big-image-viewer/big-image-viewer.component";

register();

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  imports: [
    TranslateModule,
    HttpClientModule,
    RouterOutlet,
    TopBarComponent,
    BigImageViewerComponent,
  ],
})
export class AppComponent {
  title = 'portfolio';
}
