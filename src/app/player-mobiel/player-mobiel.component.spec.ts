import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMobielComponent } from './player-mobiel.component';

describe('PlayerMobielComponent', () => {
  let component: PlayerMobielComponent;
  let fixture: ComponentFixture<PlayerMobielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMobielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMobielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
