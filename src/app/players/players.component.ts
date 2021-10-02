import { Component, OnInit } from '@angular/core';
import { Player } from './player.type';
import { PLAYERS } from './players.mock';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players = PLAYERS;
  selectedPlayer?: Player;

  constructor() {}

  ngOnInit(): void {}

  onSelect(player: Player) {
    this.selectedPlayer = player;
  }
}
