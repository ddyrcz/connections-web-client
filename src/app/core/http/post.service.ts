import { Injectable } from '@angular/core';
import { Post } from 'app/shared/model/post.model';
import { HttpClient } from '@angular/common/http';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';

@Injectable()
export class PostService {

  constructor(private readonly http: HttpClient,
    private readonly serviceAddressProvider: ServiceAddressProvider) { }

  publishPost(post: Post): Promise<Post> {
    return this.http.post<Post>(`${this.serviceAddressProvider.serviceAddress}/account/posts`, post)
      .toPromise()
  }

}
