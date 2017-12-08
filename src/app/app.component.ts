import { Component, OnInit } from '@angular/core';
import { PostService } from './shared/service/post.service';
import { Post } from './shared/model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
