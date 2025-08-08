import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../players-service';
import { Player } from '../models/player';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'players-player-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './player-form.html',
  styleUrl: './player-form.css'
})
export class PlayerForm {
buttonVisibleUpdate: boolean = false;
  buttonVisibleSave: boolean = true;
  player: Player = { id: '', firstname: '', lastname: '', teamid: 0, position: '', age: 0 };
   playerToUpdate: Player = { id: '', firstname: '', lastname: '', teamid: 0, position: '', age: 0 };
  idPlayer: string = '';
  playerForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    teamid: new FormControl('', [Validators.min(0), Validators.max(20)]),
    position: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.min(0), Validators.max(99)])
  });

  constructor(private playerService: PlayersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idPlayer = params.get('id')!;
      this.playerService.getPlayerById(this.idPlayer).subscribe(player => {
        this.player = player;
        this.playerForm.controls['firstname'].setValue(player.firstname);
        this.playerForm.controls['lastname'].setValue(player.lastname);
        this.playerForm.controls['teamid'].setValue(player.teamid);
        this.playerForm.controls['position'].setValue(player.position);
        this.playerForm.controls['age'].setValue(player.age);
        this.buttonVisibleUpdate = true;
        this.buttonVisibleSave = false;
        this.playerToUpdate = player;
      })
    });
  }

  onSubmit() {
    this.player = this.playerForm.value;
    console.log(this.player);
    this.playerService.savePlayer(this.player).subscribe(player => {
      console.log(player);
      this.router.navigate(['/players']);
    });
  }

  modifierInfos() {

   this.player = this.playerForm.value;
   this.player.id = this.playerToUpdate.id;
    console.log(this.player);
    this.playerService.updatePlayer(this.player).subscribe(player => {
      console.log(player);
      this.router.navigate(['/players']);

    });
  }

  retourALaListe() {
    console.log('tu m as clické');
    this.router.navigate(['/players']);
  }
}
