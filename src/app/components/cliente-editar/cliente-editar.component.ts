import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css'],
})
export class ClienteEditarComponent implements OnInit {
  public formEditarCliente: FormGroup;
  private cliente?: Cliente;

  constructor(
    private clienteSevice: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formEditarCliente = this.getForm();
  }

  ngOnInit(): void {
    this.loadCliente();
  }

  private loadCliente() {
    this.activatedRoute.params.subscribe((param) => {
      this.clienteSevice.getById(param['id']).subscribe({
        next: (cliente: Cliente) => {
          this.cliente = cliente;
          this.formEditarCliente = this.getForm();
        },
        error: () => {
          this.router.navigateByUrl('/cliente-lista');
        },
      });
    });
  }

  private getForm(): FormGroup {
    return new FormGroup({
      nome: new FormControl(this.cliente?.nome, [
        Validators.min(3),
        Validators.required,
      ]),
      email: new FormControl(this.cliente?.email, [
        Validators.min(3),
        Validators.required,
      ]),
      telefone: new FormControl(this.cliente?.telefone, [
        Validators.min(3),
        Validators.required,
      ]),
    });
  }

  get nome() {
    return this.formEditarCliente.get('nome');
  }

  get email() {
    return this.formEditarCliente.get('email');
  }

  get telefone() {
    return this.formEditarCliente.get('telefone');
  }

  onEditarCliente(): void {
    const cliente: Partial<Cliente> = {
      nome: this.nome?.value,
      email: this.email?.value,
      telefone: this.telefone?.value,
    };

    const fields = Object.keys(cliente);
    let isValid = true;

    for (const field of fields) {
      if (this.formEditarCliente.get(field)?.invalid) {
        this.formEditarCliente.get(field)?.markAsDirty();
        isValid = false;
      }
    }

    if (!isValid) return;

    const id = this.cliente?.id ?? 0;
    this.clienteSevice.update(id, cliente).subscribe({
      next: () => {
        this.formEditarCliente.markAsPristine();
        this.router.navigateByUrl('/cliente-lista');
      },
      error: (error: HttpErrorResponse) => {
        console.error('Falha ao atualizar os dados do cliente:', error.message);
      },
    });
  }

  onCancelar() {
    this.router.navigateByUrl('/cliente-lista');
  }
}
