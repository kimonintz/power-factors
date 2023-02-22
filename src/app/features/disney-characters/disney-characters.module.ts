import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared';
import { DisneyCharactersComponent } from './containers/disney-characters/disney-characters.component';

import { DisneyCharactersRoutingModule } from './disney-characters-routing.module';
import { DisneyCharactersServicesModule } from './services/disney-charcters-services.module';
import { DisneyCharactersEffects } from './store/effects/disney-characters.effect';
import { disneyCharactersFeatureKey } from './store/reducers/disney-characters.reducer';

import * as fromDisneyCharactersReducer from './store/reducers/disney-characters.reducer';

@NgModule({
  declarations: [DisneyCharactersComponent],
  imports: [
    CommonModule,
    DisneyCharactersRoutingModule,
    SharedModule,
    DisneyCharactersServicesModule,
    StoreModule.forFeature(
      disneyCharactersFeatureKey,
      fromDisneyCharactersReducer.reducer
    ),
    EffectsModule.forFeature([DisneyCharactersEffects]),
  ],
})
export class DisneyCharactersModule {}
