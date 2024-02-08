import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL_CLIENT_API } from '../env/env';
import { Observable, Subscriber } from 'rxjs';
import { AccessToken, User } from '../interfaces/user-token';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = BASE_URL_CLIENT_API;

  constructor(private httpClient: HttpClient) {}

  auth(email: string, password: string): Observable<AccessToken> {
    return this.httpClient.post<AccessToken>(`${this.baseUrl}/login`, {
      email,
      password,
    });
  }

  saveToken(token: AccessToken) {
    localStorage.setItem('token', token.accessToken);
  }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser(): User | null {
    try {
      const userSaved = localStorage.getItem('user') ?? ''
      return JSON.parse(userSaved) as User
    } catch (_) {
      return null
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isValidToken(): boolean {
    const tokenJwt = localStorage.getItem('token')
    if (!tokenJwt) return false
    try {
      const parseToken = atob(tokenJwt.split('.')[1])
      const objToken = JSON.parse(parseToken)
      const exp = parseInt(objToken['exp'])
      return (new Date(exp * 1000)) > (new Date())
    } catch (_) {
      return false
    }
  }

  getRoles(): Observable<string[]> | null {
    const user = this.getUser()
    if (!user) return null

    return new Observable<string[]>(subscribe => {
      this.httpClient.get<User>(`${this.baseUrl}/users/${user.id}`).subscribe({
        next: (data: User) => {
          subscribe.next(data.roles)
        }, error: () => {
          subscribe.next([''])
        }
      })
    })
  }

  getSoma(a: number, b: number): number {
    return a + b
  }

  logout() {
    localStorage.clear()
  }
}
