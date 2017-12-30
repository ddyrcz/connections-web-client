import { Injectable } from '@angular/core';
import { Post } from 'app/shared/model/post.model';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';
import { HttpClient } from '@angular/common/http';
import { OldestPostService } from 'app/shared/services/posts/oldest-post.service';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserPostsService {
  constructor(private readonly http: HttpClient,
    private readonly serviceAddressProvider: ServiceAddressProvider,
    private oldestPostService: OldestPostService) { }

  getUserPosts(id: string): Promise<Post[]> {
    const oldestPostCreationDateAsString: string = this.oldestPostService.getOldestPostCreationDateAsString()

    return this.http.get<Post[]>(`${this.serviceAddressProvider.serviceAddress}/users/${id}/posts?createdBefore=${oldestPostCreationDateAsString}&take=10`)
      .map(posts => plainToClass(Post, posts))
      .do(posts => {
        this.oldestPostService.updateOldestPost(posts)
      })
      .toPromise();
  }

}
