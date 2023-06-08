import { Component } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private blogConfigService: BlogConfigService) {}

  get fullName() {
    return this.blogConfigService.fullName;
  }

  get github_social_contact() {
    return this.blogConfigService.github_social_contact;
  }

  get linkedin_social_contact() {
    return this.blogConfigService.linkedin_social_contact;
  }

  get twitter_social_contact() {
    return this.blogConfigService.twitter_social_contact;
  }

  get blogVersion() {
    return this.blogConfigService.blogVersion;
  }
}
