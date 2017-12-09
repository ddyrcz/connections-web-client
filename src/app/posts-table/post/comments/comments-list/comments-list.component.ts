import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/shared/model/post.model';
import { CommentService } from 'app/core/http/comment.service';
import { Comment } from 'app/shared/model/comment.interface';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input()
  post: Post;

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getPostComments(this.post.id)
      .then(comments => this.comments = comments);
  }

}
