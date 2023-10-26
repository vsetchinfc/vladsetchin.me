import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BlogConfigService } from 'src/app/services';

class MockBlogConfigService {
  blogName = 'Mocked Blog Name';
}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: BlogConfigService, useClass: MockBlogConfigService }
      ]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
