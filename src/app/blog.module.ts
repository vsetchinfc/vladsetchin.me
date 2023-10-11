import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { IdCardComponent } from './components/id-card/id-card.component';
import { IconsModule } from './icons/icons.module';
import { BlogConfigService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

const BLOG_CONFIG_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [BlogConfigService],
    useFactory: (blogConfigService: BlogConfigService) => {
      return () => {
        return blogConfigService.loadBlogConfig();
      };
    },
  },
];

const PROVIDERS = [...BLOG_CONFIG_PROVIDER];

@NgModule({
  declarations: [
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    IdCardComponent,
    SocialLinksComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    HttpClientModule,
    IconsModule,
    BrowserModule,
    BlogRoutingModule,
    NgbModule,
    ScullyLibModule
  ],
  providers: [...PROVIDERS],
  bootstrap: [BlogComponent]
})
export class BlogModule { }
