import { Component, EventEmitter, Output } from '@angular/core';
import { Player } from '../models/player';
import { PlayersService } from '../players-service';
import { distinct } from 'rxjs';

@Component({
  selector: 'app-player-filter',
  standalone: false,
  templateUrl: './player-filter.html',
  styleUrl: './player-filter.css'
})
export class PlayerFilter {
  players: Player[] = [];
  playersSelected: Player[] = [];
  @Output() playersEvent = new EventEmitter<Player[]>();
  player: Player = { id: '', firstname: '', lastname: '', teamid: 0, position: '', age: 0 };

  positionUniques: string[]=[];

  constructor(private playerService: PlayersService) { }

  ngOnInit(): void {

    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getAllPlayers()
      .subscribe((result: Player[]) => {
        this.players = result;
       const distinctNames =  this.players
       .map(player => player.position)
       
     this.positionUniques = [...new Set(distinctNames)];
         console.log(this.positionUniques);
    
      });
  }

  changePlayer(event: Event) {
    console.log('j ai change de position');
    const selectElement = event.target as HTMLSelectElement;
    const selectedPosition = String(selectElement.value);
    this.playersSelected = this.players.filter(player =>
      player.position.toLowerCase().includes(selectedPosition.toLowerCase())
    );
  this.transmettresLesPlayersSElectionnes();
  }
 transmettresLesPlayersSElectionnes(){
  this.playersEvent.emit(this.playersSelected);
 }
}
