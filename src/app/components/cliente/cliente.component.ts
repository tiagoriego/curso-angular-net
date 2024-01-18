import { Component } from '@angular/core';
import { Endereco } from 'src/app/interfaces/endereco';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  cliente = {
    nome: 'Tiago',
    cpf: '12345678900',
  };
  ativo = true;
  endereco: Endereco = {};
  enderecos: Endereco[] = [
    {
      logradouro: 'Rua Teste',
      numero: 20,
      bairro: 'Bairro Teste',
      cep: '02615000',
      cidade: 'São Paulo',
      estado: 'SP',
    },
    {
      logradouro: 'Rua Teste',
      numero: 1212,
      bairro: 'Bairro Teste',
      cep: '02615000',
      cidade: 'São Paulo',
      estado: 'SP',
    },
    {
      logradouro: 'Rua Teste',
      numero: 123,
      bairro: 'Bairro Teste',
      cep: '02615000',
      cidade: 'São Paulo',
      estado: 'SP',
    },
    {
      logradouro: 'Rua Teste',
      numero: 123,
      bairro: 'Bairro Teste',
      cep: '02615000',
      cidade: 'São Paulo',
      estado: 'SP',
    },
  ];

  onCadastrarEndereco(): void {
    const endereco = Object.assign({}, this.endereco);
    this.enderecos.push(endereco);
  }
}
