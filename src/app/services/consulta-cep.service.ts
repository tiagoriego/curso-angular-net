import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaCep } from '../interfaces/consulta-cep';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  private baseUrl = 'https://cep.awesomeapi.com.br/json'

  constructor(private httpCliente: HttpClient) { }

  obterPorCep(cep: string): Observable<ConsultaCep> {
    return this.httpCliente.get<ConsultaCep>(`${this.baseUrl}/${cep}`)
  }
}
