import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AccessToken, User } from '../interfaces/user-token';
import { BASE_URL_CLIENT_API } from '../env/env';
import { Observable, of } from 'rxjs';

describe('LoginService', () => {
  let serviceLogin: LoginService;
  let httpMock: HttpTestingController;
  let user: User = {
    id: 1,
    email: 'teste@teste.com',
    name: 'Teste Teste',
    roles: ['CADASTRAR_CLIENTE'],
  };
  let accessToken: AccessToken = {
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.{0}.yoBZALMl6-L2dnd40s6W5_UnRc1LJNoesFQ3TuOXYzA',
    user,
  };
  let baseUrl = BASE_URL_CLIENT_API;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    serviceLogin = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(serviceLogin).toBeTruthy();
  });

  it('authentication user', () => {
    serviceLogin
      .auth(user.email, '1234')
      .subscribe((result) => expect(result).toBe(accessToken));
    const req = httpMock.expectOne(`${baseUrl}/login`);
    expect(req.request.method).toBe('POST');
    req.flush(accessToken);
  });

  it('is valid token', () => {
    const token = accessToken.accessToken;
    const today = new Date();
    today.setTime(today.getTime() + 1 * 60 * 60 * 1000);
    const obj = {
      email: user.email,
      iat: 1707346674,
      exp: parseInt((today.getTime() / 1000).toFixed()),
    };

    accessToken.accessToken = token.replace('{0}', btoa(JSON.stringify(obj)));
    serviceLogin.saveToken(accessToken);
    expect(serviceLogin.isValidToken()).toBe(true);

    obj.exp = 1707348060;
    accessToken.accessToken = token.replace('{0}', btoa(JSON.stringify(obj)));
    serviceLogin.saveToken(accessToken);
  });

  it('is not valid token', () => {
    expect(serviceLogin.isValidToken()).toBe(false);
  });

  it('soma a + b', () => {
    expect(serviceLogin.getSoma(10, 10)).toBe(20);
  });

});
