import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPagesRoutingModule } from './blog-pages-routing.module';
import { BlogPagesComponent } from './components/blog-pages/blog-pages.component';
import {ScullyLibModule} from '@scullyio/ng-lib';


@NgModule({
  declarations: [
    BlogPagesComponent
  ],
  imports: [
    CommonModule,
    BlogPagesRoutingModule,
    ScullyLibModule
  ]
})
export class BlogPagesModule { }
