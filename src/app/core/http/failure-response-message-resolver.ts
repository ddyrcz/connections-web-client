import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export class FailureResponseMessageResolver {
    pullMessageAndThrow(error: HttpErrorResponse): Observable<any> {
        return Observable.throw(this.pullMessage(error))
    }

    pullMessage(error: HttpErrorResponse): string {
        let readableMessage: string;

        if (error.status == 0) {
            return 'Nie udało się połączyć z serwerem'
        }

        try {
            let message = this.getMessageFromResponseBody(error);
            return message;
        } catch (err) {
            return "Wystąpił nieoczekiwany błąd";
        }
    }

    private getMessageFromResponseBody(error: HttpErrorResponse): string {
        let contentType = this.getContentType(error);

        switch (contentType) {
            case 'text/plain; charset=utf-8':
                return this.getMessageFromStringContent(error);
            case 'application/json; charset=utf-8':
                return this.getMessageFromJsonContent(error);
            default:
                return 'Wystąpił problem'
        }
    }

    private getContentType(error: HttpErrorResponse): string {
        let defaultContentType = 'text/plain; charset=utf-8';

        if (!this.hasContentTypeSpecified(error)) {
            return defaultContentType;
        }

        return error.headers.get('content-type') || defaultContentType
    }

    private hasContentTypeSpecified(error: HttpErrorResponse): error is HttpErrorResponse & { headers: Headers } {
        if (error.headers == undefined) return false;
        return error.headers.has('content-type');
    }

    private getMessageFromStringContent(error: HttpErrorResponse): string {
        return error.message
    }

    private getMessageFromJsonContent(error: HttpErrorResponse): string {
        let errorBody = error.error

        if (typeof errorBody === 'string') {
            errorBody = JSON.parse(errorBody)
        }

        if (errorBody.message) {
            return errorBody.message
        } else {
            return "Wystąpił nieoczekiwany błąd";
        }
    }
}
