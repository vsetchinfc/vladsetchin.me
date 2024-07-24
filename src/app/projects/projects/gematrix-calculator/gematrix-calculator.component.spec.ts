import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GematrixCalculatorComponent } from './gematrix-calculator.component';

describe('GematrixCalculatorComponent', () => {
  let component: GematrixCalculatorComponent;
  let fixture: ComponentFixture<GematrixCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GematrixCalculatorComponent]
    });
    fixture = TestBed.createComponent(GematrixCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
