import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    BlogComponent,
    HeaderComponent,
    FooterComponent
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
