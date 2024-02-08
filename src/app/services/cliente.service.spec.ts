import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Cliente } from '../interfaces/cliente';
import { BASE_URL_CLIENT_API } from '../env/env';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpMock: HttpTestingController;
  let baseUrl = BASE_URL_CLIENT_API;
  const dataCliente: Cliente[] = [
    {
      id: 1,
      nome: 'abc',
      email: 'abc@abc',
      telefone: '1111111',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(ClienteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all clientes', () => {
    service.getAll().subscribe((result) => expect(result).toBe(dataCliente));
    const req = httpMock.expectOne(`${baseUrl}/cliente`);
    expect(req.request.method).toEqual('GET');
    req.flush(dataCliente);
  });
});
