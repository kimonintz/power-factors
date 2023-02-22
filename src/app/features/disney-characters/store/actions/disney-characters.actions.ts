import { createAction, props, union } from '@ngrx/store';
import { CharacterResponse } from '../../models/http-get-all-charachers.interface';

export const loadDisneyCharacters = createAction(
  '[Disney Characters] Load',
  props<{ pageNumber: number }>()
);

export const loadDisneyCharactersSuccess = createAction(
  '[Disney Characters] Load Success',
  props<CharacterResponse & { pageNumber: number }>()
);

export const DisneyCharacterAction = union({
  [loadDisneyCharacters.type]: loadDisneyCharacters,
  [loadDisneyCharactersSuccess.type]: loadDisneyCharactersSuccess,
});
