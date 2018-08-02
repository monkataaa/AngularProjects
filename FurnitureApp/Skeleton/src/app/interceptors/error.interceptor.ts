import {
    HttpResponse,
    HttpRequest,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http'
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FurnitureService } from '../furniture/furniture.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private toastr : ToastrService, 
        private router : Router,
            ){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        return next.handle(req)
            .pipe(catchError((err) => {
                switch (err.status) {
                    case 401:
                    console.log('err 401 =>', err);
                    console.log('err.error 401 =>',err.error);
                    this.toastr.error(err.error.message, "Warning")
                        break;
                    case 400:
                    console.log('err.error 400 =>',err.error);
                    const message = Object.keys(err.error.errors)
                            .map(e => err.error.errors[e])
                            .join("\r\n")
                    this.toastr.error(message, "Warning !")
                        break;
                }
                return throwError(err) 
            }))
    }

} 