import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListPageComponent } from './blog-list-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BlogPagesComponent', () => {
  let component: BlogListPageComponent;
  let fixture: ComponentFixture<BlogListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogListPageComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(BlogListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
