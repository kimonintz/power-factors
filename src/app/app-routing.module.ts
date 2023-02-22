import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'disney-characters',
    pathMatch: 'full',
  },
  {
    path: 'disney-characters',
    loadChildren: () =>
      import('./features/disney-characters/disney-characters.module').then(
        (m) => m.DisneyCharactersModule
      ),
    pathMatch: 'full',
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
