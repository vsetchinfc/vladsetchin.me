import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogDataService, BlogPageData } from '../services/blog-data/blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  subscription = new Subscription();
  // with default value, no filter applied
  year: number = 0;
  month: string = '';
  blogPages: BlogPageData[] = [];

  constructor(
    private blogDataService: BlogDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription.add(this.route.paramMap.subscribe(params => {
      this.loadBlogPagesList()
    }));
  }

  loadBlogPagesList() {
    this.blogPages = this.blogDataService.getBlogPagesData();
  }

  getBlogPageUrl(id: string) {
    return "./blog/" + id;
  }
}
