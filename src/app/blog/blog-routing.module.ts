import { NgModule } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: ':id',
    component: BlogPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule { }
