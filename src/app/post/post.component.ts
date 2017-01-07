import { Component, OnInit, Input } from '@angular/core';

import { PostService  } from './../service/post.service' ;
import { CommentService  } from './../service/comment.service' ;

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  private post;

  private comments;

  constructor(private postService : PostService,
              private commentService : CommentService) { }

  ngOnInit() {
    this.post = this.postService.getPost(1);
    this.comments = this.commentService.getComments(); 
  }
}
