import { Component } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  get blogName() {
    return BlogConfigService.blogConfig.blogName;
  }
}
