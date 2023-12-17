import { TestBed } from '@angular/core/testing';

import { ReverseCipherService } from './reverse-cipher.service';

describe('ReverseCipherService', () => {
  let service: ReverseCipherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReverseCipherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the index value of the t and T chars of reverse', () => {
    var indexOft = service.getCharIndex('t');

    var indexOfT = service.getCharIndex('T');

    expect(indexOft).toEqual(indexOfT);
    expect(indexOft).toEqual(7);
  });
});
