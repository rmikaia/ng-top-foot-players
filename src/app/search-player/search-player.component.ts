import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.type';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css'],
})
export class SearchPlayerComponent implements OnInit {
  players?: Player[];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  search(value: string) {
    this.playerService.search(value.trim()).subscribe((players) => {
      this.players = players;
    });
  }
}
