import { Component, OnInit, Input } from '@angular/core';

import { CommentService } from 'app/core/http/comment.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  private comments: any[];
  private commentsCount: number;
  private likesCount: number;

  constructor(
    private commentService: CommentService) { }

  ngOnInit() {

  }

}
