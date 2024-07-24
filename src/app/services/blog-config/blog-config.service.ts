import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface BlogConfig {
  blogVersion: string;
  fullName: string;
  occupation: string;
  blogName: string;
  githubSocialContact: string;
  twitterSocialContact: string;
  linkedinSocialContact: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogConfigService {

  static blogConfig: BlogConfig = {} as BlogConfig;

  constructor(private http: HttpClient) { }

  loadBlogConfig() {
    return this.http
      .get('./assets/config.json')
      .toPromise()
      .then((data) => {
        BlogConfigService.blogConfig = <BlogConfig>data;
      });
  }
}
