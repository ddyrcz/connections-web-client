import { Injectable } from '@angular/core';
import { Post } from 'app/shared/model/post.model';
import { HttpClient } from '@angular/common/http';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';
import { PostsNumberToDownloadCalculator } from 'app/posts-table/posts-table/services/posts-number-to-download-calculator.service';

import { List } from 'linqts';

import 'rxjs/add/operator/do';

@Injectable()
export class PostsTableService {
  private oldestPost: Post | undefined = undefined;

  constructor(private http: HttpClient,
    private serviceAddressProvider: ServiceAddressProvider,
    private postsNumberToDownloadCalculator: PostsNumberToDownloadCalculator) { }

  getPosts(): Promise<Post[]> {
    const postsCreatedBefore = this.oldestPost ?
      this.oldestPost.creationDate :
      new Date();

    return this.http.get<Post[]>
      (`${this.serviceAddressProvider.serviceAddress}/api/posts?createdBefore=${postsCreatedBefore}&take=${this.postsNumberToDownloadCalculator.calculatePostsNumberToDownload()}`)
      .do(posts => {
        const postsList = new List<Post>(posts);
        this.oldestPost = postsList
          .LastOrDefault();
      })
      .toPromise();
  }
}
