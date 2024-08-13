// import { Injectable } from '@angular/core';
// import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpResponse} from '@angulsr/common/http';

// @Injectable()
// export class LoggingInterceptor implements HttpInterceptor{
//     interceptor(
//         next: HttpHandler,
//         request: HttpRequest
//     ): Observable<HttpEvent<any>>{
//         console.log("Outgoing request", request);
//     }

//     return next.handle(request)
// }

import { Injecttable } from '@angular/core';
import{ HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';

@Injecttable()
export class HttpHeaders implements HttpInterceptor{
    interept(
        next: HttpHandler,
        request: HttpRequest
    ): Observable<HttpEvent<any>>
    const GUID = "KLSJKCBSDJBCJDSCSJKDBC";
    const modified = request.clone({
        setHeaders: {
            GUID
        }
    })
    return next.handle(modifiedm)   
}