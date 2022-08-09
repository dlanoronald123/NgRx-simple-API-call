import { createAction, props } from "@ngrx/store";
import { Anime, Pagination } from "./anime.state";

export const loadAnime = createAction(
  "[Anime Page] Load Anime",
  props<{ input: string; page: number }>()
);

export const loadAnimeSuccess = createAction(
  "[Anime API] Anime Loaded Success",
  props<{ payload: Anime[]; pagination: Pagination }>()
);

export const loadAnimeFailed = createAction("[Anime API] Anime Loaded Error");

export const loadNextAnimeResults = createAction(
  "[Anime Page] Load Next Page",
  props<{ ayload: Anime[]; pagination: Pagination }>()
);

export const loadPrevAnimeResults = createAction(
  "[Anime Page] Load Previous Page",
  props<{ ayload: Anime[]; pagination: Pagination }>()
);
