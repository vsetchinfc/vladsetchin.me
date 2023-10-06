import { AfterViewInit, Component, Input } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {
  @Input() linkColour!: string;

  githubSocialContact = this.blogConfigService.githubSocialContact;
  linkedinSocialContact = this.blogConfigService.linkedinSocialContact;
  twitterSocialContact = this.blogConfigService.twitterSocialContact;

  constructor(private blogConfigService: BlogConfigService) {
    this.linkColour = "rgba(32, 97, 150, 1)";
  }
}
