import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    // path: '',
    // children: [
    //   {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
      },
      // {
      //   path: 'projects',
      //   loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
      // },
    ]
  },
  //]
  //},
  // {
  //   path: 'projects/smule-player',
  //   component: SmulePlayerComponent
  // },
  // {
  //   path: 'projects/reaction-trainer',
  //   component: ReactionTrainerComponent
  // },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
