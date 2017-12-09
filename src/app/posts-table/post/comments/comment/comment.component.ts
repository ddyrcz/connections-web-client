import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'app/shared/model/comment.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
