import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';
import { LoginService } from '../services/login.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    private appService: AppService,
    private loginService: LoginService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const appInfo = this.appService.getApp();
    const reqAppInfo = request.clone({
      headers: request.headers
        .set('x-app-version', appInfo.version)
        .set('x-app-name', appInfo.name),
    });
    const authToken = this.loginService.getToken();
    if (authToken) {
      const reqAuth = reqAppInfo.clone({
        headers: reqAppInfo.headers.set('Authorization', `Bearer ${authToken}`),
      });
      return next.handle(reqAuth);
    }
    return next.handle(reqAppInfo);
  }
}
