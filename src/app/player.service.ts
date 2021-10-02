import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PLAYERS } from './players/players.mock';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  getItems() {
    return of(PLAYERS);
  }
}
