import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/shared/model/post.model';
import { CommentService } from 'app/core/http/comment.service';
import { Comment } from 'app/shared/model/comment.interface';
import { ApplicationDataService } from 'app/core/services/application-data.service';
import { List } from 'linqts';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input()
  post: Post;

  comments: Comment[] = [];

  get isShowMoreVisible(): boolean {

    if (!this.post.comments) {
      return false
    }

    return this.comments.length < this.post.comments.length
  }

  constructor(private commentService: CommentService,
    public applicationData: ApplicationDataService) { }

  ngOnInit() {
    this.showComments();
  }

  showComments() {
    this.comments = new List<Comment>(this.post.comments)
      .Take(2)
      .ToArray()
  }

  showMoreComments() {
    const commentsToDisplay = new List<Comment>(this.post.comments)
      .Skip(this.comments.length)
      .Take(2)
      .ToArray()

    this.comments.push(...commentsToDisplay)
  }

  onCommentAdded(enteredComment: string) {
    const newComment: Comment = {
      content: enteredComment,
      createdAt: new Date(),
      postId: this.post.id,
      user: this.applicationData.loggedInUser,
      id: 0
    };

    this.comments.splice(0, 0, newComment);
  }
}
