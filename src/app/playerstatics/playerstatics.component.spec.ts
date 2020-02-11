import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerstaticsComponent } from './playerstatics.component';

describe('PlayerstaticsComponent', () => {
  let component: PlayerstaticsComponent;
  let fixture: ComponentFixture<PlayerstaticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerstaticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerstaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
