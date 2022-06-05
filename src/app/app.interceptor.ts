import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDIxZjdmYjBlOTdlYThhYThlNjdhOGE5ZDVhMDAwNyIsInN1YiI6IjYyOTUxZDdiMGYyMWM2MTUzNzJkZDJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y-XSfLB1AVhtZxWK42MeOdhx5m4KxJBV7XraTrq3ld0'

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {Authorization: `Bearer ${this._token}`}
    })
    return next.handle(request);
  }
}
