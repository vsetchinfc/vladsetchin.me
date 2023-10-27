import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialLinksComponent } from './social-links.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SocialLinksComponent', () => {
  let component: SocialLinksComponent;
  let fixture: ComponentFixture<SocialLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocialLinksComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(SocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
