import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Anime } from "./anime";

@Component({
  selector: "app-anime",
  templateUrl: "./anime.component.html",
})
export class AnimePageComponent implements OnInit {
  anime$: Observable<Anime[]> = this.store.select((state) => state.anime);

  constructor(private store: Store<{ anime: Anime[] }>) {}

  ngOnInit(): void {
    // this.movieService.getAll().subscribe((movies) => (this.movies = movies));
    this.store.dispatch({ type: "[Anime Page] Load Anime" });
  }
}
