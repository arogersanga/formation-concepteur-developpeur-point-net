
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
 
  api : string = 'http://localhost:3000/players';

    constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.api);
  }

    getPlayerById(id: string): Observable<Player> {
      return this.http.get<Player>(this.api + '/' + id);
  }

    deletePlayer(player: Player): Observable<Player> {
      return this.http.delete<Player>(this.api + '/' + player.id);
  }

  savePlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.api, player);
  }

    updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(this.api + '/' + player.id, player);
  }
}
