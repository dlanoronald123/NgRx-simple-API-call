import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  nextSelector,
  prevSelector,
  selectAnime,
  selectLoading,
} from "../anime.selector";
import { loadAnime } from "./anime.actions";
import { Anime } from "./anime.state";

@Component({
  selector: "app-anime",
  templateUrl: "./anime.component.html",
})
export class AnimePageComponent {
  readonly anime$: Observable<Anime[]> = this.store.select(selectAnime);
  prvs = 0;
  nxt = 0;
  title: string = "";
  readonly prev$: Observable<number | null> = this.store.select(prevSelector);
  readonly next$: Observable<number | null> = this.store.select(nextSelector);
  readonly loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(private store: Store) {
    this.store.dispatch(loadAnime({ input: "", page: 0 }));
    this.prev$.subscribe((data: any) => {
      this.prvs = data;
    });
    this.next$.subscribe((data: any) => {
      this.nxt = data;
    });
  }

  prevPage() {
    this.store.dispatch(loadAnime({ input: this.title, page: this.prvs }));
  }

  nextPage() {
    this.store.dispatch(loadAnime({ input: this.title, page: this.nxt }));
  }

  search(): void {
    this.store.dispatch(loadAnime({ input: this.title, page: 0 }));
  }
}
