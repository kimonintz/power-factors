import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DisneyApiService } from '../../services/disney-api.service';
import {
  DisneyCharacterAction,
  loadDisneyCharacters,
  loadDisneyCharactersSuccess,
} from '../actions/disney-characters.actions';

@Injectable()
export class DisneyCharactersEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDisneyCharacters.type),
      mergeMap((action) =>
        this.disneyApiService.getAllCharacters().pipe(
          map((charactersResponse) =>
            loadDisneyCharactersSuccess({
              ...charactersResponse,
              pageNumber: action.pageNumber,
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );


  constructor(
    private actions$: Actions<typeof DisneyCharacterAction>,
    private disneyApiService: DisneyApiService
  ) {}


}
