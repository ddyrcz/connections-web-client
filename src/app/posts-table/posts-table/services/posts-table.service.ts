import { Injectable } from '@angular/core';
import { Post } from 'app/shared/model/post.model';
import { HttpClient } from '@angular/common/http';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';
import { PostsNumberToDownloadCalculator } from 'app/posts-table/posts-table/services/posts-number-to-download-calculator.service';

import { List } from 'linqts';

import { DateService } from 'app/core/date.service';
import { OldestPostService } from 'app/shared/services/posts/oldest-post.service';
import { plainToClass } from 'class-transformer';

@Injectable()
export class PostsTableService {

  constructor(private http: HttpClient,
    private serviceAddressProvider: ServiceAddressProvider,
    private postsNumberToDownloadCalculator: PostsNumberToDownloadCalculator,
    private dateService: DateService,
    private oldestPostService: OldestPostService) { }

  getPosts(): Promise<Post[]> {
    const oldestPostCreationDateAsString: string = this.oldestPostService.getOldestPostCreationDateAsString()
    const numberOfPostToDownload = this.postsNumberToDownloadCalculator.calculatePostsNumberToDownload();

    return this.http.get<Post[]>
      (`${this.serviceAddressProvider.serviceAddress}/account/posts?createdBefore=${oldestPostCreationDateAsString}&take=${numberOfPostToDownload}`)
      .map(posts => plainToClass(Post, posts))
      .do(posts => {
        this.oldestPostService.updateOldestPost(posts)
      })
      .toPromise();
  }
}
