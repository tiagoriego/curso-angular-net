import { TestBed } from '@angular/core/testing';

import { AppInterceptor } from './app.interceptor';
import { AppService } from '../services/app.service';
import { LoginService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AppInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: AppInterceptor = TestBed.inject(AppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
