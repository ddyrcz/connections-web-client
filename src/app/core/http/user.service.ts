import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user.model';
import { HttpClient } from '@angular/common/http';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';
import { Post } from 'app/shared/model/post.model';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpClient,
    private readonly serviceAddressProvider: ServiceAddressProvider) { }

  getUsers(query: string): Promise<User[]> {
    return this.http.get<User[]>(`${this.serviceAddressProvider.serviceAddress}/api/users?query=${query}&createdBefore=&take=10`)
      .toPromise();
  }

  getUserData(id: string): Promise<User> {
    return this.http.get<User>(`${this.serviceAddressProvider.serviceAddress}/api/users/${id}`)
      .toPromise();
  }

  getUserPosts(id: string): Promise<Post[]> {
    return this.http.get<Post[]>(`${this.serviceAddressProvider.serviceAddress}/api/users/${id}/posts?createdBefore=&take=10`)
      .toPromise();
  }
}
