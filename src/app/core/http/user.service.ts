import { Injectable } from '@angular/core';
import { User } from 'app/shared/model/user.model';
import { HttpClient } from '@angular/common/http';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpClient,
    private readonly serviceAddressProvider: ServiceAddressProvider) { }

  getUsers(query: string): Promise<User[]> {
    return this.http.get<User[]>(`${this.serviceAddressProvider.serviceAddress}/api/users?query=${query}&createdAt=&take=10`)
      .toPromise();
  }
}
