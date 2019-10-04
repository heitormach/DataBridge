import { GlobalService } from './../services/global.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
    global: GlobalService;

    constructor(global: GlobalService) {
        this.global = global;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // JSON.stringify(token[0].jwt))
        // let jwt = JSON.stringify(currentUser[0].jwt).replace('"','').replace('"','')
        request = request.clone({
            setHeaders: {
                usuario: `${this.global.usuario.login}`
            }
        });

        return next.handle(request);
    }
}