import { APP_INITIALIZER, NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { BlogListComponent } from "./blog/blog-list/blog-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { BlogConfigService } from "./services";
import { BlogDataService } from "./blog/services/blog-data/blog-data.service";

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

const BLOG_DATA_PROVIDER = [
	{
		provide: APP_INITIALIZER,
		multi: true,
		deps: [BlogDataService],
		useFactory: (blogDataService: BlogDataService) => {
			return () => {
				return blogDataService.loadBlogData();
			};
		},
	},
];

const PROVIDERS = [...BLOG_CONFIG_PROVIDER, BLOG_DATA_PROVIDER];

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		BlogListComponent,
		AboutComponent
	],
	imports: [
		HttpClientModule,
		AppRoutingModule,
		BrowserModule,
		RouterOutlet
	],
	providers: [...PROVIDERS],
	bootstrap: [AppComponent]
})
export class AppModule { }