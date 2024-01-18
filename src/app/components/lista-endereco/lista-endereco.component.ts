import { Component, Input } from '@angular/core';
import { Endereco } from 'src/app/interfaces/endereco';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrls: ['./lista-endereco.component.css'],
})
export class ListaEnderecoComponent {
  @Input() enderecos: Endereco[] = [];
  color = 'red';
  class = ['underline', 'bold'];
}
