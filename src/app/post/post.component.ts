import { Component, OnInit, Input } from '@angular/core';

import { PostService } from './../shared/service/post.service';
import { CommentService } from './../shared/service/comment.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  private post;

  private comments;
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
}
