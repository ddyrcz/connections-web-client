import { Injectable } from '@angular/core';

@Injectable()
export class TokenStorage {
  private _token: string | null

  get token(): string | null {
    return localStorage.getItem('token')
  }

  set token(token: string | null) {

    if (token != null) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token')
    }
  }

}
