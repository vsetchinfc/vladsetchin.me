import { TestBed } from '@angular/core/testing';

import { BlogConfigService } from './blog-config.service';

describe('BlogConfigService', () => {
  let service: BlogConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
