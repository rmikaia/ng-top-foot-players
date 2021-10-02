import { Component, OnInit } from '@angular/core';
import { Player } from '../types/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  player: Player = {
    id: 7,
    name: 'Cristiano Ronaldo',
  };

  constructor() {}

  ngOnInit(): void {}
}
