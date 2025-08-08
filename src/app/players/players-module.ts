import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersManager } from './players-manager/players-manager';
import { PlayerDetails } from './player-details/player-details';
import { PlayerFilter } from './player-filter/player-filter';



@NgModule({
  declarations: [
    PlayersManager,
    PlayerDetails,
    PlayerFilter
  ],
  imports: [
    CommonModule

  ],
  exports: [
    PlayersManager,
    PlayerDetails,
     PlayerFilter
  ]
})
export class PlayersModule { }
