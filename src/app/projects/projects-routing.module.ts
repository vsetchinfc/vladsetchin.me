import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SmulePlayerComponent } from './projects/smule-player/smule-player.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsListComponent
  }//,
  // {
  //   path: 'smule-player',
  //   component: SmulePlayerComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
