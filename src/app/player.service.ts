import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Player } from './player.type';
import { PLAYERS } from './players.mock';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  playersUrl = 'api/players';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<Player[]>(this.playersUrl);
  }

  getItem(playerId: number) {
    return this.http.get<Player>(`${this.playersUrl}/${playerId}`);
  }

  add(name: string) {
    return this.http.post<Player>(
      this.playersUrl,
      { name } as Player,
      this.httpOptions
    );
  }

  update(player: Player) {
    return this.http.put<Player>(this.playersUrl, player, this.httpOptions);
  }

  delete(player: Player) {
    return this.http.delete<Player>(
      `${this.playersUrl}/${player.id}`,
      this.httpOptions
    );
  }
}
