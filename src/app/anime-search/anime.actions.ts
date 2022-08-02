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

export const newPage = createAction(
  "[Anime Page] Next Page",
  props<{ id: string }>()
);
