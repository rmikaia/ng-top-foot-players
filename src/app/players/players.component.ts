import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { PlayerService } from '../player.service';
import { Player } from '../player.type';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.setupItems();
  }

  setupItems() {
    this.playerService.getItems().subscribe((items) => {
      this.players = items;
    });
  }
}
