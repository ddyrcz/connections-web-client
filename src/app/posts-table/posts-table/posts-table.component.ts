import { Component, OnInit } from '@angular/core';
import { PostsTableService } from 'app/posts-table/posts-table/services/posts-table.service';
import { PostsNumberToDownloadCalculator } from 'app/posts-table/posts-table/services/posts-number-to-download-calculator.service';
import { Post } from 'app/shared/model/post.model';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss'],
  providers: [
    PostsTableService,
    PostsNumberToDownloadCalculator
  ]
})
export class PostsTableComponent implements OnInit {

  posts: Post[] = [];

  constructor(private tableService: PostsTableService) { }

  async ngOnInit() {
    await this.getPosts();
  }

  private async getPosts() {
    const newPosts = await this.tableService.getPosts();
    this.posts.push(...newPosts);
  }
}
