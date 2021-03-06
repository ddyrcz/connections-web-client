import { Injectable } from '@angular/core';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenStorage } from 'app/core/services/token-storage.service';
import { User } from 'app/shared/model/user.model';
import { ApplicationDataService } from 'app/core/services/application-data.service';

import { plainToClass } from "class-transformer";
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private readonly http: HttpClient,
    private readonly serviceAddressProvider: ServiceAddressProvider,
    private tokenStorage: TokenStorage,
    private applicationData: ApplicationDataService,
    private router: Router) { }

  login(email: string, password: string): Promise<void> {
    return this.http.post<User>(`${this.serviceAddressProvider.serviceAddress}/auth/login?email=${email}&password=${password}`, null, { observe: "response" })
      .map(response => {
        this.tokenStorage.token = response.headers.get('x-access-token')

        if (response.body) {
          this.applicationData.loggedInUser = plainToClass(User, response.body)
        }
      })
      .toPromise()
  }

  register(user: User): Promise<User> {
    return this.http.post<User>(`${this.serviceAddressProvider.serviceAddress}/auth/register`, user)
      .toPromise()
  }

  logout() {
    this.tokenStorage.token = null;
    this.applicationData.loggedInUser = null;
    this.router.navigateByUrl('login')
  }
}
