import { TestBed } from '@angular/core/testing';

import { BlogConfigService } from './blog-config.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BlogConfigService', () => {
  let service: BlogConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(BlogConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load blog config', () => {
    service.loadBlogConfig();

    expect(service.blogName).toEqual('AAA');
  })
});
