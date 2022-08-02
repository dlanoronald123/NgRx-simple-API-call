import { createAction, props } from "@ngrx/store";
import { Anime } from "./anime.state";

export const loadAnime = createAction(
  "[Anime Page] Load Anime",
  props<{ page: number }>()
);

export const loadAnimeSuccess = createAction(
  "[Anime API] Anime Loaded Success",
  props<{ payload: Anime[] }>()
);

export const loadAnimeFailed = createAction("[Anime API] Anime Loaded Error");

export const loadNextAnimeResults = createAction(
  "[Anime Page] Load Next Page",
  props<{ id: string }>()
);

export const loadPrevAnimeResults = createAction(
  "[Anime Page] Load Previous Page",
  props<{ id: string }>()
);
