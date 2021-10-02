import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.type';
import { PLAYERS } from './players.mock';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];
  selectedPlayer?: Player;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.setupItems();
  }

  onSelect(player: Player) {
    this.selectedPlayer = player;
  }

  setupItems() {
    this.playerService.getItems().subscribe((items) => {
      this.players = items;
    });
  }
}
