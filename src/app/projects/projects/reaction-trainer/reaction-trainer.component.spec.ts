import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionTrainerComponent } from './reaction-trainer.component';

describe('ReactionTrainerComponent', () => {
  let component: ReactionTrainerComponent;
  let fixture: ComponentFixture<ReactionTrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactionTrainerComponent]
    });
    fixture = TestBed.createComponent(ReactionTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
