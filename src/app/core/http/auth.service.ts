import { Injectable } from '@angular/core';
import { ServiceAddressProvider } from 'app/core/http/service-address-provider.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenStorage } from 'app/core/services/token-storage.service';

interface TokenResult {
  token: string
}

@Injectable()
export class AuthService {

  constructor(private readonly http: HttpClient,
    private readonly serviceAddressProvider: ServiceAddressProvider,
    private tokenStorage: TokenStorage) { }

  login(email: string, password: string): Promise<void> {
    return this.http.post<TokenResult>(`${this.serviceAddressProvider.serviceAddress}/auth?email=${email}&password=${password}`, null)
      .map((result) => {
        this.tokenStorage.token = result.token
      })
      .toPromise()
  }

}
