import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { GrowlService } from "app/core/growl/growl.service";
import { Injectable } from "@angular/core";
import { FailureResponseMessageResolver } from "app/core/http/failure-response-message-resolver";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private growl: GrowlService,
        private messageResolver: FailureResponseMessageResolver) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch(response => {
            if (response instanceof HttpErrorResponse) {
                if (!response.ok) {
                    let message = this.messageResolver.pullMessage(response)
                    this.growl.showError(message);
                }
            }

            return Observable.throw(response);
        })
    }
}