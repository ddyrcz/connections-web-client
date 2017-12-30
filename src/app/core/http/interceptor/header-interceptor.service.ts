import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenStorage } from 'app/core/services/token-storage.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorage) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.tokenStorage.token) return next.handle(req);

    const authReq = req.clone({ headers: req.headers.set('x-access-token', this.tokenStorage.token) });

    return next.handle(authReq);
  }
}
