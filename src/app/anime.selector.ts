import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as reducerAnime from "./anime-search/anime.reducer";

export const selectAnimeState = createFeatureSelector<reducerAnime.AnimeState>(
  reducerAnime.listFeatureKey
);

export const selectList = createSelector(
  selectAnimeState,
  reducerAnime.selectList
);
