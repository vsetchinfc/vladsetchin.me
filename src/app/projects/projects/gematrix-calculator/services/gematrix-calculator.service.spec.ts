import { TestBed } from '@angular/core/testing';

import { GematrixCalculatorService } from './gematrix-calculator.service';

describe('GematrixCalculatorService', () => {
  let service: GematrixCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GematrixCalculatorService);
  });

  it('calculator should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the number for specified line string - Ta', () => {
    const entry = 'Ta'
    var result = service.calculate(entry);

    expect(result.ordinal).toEqual(21);
    expect(result.entry).toEqual(entry);
    expect(result.reverseOrdinal).toEqual(33);
  });

  it('should calculate the number for specified line string - Ба', () => {
    const entry = 'Ба';
    var result = service.calculate(entry);

    expect(result.ordinal).toEqual(3);
    expect(result.entry).toEqual(entry);
    expect(result.reverseOrdinal).toEqual(65);
  });
});
