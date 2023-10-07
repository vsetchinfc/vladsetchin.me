import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface BlogConfig {
  blog_version: string;
  full_name: string;
  occupation: string;
  blog_name: string;
  github_social_contact: string;
  twitter_social_contact: string;
  linkedin_social_contact: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogConfigService {

  private blogConfig!: BlogConfig;

  constructor(private http: HttpClient) { }

  loadBlogConfig() {
    return this.http
      .get('./assets/config.json')
      .toPromise()
      .then((data) => {
        this.blogConfig = <BlogConfig>data;
      });
  }

  get blogVersion() {
    return this.blogConfig.blog_version;
  }

  get fullName() {
    return this.blogConfig.full_name;
  }

  get occupation() {
    return this.blogConfig.occupation;
  }

  get blogName() {
    return this.blogConfig.blog_name;
  }

  get twitterSocialContact() {
    return this.blogConfig.twitter_social_contact;
  }

  get githubSocialContact() {
    return this.blogConfig.github_social_contact;
  }

  get linkedinSocialContact() {
    return this.blogConfig.linkedin_social_contact;
  }
}
