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

  add(name: string) {
    this.playerService
      .add(name)
      .subscribe((player) => this.players.push(player));
  }

  delete(player: Player) {
    this.playerService.delete(player).subscribe((_) => {
      this.players = this.players.filter((p) => player.id !== p.id);
    });
  }
}
