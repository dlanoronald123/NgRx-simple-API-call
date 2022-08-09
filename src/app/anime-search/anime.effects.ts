import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { loadAnimeSuccess } from "./anime.actions";
import { AnimeService } from "./anime.service";

@Injectable()
export class AnimeEffects {
  loadAnime$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Anime Page] Load Anime"),
      mergeMap((action) => {
        return this.animeService.getAll(action["input"], action["page"]).pipe(
          tap(console.log),
          map((anime) => {
            const pagination = {
              previous_page_offset: anime.meta.previous_page_offset,
              previous_page: anime.meta.previous_page,
              next_page_offset: anime.meta.next_page_offset,
              next_page: anime.meta.next_page,
            };
            return loadAnimeSuccess({ payload: anime.data, pagination });
          })
        );
      }),
      catchError(() => of({ type: "[Anime API] Anime Loaded Error" }))
    )
  );

  constructor(private actions$: Actions, private animeService: AnimeService) {}
}
