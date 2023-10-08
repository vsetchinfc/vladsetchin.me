import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SmulePlayerComponent } from './projects/smule-player/smule-player.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
    ProjectsListComponent,
    SmulePlayerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
