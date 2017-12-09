import { Injectable } from '@angular/core';
import { Post } from 'app/shared/model/post.model';
import { HttpClient } from '@angular/common/http';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';
import { PostsNumberToDownloadCalculator } from 'app/posts-table/posts-table/services/posts-number-to-download-calculator.service';

import { List } from 'linqts';

import 'rxjs/add/operator/do';
import { DateService } from 'app/core/date.service';

@Injectable()
export class PostsTableService {
  private oldestPost: Post | undefined = undefined;

  constructor(private http: HttpClient,
    private serviceAddressProvider: ServiceAddressProvider,
    private postsNumberToDownloadCalculator: PostsNumberToDownloadCalculator,
    private dateService: DateService) { }


  private getOldersPostCreationDateOrNow(): Date {
    return this.oldestPost ?
      this.oldestPost.creationDate :
      new Date();
  }

  private getOldestPostCreationDateAsString(): string {
    const oldersPostCreationDateOrNow = this.getOldersPostCreationDateOrNow();
    return this.dateService.toISO8601(oldersPostCreationDateOrNow);
  }

  getPosts(): Promise<Post[]> {
    const oldestPostCreationDateAsString: string = this.getOldestPostCreationDateAsString();
    const numberOfPostToDownload = this.postsNumberToDownloadCalculator.calculatePostsNumberToDownload();

    return this.http.get<Post[]>
      (`${this.serviceAddressProvider.serviceAddress}/api/posts?createdBefore=${oldestPostCreationDateAsString}&take=${numberOfPostToDownload}`)
      .do(posts => {
        const postsList = new List<Post>(posts);
        this.oldestPost = postsList
          .LastOrDefault();
      })
      .toPromise();
  }
}
