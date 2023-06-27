import { AfterViewInit, Component, Input } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {
  @Input() linkColour!: string;

  constructor(private blogConfigService: BlogConfigService) {
    this.linkColour = "rgba(32, 97, 150, 1)";
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
}
