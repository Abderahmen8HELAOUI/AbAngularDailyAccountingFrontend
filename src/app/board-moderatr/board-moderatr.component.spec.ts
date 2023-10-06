import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardModeratrComponent } from './board-moderatr.component';

describe('BoardModeratrComponent', () => {
  let component: BoardModeratrComponent;
  let fixture: ComponentFixture<BoardModeratrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardModeratrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardModeratrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
