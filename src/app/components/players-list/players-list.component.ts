import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players?: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
      this.retrievePlayers();
  }

  retrievePlayers(): void {
    this.playerService.getAll()
      .subscribe({
        next: (data) => {
          this.players = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
