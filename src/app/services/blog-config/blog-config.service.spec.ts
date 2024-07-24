import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogConfigService } from './blog-config.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BlogConfigService', () => {
  let service: BlogConfigService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient,
        HttpHandler,
        BlogConfigService
      ]
    });
    service = TestBed.inject(BlogConfigService);
    httpTestingController = TestBed.inject(HttpTestingController);
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
