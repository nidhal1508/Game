import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictacgameComponent } from './tictacgame.component';

describe('TictacgameComponent', () => {
  let component: TictacgameComponent;
  let fixture: ComponentFixture<TictacgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TictacgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictacgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
