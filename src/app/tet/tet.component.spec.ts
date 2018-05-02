import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetComponent } from './tet.component';

describe('TetComponent', () => {
  let component: TetComponent;
  let fixture: ComponentFixture<TetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
