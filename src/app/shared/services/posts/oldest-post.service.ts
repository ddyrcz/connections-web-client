import { Injectable } from '@angular/core';
import { List } from 'linqts';
import { Post } from 'app/shared/model/post.model';
import { DateService } from 'app/core/date.service';

@Injectable()
export class OldestPostService {

  private oldestPost: Post | undefined = undefined;

  constructor(private dateService: DateService) { }

  updateOldestPost(posts: Post[]) {
    if (posts.length > 0) {
      const postsList = new List<Post>(posts.slice());
      this.oldestPost = postsList
        .OrderBy(x => x.createdAt)
        .FirstOrDefault();
    }
  }

  private getOldersPostCreationDateOrCurrent(): Date {
    return this.oldestPost ?
      this.oldestPost.createdAt :
      new Date();
  }

  getOldestPostCreationDateAsString(): string {
    const oldersPostCreationDateOrNow = this.getOldersPostCreationDateOrCurrent();
    return this.dateService.toURIEncodedISO8601(oldersPostCreationDateOrNow);
  }

  reset() {
    this.oldestPost = undefined;
  }
}
