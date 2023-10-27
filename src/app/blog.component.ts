import { Component } from '@angular/core';
import { BlogConfigService } from './services';

@Component({
  selector: 'blog-root',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  title = 'vladsetchin.me';
}
