import { TestBed } from '@angular/core/testing';
import { BlogConfigService } from './blog-config.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BlogConfigService', () => {
  let service: BlogConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        HttpClient,
        HttpHandler,
        BlogConfigService
      ]
    });
    service = TestBed.inject(BlogConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get in httpClient', () => {
    var httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'get').and.callThrough();
    service.loadBlogConfig();

    expect(httpClient.get).toHaveBeenCalled();
  });
});
