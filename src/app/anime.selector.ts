import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as reducerAnime from "./anime-search/anime.reducer";

export const selectAnimeState = createFeatureSelector<reducerAnime.AnimeState>(
  reducerAnime.animeFeatureKey
);

export const selectAnime = createSelector(
  selectAnimeState,
  reducerAnime.selectList
);

export const prevSelector = createSelector(
  selectAnimeState,
  (state) => state.pagination.previous_page_offset
);

export const nextSelector = createSelector(
  selectAnimeState,
  (state) => state.pagination.next_page_offset
);

export const selectLoading = createSelector(
  selectAnimeState,
  (state) => state.loading
);
