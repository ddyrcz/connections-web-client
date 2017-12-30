import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { GrowlService } from "app/core/growl/growl.service";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private growl: GrowlService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch(response => {
            if (response instanceof HttpErrorResponse) {
                console.log('handled!');
                this.growl.showError('Wystąpił nieoczekiwany błąd')
            }

            return Observable.throw(response);
        })
    }
}