import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketApiComponent } from './cricket-api.component';

describe('CricketApiComponent', () => {
  let component: CricketApiComponent;
  let fixture: ComponentFixture<CricketApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
