import { TestBed } from '@angular/core/testing';

import { GematrixCalculatorBaseService } from './gematrix-calculator-base.service';

describe('GematrixCalculatorBaseService', () => {
  let service: GematrixCalculatorBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GematrixCalculatorBaseService);
  });

  it('base calculator should be created', () => {
    expect(service).toBeTruthy();
  });
});
