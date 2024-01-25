import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit {
  public cliente: Cliente[] = [];

  constructor(private clienteSevice: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.clienteSevice.getAll().subscribe({
      next: (result: Cliente[]) => {
        this.cliente = result;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Ocorreu um erro ao listar os clientes:', error.message);
      },
    });
  }

  onCadatrarCliente(): void {
    this.router.navigate(['cadastro-cliente'])
  }
}
