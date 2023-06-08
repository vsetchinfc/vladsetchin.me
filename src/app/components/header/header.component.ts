import { Component } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private blogConfigService: BlogConfigService) {

  }

  get blogName() {
    return this.blogConfigService.blogName;
  }
}
