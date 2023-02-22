import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDisneyCharacters } from '../../store/actions/disney-characters.actions';
import { DisneyCharactersState } from '../../store/reducers/disney-characters.reducer';

@Component({
  selector: 'disney-disney-characters',
  templateUrl: './disney-characters.component.html',
  styleUrls: ['./disney-characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisneyCharactersComponent implements OnInit {
  private store$ = inject(Store<DisneyCharactersState>);

  ngOnInit() {
    this.store$.dispatch(loadDisneyCharacters({ pageNumber: 1 }));
  }
}
