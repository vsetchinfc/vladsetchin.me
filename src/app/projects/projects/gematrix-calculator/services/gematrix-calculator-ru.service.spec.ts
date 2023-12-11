import { TestBed } from '@angular/core/testing';

import { GematrixCalculatorRUService } from './gematrix-calculator-ru.service';

describe('GematrixCalculatorRuService', () => {
  let service: GematrixCalculatorRUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GematrixCalculatorRUService);
  });

  it('ru calculator should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should populate the ru lists', () => {
    expect(service.letters.length).toBeGreaterThan(0);
  });

  it('should return the index value of the а and А chars', () => {
    var indexOfa = service.getCharIndex('а');

    var indexOfA = service.getCharIndex('А');

    expect(indexOfa).toEqual(indexOfA);
    expect(indexOfa).toEqual(1);
  });

  it('should return the index value of the а and А chars of reverse', () => {
    var indexOfa = service.getReverseCharIndex('а');

    var indexOfA = service.getReverseCharIndex('А');

    expect(indexOfa).toEqual(indexOfA);
    expect(indexOfa).toEqual(33);
  });

  it('should return the index value of the б and Б chars', () => {
    var indexOfb = service.getCharIndex('ж');

    var indexOfB = service.getCharIndex('Ж');

    expect(indexOfb).toEqual(indexOfB);
    expect(indexOfb).toEqual(8);
  });

  it('should return the index value of the б and Б chars of reverse', () => {
    var indexOfb = service.getReverseCharIndex('ж');

    var indexOfB = service.getReverseCharIndex('Ж');

    expect(indexOfb).toEqual(indexOfB);
    expect(indexOfb).toEqual(26);
  });

  it('should return the 0 if could not find a char', () => {
    var index = service.getCharIndex('D');
    expect(index).toEqual(0);
  });
});
