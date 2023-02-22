import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisneyCharactersComponent } from './containers/disney-characters/disney-characters.component';

const routes: Routes = [
  {
    path: '',
    component: DisneyCharactersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisneyCharactersRoutingModule {}
