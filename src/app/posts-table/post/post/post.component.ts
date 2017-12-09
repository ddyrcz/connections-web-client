import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/shared/model/post.model';
import { Comment } from 'app/shared/model/comment.interface';
import { CommentService } from 'app/core/http/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  ngOnInit() {

  }
}
