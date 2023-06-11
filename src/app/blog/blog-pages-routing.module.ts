import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPagesComponent } from './components/blog-pages/blog-pages.component';

const routes: Routes = [
  {
    path: ':slug',
    component: BlogPagesComponent,
  },
  {
    path: '**',
    component: BlogPagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPagesRoutingModule { }
