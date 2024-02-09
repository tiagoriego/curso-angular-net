import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css'],
})
export class ClienteCadastroComponent {
  public formCadastroCliente: FormGroup;

  constructor(private clienteSevice: ClienteService, private router: Router) {
    this.formCadastroCliente = this.getForm();
  }

  private getForm(): FormGroup {
    return new FormGroup({
      nome: new FormControl('', [Validators.min(3), Validators.required]),
      email: new FormControl('', [Validators.min(3), Validators.required]),
      telefone: new FormControl('', [Validators.min(3), Validators.required]),
    });
  }

  get nome() {
    return this.formCadastroCliente.get('nome');
  }

  get email() {
    return this.formCadastroCliente.get('email');
  }

  get telefone() {
    return this.formCadastroCliente.get('telefone');
  }

  onCadastrarCliente(): void {
    const cliente: Partial<Cliente> = {
      nome: this.nome?.value,
      email: this.email?.value,
      telefone: this.telefone?.value,
    };

    const fields = Object.keys(cliente);
    let isValid = true;

    for (const field of fields) {
      if (this.formCadastroCliente.get(field)?.invalid) {
        this.formCadastroCliente.get(field)?.markAsDirty();
        isValid = false;
      }
    }

    if (!isValid) return;

    this.clienteSevice.save(cliente).subscribe({
      next: () => {
        this.formCadastroCliente.markAsPristine();
        this.router.navigate(['cliente-lista']);
      },
      error: (error: HttpErrorResponse) => {
        console.error(
          'Ocorreu um erro ao tentar salvar o cliente:',
          error.message
        );
      },
    });
  }
}
