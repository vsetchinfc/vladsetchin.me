import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BlogRoutingModule
  ],
  providers: [],
  bootstrap: [BlogComponent]
})
export class BlogModule { }
