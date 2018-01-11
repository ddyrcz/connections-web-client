import { Component, OnInit } from '@angular/core';
import { PostsTableService } from 'app/posts-table/posts-table/services/posts-table.service';
import { PostsNumberToDownloadCalculator } from 'app/posts-table/posts-table/services/posts-number-to-download-calculator.service';
import { Post } from 'app/shared/model/post.model';
import { OldestPostService } from 'app/shared/services/posts/oldest-post.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from 'app/posts-table/create-post/create-post.component';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss'],
  providers: [
    PostsTableService,
    PostsNumberToDownloadCalculator,
    OldestPostService
  ]
})
export class PostsTableComponent implements OnInit {

  posts: Post[] = [];

  constructor(private tableService: PostsTableService,
    private dialog: MatDialog) { }

  async ngOnInit() {
    await this.getPosts();
  }

  private async getPosts() {
    const newPosts = await this.tableService.getPosts();
    this.posts.push(...newPosts);
  }

  showCreatePostWindow() {
    const dialogRef = this.dialog.open(CreatePostComponent)

    dialogRef.afterClosed().subscribe(post => {
      if (post) {
        this.posts.splice(0, 0, post)
      }
    });
  }

  onTableScroll() {
    this.getPosts();
  }

  noPosts() {
    return this.posts.length == 0
  }
}
