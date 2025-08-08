import { Component, Input } from '@angular/core';
import { PlayersService } from '../players-service';
import { Player } from '../models/player';
import { Router } from '@angular/router';

@Component({
  selector: 'players-players-manager',
  standalone: false,
  templateUrl: './players-manager.html',
  styleUrl: './players-manager.css'
})
export class PlayersManager {
  
  players: Player[] = [];
  player: Player = { id: '', firstname: '', lastname: '', teamid: 0, position: '', age: 0 };

  constructor(private playerService: PlayersService, private router: Router) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  recevoirPlayersSelected(event: Player[]) {
    this.players = event;
  }

  getPlayers() {
    this.playerService.getAllPlayers()
      .subscribe((result: Player[]) => {
        this.players = result;
      });
  }


  afficherDetailsPlayer(player: Player) {
    if (player.id) {
      console.log(player.id);
      this.playerService.getPlayerById(player.id).subscribe(player => {
        this.player = player;
        this.router.navigate(['/players/' + this.player.id]);
      });
    }
  }

  modifierInfos(player: Player) {
    if (player.id) {
      console.log(player.id);
      this.playerService.getPlayerById(player.id).subscribe(player => {
        this.player = player;
        this.router.navigate(['/formulaire/' + this.player.id]);
      });
    }
  }
}
