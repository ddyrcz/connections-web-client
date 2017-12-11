import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/shared/model/post.model';
import { CommentService } from 'app/core/http/comment.service';
import { Comment } from 'app/shared/model/comment.interface';
import { ApplicationDataService } from 'app/core/services/application-data.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input()
  post: Post;

  comments: Comment[];

  comment: string | undefined;

  constructor(private commentService: CommentService,
    public applicationData: ApplicationDataService) { }

  ngOnInit() {
    this.commentService.getPostComments(this.post.id)
      .then(comments => this.comments = comments);
  }

  addComment(comment: string) {
    var comment: Comment = {
      content: comment,
      createdAt: new Date(),
      postId: this.post.id,
      user: this.applicationData.loggedInUser
    }

    this.comment = undefined;

    this.comments.splice(0, 0, comment);
  }

}
