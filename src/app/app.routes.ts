import { Routes } from '@angular/router';
import { PokemonManagerComponent } from './pokemon-manager/pokemon-manager.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: 'PokemonManager', component: PokemonManagerComponent },
  { path: '**', component: PortfolioComponent },
];
