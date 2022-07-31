import { createReducer, on } from "@ngrx/store";
import { loadAnime, loadAnimeSuccess } from "./anime.actions";
import { Anime } from "./anime";

export const initialState: Anime[] = [];

// tslint:disable-next-line: variable-name
const _animeReducer = createReducer<Anime[]>(
  initialState,
  on(loadAnime, (state): Anime[] => [...state]),

  on(loadAnimeSuccess, (state, action) => [...state, ...action.payload])
);
// tslint:disable-next-line: typedef no-any
export function animeReducer(state: any, action: any) {
  return _animeReducer(state, action);
}
