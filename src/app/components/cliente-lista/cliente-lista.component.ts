import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit {
  public cliente: Cliente[] = [];
  public modalRef?: BsModalRef;
  public clienteId: number = 0;
  public searchText: string = '';

  constructor(
    private clienteSevice: ClienteService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  onRemoveCliente(template: TemplateRef<void>, id: number) {
    this.clienteId = id;
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.loadCliente();
  }

  loadCliente() {
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
    this.router.navigate(['cadastro-cliente']);
  }

  onConfirmaRemover(): void {
    this.clienteSevice.delete(this.clienteId).subscribe({
      next: () => {
        this.loadCliente();
        this.modalRef?.hide();
      },
    });
  }

  onDesisteRemover(): void {
    this.modalRef?.hide();
  }

  onEditarCliente(id: string) {
    this.router.navigateByUrl(`/editar-cliente/${id}`);
  }
}
