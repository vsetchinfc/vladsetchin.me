import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPagesRoutingModule } from './blog-pages-routing.module';
import { BlogListPageComponent } from './components/blog-pages/blog-list-page.component';
import {ScullyLibModule} from '@scullyio/ng-lib';


@NgModule({
  declarations: [
    BlogListPageComponent
  ],
  imports: [
    CommonModule,
    BlogPagesRoutingModule,
    ScullyLibModule
  ]
})
export class BlogPagesModule { }
