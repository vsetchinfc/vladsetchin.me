import { Component } from '@angular/core';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  get blogName() {
    return 'VLADSETCHIN.ME'; //this.blogConfigService.blogName;
  }
}
