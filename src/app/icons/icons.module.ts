import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Github, Linkedin, Twitter } from 'angular-feather/icons';

const icons = {
  Twitter,
  Linkedin,
  Github,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
