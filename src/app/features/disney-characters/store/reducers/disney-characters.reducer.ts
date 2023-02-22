import { createReducer, on } from '@ngrx/store';
import { CharacterResponse } from '../../models/http-get-all-charachers.interface';
import {
  DisneyCharacterAction,
  loadDisneyCharactersSuccess,
} from '../actions/disney-characters.actions';

export interface DisneyCharactersState {
  table: {
    [page: number]: CharacterResponse;
  };
}

export const initialState: DisneyCharactersState = {
  table: {},
};

const disneyCharactersReducer = createReducer(
  initialState,
  on(loadDisneyCharactersSuccess, (state, payload) => ({
    ...state,
    table: {
      ...state.table,
      [payload.pageNumber]: payload,
    },
  }))
);

export function reducer(
  state: DisneyCharactersState | undefined,
  action: typeof DisneyCharacterAction
) {
  return disneyCharactersReducer(state, action);
}

export const disneyCharactersFeatureKey = 'disneyCharacters';
