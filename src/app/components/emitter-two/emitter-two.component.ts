import { Component, EventEmitter, Output } from '@angular/core';
import { Pessoa } from 'src/app/interfaces/pessoa';

@Component({
  selector: 'app-emitter-two',
  templateUrl: './emitter-two.component.html',
  styleUrls: ['./emitter-two.component.css'],
})
export class EmitterTwoComponent {
  @Output() adicionarPessoa: EventEmitter<Pessoa> = new EventEmitter<Pessoa>();

  nome: string = '';
  idade: string = '';

  handleAdicionarPessoa(): void {
    const pessoa = {
      nome: this.nome,
      idade: this.idade
    }
    this.adicionarPessoa.emit(pessoa)
  }
}
