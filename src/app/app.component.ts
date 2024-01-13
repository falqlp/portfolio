import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PrimaryProjectsComponent } from './components/projets-principaux/primary-projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  imports: [
    TranslateModule,
    HttpClientModule,
    TopBarComponent,
    PrimaryProjectsComponent,
  ],
})
export class AppComponent {
  title = 'portfolio';
}
