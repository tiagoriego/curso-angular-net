import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.interceptor';

export const HttpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true,
  },
];
