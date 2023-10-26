import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { AboutComponent } from './about.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        HeaderComponent
      ],
      providers: [
        HttpClient,
        HeaderComponent,
        HttpHandler
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
