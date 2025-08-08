import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersManager } from './players/players-manager/players-manager';
import { PlayersModule } from './players/players-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayersModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PlayerManager');
}
