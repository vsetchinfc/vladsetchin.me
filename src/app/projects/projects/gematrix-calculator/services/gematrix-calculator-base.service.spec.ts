import { TestBed } from '@angular/core/testing';

import { GematrixCalculatorBaseService, GematrixLetterIndex } from './gematrix-calculator-base.service';

describe('GematrixCalculatorBaseService', () => {
  let service: GematrixCalculatorBaseService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GematrixCalculatorBaseService);
  });

  it('base calculator should be created', () => {
    expect(service).toBeTruthy();
  });

  it('GematrixLetterIndex should return the reduced number of the index', () => {
    var letterIndex = new GematrixLetterIndex('11', '');
    var index = letterIndex.getIndex();
    var reducedIndex = letterIndex.getReducedIndex();

    expect(index).toEqual(11);
    expect(reducedIndex).toEqual(2);
  });
});
