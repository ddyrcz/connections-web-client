import { Component, OnInit, Input } from '@angular/core';

import { PostService } from './../service/post.service';
import { CommentService } from './../service/comment.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
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
  }

  getComments() {
    this.comments = this.commentService.getComments(this.post.id);
  }
}
