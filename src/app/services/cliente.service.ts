import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL_CLIENT_API } from '../env/env';
import { Cliente } from '../interfaces/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  private baseUrl = BASE_URL_CLIENT_API
  constructor(private httpClient: HttpClient) {}

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'x-app-date': (new Date().toISOString())
      })
    }
  } 

  getAll(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}/cliente`, this.getHttpOptions())
  }

  getById(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseUrl}/cliente/${id}`)
  }

  save(cliente: Partial<Cliente>) {
    return this.httpClient.post<Cliente>(`${this.baseUrl}/cliente`, cliente)
  }

  delete(id: number): Observable<{}> {
    return this.httpClient.delete(`${this.baseUrl}/cliente/${id}`)
  }

  update(id: number, cliente: Partial<Cliente>) {
    return this.httpClient.patch<Cliente>(`${this.baseUrl}/cliente/${id}`, cliente)
  }
}
