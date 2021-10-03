import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player.type';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 11, name: 'Cristiano Ronaldo' },
      { id: 12, name: 'Messi' },
      { id: 13, name: 'Van Nistelrooy' },
      { id: 14, name: 'Ronaldo' },
      { id: 15, name: 'Ronaldinho' },
      { id: 16, name: 'Neymar' },
      { id: 17, name: 'Pelé' },
      { id: 18, name: 'Maradonna' },
      { id: 19, name: 'Maldini' },
      { id: 20, name: 'Sergio Ramos' },
    ];
    return { players };
  }

  // Overrides the genId method to ensure that a player always has an id.
  // If the players array is empty,
  // the method below returns the initial number (11).
  // if the players array is not empty, the method below returns the highest
  // player id + 1.
  genId(players: Player[]): number {
    return players.length > 0
      ? Math.max(...players.map((player) => player.id)) + 1
      : 11;
  }
}
