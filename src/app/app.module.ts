import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { BlogListComponent } from "./blog/blog-list/blog-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";

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
	bootstrap: [AppComponent]
})
export class AppModule { }