import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { loadAnime, loadAnimeSuccess } from "./anime.actions";
import { Anime, Pagination } from "./anime.state";

export const listFeatureKey = "anime";

export interface AnimeState extends EntityState<Anime> {
  pagination: Pagination;
}

export const animeAdapter: EntityAdapter<Anime> = createEntityAdapter<Anime>({
  selectId: (data: any) => data.mal_id,
});

export const initialState: Anime[] = [];

const _animeReducer = createReducer<Anime[]>(
  initialState,
  on(loadAnime, (state): Anime[] => [...state]),

  on(loadAnimeSuccess, (state, action) => [...state, ...action.payload])
);

export function animeReducer(state: any, action: any) {
  return _animeReducer(state, action);
}

const { selectAll } = animeAdapter.getSelectors();

export const selectList = selectAll;
