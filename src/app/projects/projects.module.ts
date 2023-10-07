import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SmulePlayerComponent } from './projects/smule-player/smule-player.component';


@NgModule({
  declarations: [
    ProjectsListComponent,
    SmulePlayerComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
