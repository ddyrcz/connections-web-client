import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';

import { Comment } from '../../shared/model/comment.interface'

@Injectable()
export class CommentService {

  constructor(private http: HttpClient,
    private serviceAddressProvider: ServiceAddressProvider) { }

  getPostComments(postId: number): Promise<Comment[]> {
    return this.http.get<Comment[]>(`${this.serviceAddressProvider.serviceAddress}/api/posts/${postId}/comments`)
      .toPromise();
  }
}
