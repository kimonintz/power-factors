import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyCharactersComponent } from './disney-characters.component';

describe('DisneyCharactersComponent', () => {
  let component: DisneyCharactersComponent;
  let fixture: ComponentFixture<DisneyCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisneyCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisneyCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
