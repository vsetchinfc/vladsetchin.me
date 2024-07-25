import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface BlogPageData {
  id: string,
  title: string,
  description: string,
  timeToRead: string,
  mdFileName: string,    // markdown file name
  publishedDate: Date,
  authorName: string,
  published: boolean,
  tags: string[]
}

interface BlogData {
  blogMDsPath: string,         // path to all markdown files used in blog
  numberOfFeaturedPosts: number,
  numberOfPostsPerPage: number,
  blogPages: BlogPageData[]
}

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  static blogData: BlogData = {} as BlogData;

  constructor(private http: HttpClient) { }

  loadBlogData() {
    this.http
      .get('./assets/blog-data.json')
      .toPromise()
      .then((data) => {
        BlogDataService.blogData = <BlogData>data;
      });
  }
}
