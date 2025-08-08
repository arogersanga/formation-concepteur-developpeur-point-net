import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersManager } from './players-manager/players-manager';
import { PlayerDetails } from './player-details/player-details';



@NgModule({
  declarations: [
    PlayersManager,
    PlayerDetails
  ],
  imports: [
    CommonModule

  ],
  exports: [
    PlayersManager,
    PlayerDetails
  ]
})
export class PlayersModule { }
