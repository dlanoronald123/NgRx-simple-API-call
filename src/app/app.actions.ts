import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const search = createAction(
  '[Anime Page] load search results',
  props<{ text: string }>()
);

export const searchResultSuccess = createAction(
  '[Anime Page] Search result success',
  props<{ data: any }>()
);

export const searchResultFailed = createAction(
  '[Anime Page] Search result failed',
  props<{ error: string | null }>()
);

export const newPage = createAction(
  '[Anime Page] Next Page',
  props<{ id: string }>()
);
