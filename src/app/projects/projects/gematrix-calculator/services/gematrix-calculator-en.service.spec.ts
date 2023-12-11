import { TestBed } from '@angular/core/testing';

import { GematrixCalculatorENService } from './gematrix-calculator-en.service';

describe('GematrixCalculatorEnService', () => {
  let service: GematrixCalculatorENService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GematrixCalculatorENService);
  });

  it('en calculator should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should populate the en lists', () => {
    expect(service.letters.length).toBeGreaterThan(0);
  });

  it('should return the index value of the a and A chars', () => {
    var indexOfa = service.getCharIndex('a');

    var indexOfA = service.getCharIndex('A');

    expect(indexOfa).toEqual(indexOfA);
    expect(indexOfa).toEqual(1);
  });

  it('should return the index value of the a and A chars of reverse', () => {
    var indexOfa = service.getReverseCharIndex('a');

    var indexOfA = service.getReverseCharIndex('A');

    expect(indexOfa).toEqual(indexOfA);
    expect(indexOfa).toEqual(26);
  });

  it('should return the index value of the t and T chars', () => {
    var indexOft = service.getCharIndex('t');

    var indexOfT = service.getCharIndex('T');

    expect(indexOft).toEqual(indexOfT);
    expect(indexOft).toEqual(20);
  });

  it('should return the index value of the t and T chars of reverse', () => {
    var indexOft = service.getReverseCharIndex('t');

    var indexOfT = service.getReverseCharIndex('T');

    expect(indexOft).toEqual(indexOfT);
    expect(indexOft).toEqual(7);
  });

  it('should return the 0 if could not find a char', () => {
    var index = service.getCharIndex('Б');
    expect(index).toEqual(0);
  });
});
