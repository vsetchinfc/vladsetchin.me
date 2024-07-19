import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { BlogComponent } from "./blog/blog/blog.component";
import { BlogRoutingModule } from "./blog/blog-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		BlogComponent
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