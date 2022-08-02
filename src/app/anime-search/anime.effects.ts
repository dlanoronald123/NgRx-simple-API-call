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
      mergeMap((action) =>
        this.animeService.getAll(action).pipe(
          tap(console.log),
          map((anime) => loadAnimeSuccess({ payload: anime.data })),
          catchError(() => of({ type: "[Anime API] Anime Loaded Error" }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private animeService: AnimeService) {}
}
