import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
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

  constructor(
    private playerService: PlayerService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.setupItems();
  }

  onSelect(player: Player) {
    this.selectedPlayer = player;
    this.messageService.add(`You've looked at ${player.name} details`);
  }

  setupItems() {
    this.playerService.getItems().subscribe((items) => {
      this.players = items;
    });
  }
}
