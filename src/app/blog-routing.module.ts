import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmulePlayerComponent } from './projects/projects/smule-player/smule-player.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'blog',
            loadChildren: () => import('./blog/blog-pages.module').then(m => m.BlogPagesModule),
          },
          {
            path: 'projects',
            loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
          },
        ]
      },
    ]
  },
  {
    path: 'projects/smule-player',
    component: SmulePlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
