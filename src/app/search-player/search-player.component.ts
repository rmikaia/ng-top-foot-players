import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PlayerService } from '../player.service';
import { Player } from '../player.type';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css'],
})
export class SearchPlayerComponent implements OnInit {
  players$!: Observable<Player[]>;
  searchTerms = new Subject<string>();

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.players$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((terms) => this.playerService.search(terms))
    );
  }

  search(value: string) {
    this.searchTerms.next(value);
  }
}
