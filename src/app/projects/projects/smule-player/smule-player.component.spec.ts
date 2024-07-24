import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmulePlayerComponent } from './smule-player.component';

describe('SmulePlayerComponent', () => {
  let component: SmulePlayerComponent;
  let fixture: ComponentFixture<SmulePlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmulePlayerComponent]
    });
    fixture = TestBed.createComponent(SmulePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
