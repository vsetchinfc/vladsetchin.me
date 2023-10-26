import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BlogConfigService } from 'src/app/services';

class MockBlogConfigService {
  blogName = 'Mocked Blog Name';
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: BlogConfigService, useClass: MockBlogConfigService }
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
