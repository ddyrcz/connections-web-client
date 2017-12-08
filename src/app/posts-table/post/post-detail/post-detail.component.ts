import { Component, OnInit, Input } from '@angular/core';

import { PostService } from 'app/core/http/post.service';
import { CommentService } from 'app/core/http/comment.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  @Input()
  private post;

  private comments: any[];
  private commentsCount: number;
  private likesCount: number;

  constructor(
    private postService: PostService,
    private commentService: CommentService) { }

  ngOnInit() {
    this.post = this.postService.getPost(1);
    this.commentsCount = this.commentService.getCommentsCount(this.post.id);
    this.likesCount = 0;
    this.getComments();
  }

  getComments() {
    this.comments = this.commentService.getComments(this.post.id);
  }

  addComment() {
    this.comments.push(
      {
        'commentatorAvatar': 'https://ab-prod-media-assets.s3.amazonaws.com/1/profile_pictures/raghavender-mittapalli/raghavender-mittapalli-present.png',
        'date': new Date(), 'content': 'Just added',
        'commentatorName': 'Dawid', 'commentatorLastname': 'Dyrcz', isCool: true
      });
  }
}
