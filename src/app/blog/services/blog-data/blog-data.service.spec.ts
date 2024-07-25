import { TestBed } from '@angular/core/testing';

import { BlogDataService } from './blog-data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BlogDataService', () => {
  let service: BlogDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        HttpClient,
        HttpHandler,
        BlogDataService
      ]
    });
    service = TestBed.inject(BlogDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get in httpClient', () => {
    var httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'get').and.callThrough();
    service.loadBlogData();

    expect(httpClient.get).toHaveBeenCalled();
  });
});
