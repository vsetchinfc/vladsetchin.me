import { Component } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private blogConfigService: BlogConfigService) { }

  get fullName() {
    return this.blogConfigService.fullName;
  }

  get blogVersion() {
    return this.blogConfigService.blogVersion;
  }
}
