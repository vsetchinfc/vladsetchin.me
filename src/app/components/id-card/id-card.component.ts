import { Component } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss']
})
export class IdCardComponent {
  constructor(private blogConfigService: BlogConfigService) {
  }

  fullName = this.blogConfigService.fullName;
  occupation = this.blogConfigService.occupation;
}
