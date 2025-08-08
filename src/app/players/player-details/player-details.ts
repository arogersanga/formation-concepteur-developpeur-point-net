import { Component } from '@angular/core';
import { PlayersService } from '../players-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player';

@Component({
  selector: 'players-player-details',
  standalone: false,
  templateUrl: './player-details.html',
  styleUrl: './player-details.css'
})
export class PlayerDetails {
  constructor(private playerService: PlayersService, private route: ActivatedRoute, private router: Router) { }
  player: Player | null = null;
  idPlayer: string = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idPlayer = params.get('id')!;
      this.playerService.getPlayerById(this.idPlayer).subscribe(player => {
        this.player = player;
      })
    });
  }
  deletePlayer(player: Player) {
    this.playerService.deletePlayer(player).subscribe(player => {
      this.router.navigate(['/players']);
    });
  }
  retourALaListe() {
    console.log('tu m as clické');
    this.router.navigate(['/players']);
  }

  ajouterNouveau() {
    this.router.navigate(['/formulaire']);
  }
}
