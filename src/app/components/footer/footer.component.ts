import { Component } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  get fullName() {
    return BlogConfigService.blogConfig.fullName;
  }

  get blogVersion() {
    return BlogConfigService.blogConfig.blogVersion;
  }
}
