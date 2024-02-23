import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListPageComponent } from './components/blog-pages/blog-list-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogListPageComponent
      },
      {
        path: ':slug',
        component: BlogListPageComponent,
      },
      {
        path: '**',
        component: BlogListPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPagesRoutingModule { }
