import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadAnime } from "./anime.actions";
import { Anime } from "./anime.state";

@Component({
  selector: "app-anime",
  templateUrl: "./anime.component.html",
})
export class AnimePageComponent implements OnInit {
  anime$: Observable<Anime[]> = this.store.select((state) => state.anime);
  prvs = 0;
  nxt = 0;
  prev$: any;
  next$: any;

  constructor(private store: Store<{ anime: Anime[] }>) {
    // this.prev$.subscribe((data: any) => {
    //   this.prvs = data;
    // });
    // this.next$.subscribe((data: any) => {
    //   this.nxt = data;
    // });
  }

  ngOnInit(): void {
    this.store.dispatch(loadAnime({ page: 0 }));
  }

  prevPage() {
    this.store.dispatch(loadAnime({ page: this.prvs }));
  }

  nextPage() {
    this.store.dispatch(loadAnime({ page: this.nxt }));
  }
}
