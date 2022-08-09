import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeature, createReducer, on } from "@ngrx/store";
import { loadAnime, loadAnimeSuccess } from "./anime.actions";
import { Anime, Pagination } from "./anime.state";

export const animeFeatureKey = "anime";

export interface AnimeState extends EntityState<Anime> {
  pagination: Pagination;
  loading: boolean;
}

export const animeAdapter: EntityAdapter<Anime> = createEntityAdapter<Anime>({
  selectId: (data: any) => data.mal_id,
});

export const initialState: AnimeState = animeAdapter.getInitialState({
  loading: false,
  pagination: {
    previous_page_offset: -1,
    previous_page: null,
    next_page_offset: -1,
    next_page: null,
  },
});

export const animeFeature = createFeature({
  name: animeFeatureKey,
  reducer: createReducer(
    initialState,
    on(loadAnime, (state) => ({
      ...state,
      loading: true,
    })),
    on(loadAnimeSuccess, (state, action) => {
      return animeAdapter.setAll(action.payload, {
        ...state,
        loading: false,
        pagination: action.pagination,
      });
    })
  ),
});

const { selectAll } = animeAdapter.getSelectors();

export const selectList = selectAll;

// export const initialState: Anime[] = [];

// const _animeReducer = createReducer<Anime[]>(
//   initialState,
//   on(loadAnime, (state): Anime[] => [...state]),

//   on(loadAnimeSuccess, (state, action) => [...state, ...action.payload])
// );

// export function animeReducer(state: any, action: any) {
//   return _animeReducer(state, action);
// }
