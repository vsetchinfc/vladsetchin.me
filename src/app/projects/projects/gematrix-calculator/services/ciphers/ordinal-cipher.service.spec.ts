import { TestBed } from '@angular/core/testing';

import { OrdinalCipherService } from './ordinal-cipher.service';

describe('OrdinalCipherService', () => {
  let service: OrdinalCipherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdinalCipherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ordinal cipher should return the reduced number of the index', () => {
    expect(service.enLetters.length).toBeGreaterThan(0);
    expect(service.ruLetters.length).toBeGreaterThan(0);
  });

  it('it should return index of en char a and A', () => {
    var indexOfa = service.getCharIndex('a');

    var indexOfA = service.getCharIndex('A');

    expect(indexOfa).toEqual(indexOfA);
    expect(indexOfa).toEqual(1);
  });

  it('it should return index of ru char а and А', () => {
    var indexOfa = service.getCharIndex('а');

    var indexOfA = service.getCharIndex('А');

    expect(indexOfa).toEqual(indexOfA);
    expect(indexOfa).toEqual(1);
  });

  it('should return the index value of the ж and Ж chars', () => {
    var indexOfb = service.getCharIndex('ж');

    var indexOfB = service.getCharIndex('Ж');

    expect(indexOfb).toEqual(indexOfB);
    expect(indexOfb).toEqual(8);
  });

  it('should return the index value of the t and T chars', () => {
    var indexOft = service.getCharIndex('t');

    var indexOfT = service.getCharIndex('T');

    expect(indexOft).toEqual(indexOfT);
    expect(indexOft).toEqual(20);
  });
});
