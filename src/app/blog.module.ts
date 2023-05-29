import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BlogRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [BlogComponent]
})
export class BlogModule { }
