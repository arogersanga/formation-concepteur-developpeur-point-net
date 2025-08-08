import { Routes } from '@angular/router';
import { PlayersManager } from './players/players-manager/players-manager';
import { PlayerForm } from './players/player-form/player-form';
import { PlayerDetails } from './players/player-details/player-details';

export const routes: Routes = [
      { path: '', redirectTo: 'players', pathMatch: 'full' },
    { path: 'players', component: PlayersManager },
    { path: 'formulaire', component: PlayerForm },
    { path: 'formulaire/:id', component: PlayerForm },
    { path: 'players/:id', component: PlayerDetails }
];
