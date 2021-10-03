import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
import { PlayerService } from '../player.service';
import { Player } from '../player.type';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
})
export class PlayerDetailComponent implements OnInit {
  @Input() player?: Player;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private location: Location,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getAndSetCurrentPlayer();
  }

  getAndSetCurrentPlayer() {
    const playerId = Number(this.route.snapshot.paramMap.get('id'));
    this.playerService.getItem(playerId).subscribe((player) => {
      this.player = player;
      this.messageService.add(`You've seen ${player?.name} details`);
    });
  }

  goBack() {
    this.location.back();
  }

  update() {
    this.player &&
      this.playerService.update(this.player).subscribe((_) => this.goBack());
  }
}
