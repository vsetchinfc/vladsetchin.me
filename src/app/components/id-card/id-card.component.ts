import { Component } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss']
})
export class IdCardComponent {
  fullName = BlogConfigService.blogConfig.fullName;
  occupation = BlogConfigService.blogConfig.occupation;
}
