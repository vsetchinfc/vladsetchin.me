import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { SmulePlayerComponent } from './projects/projects/smule-player/smule-player.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog-pages.module').then(m => m.BlogPagesModule),
      },
      {
        path: 'projects',
        children: [
          {
            path: '', component: ProjectsListComponent
          },
          {
            path: 'smule-player',
            component: SmulePlayerComponent
          }
        ]
        //loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
