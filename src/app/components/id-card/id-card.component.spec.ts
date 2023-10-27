import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardComponent } from './id-card.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BlogConfigService } from 'src/app/services';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('IdCardComponent', () => {
  let component: IdCardComponent;
  let fixture: ComponentFixture<IdCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        IdCardComponent
      ],
      providers: [
        BlogConfigService,
        HttpClient,
        HttpHandler
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(IdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
