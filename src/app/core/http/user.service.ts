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
    return this.http.get<User[]>(`${this.serviceAddressProvider.serviceAddress}/users?query=${query}&createdBefore=&take=10`)
      .toPromise();
  }

  getUserData(id: string): Promise<User> {
    return this.http.get<User>(`${this.serviceAddressProvider.serviceAddress}/users/${id}`)
      .toPromise();
  }

  follow(userId: string) {
    return this.http.post<void>(`${this.serviceAddressProvider.serviceAddress}/account/users/${userId}/follow`, null)
      .toPromise();
  }

  unfollow(userId: string) {
    return this.http.post<void>(`${this.serviceAddressProvider.serviceAddress}/account/users/${userId}/unfollow`, null)
      .toPromise();
  }

  register(user: User): Promise<User> {
    return this.http.post<User>(`${this.serviceAddressProvider.serviceAddress}/users`, user)
      .toPromise()
  }
}
