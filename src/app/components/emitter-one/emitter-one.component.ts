import { Component } from '@angular/core';
import { Pessoa } from 'src/app/interfaces/pessoa';

@Component({
  selector: 'app-emitter-one',
  templateUrl: './emitter-one.component.html',
  styleUrls: ['./emitter-one.component.css']
})
export class EmitterOneComponent {
  pessoas: Pessoa[] = [];

  onAdicinarPessoa(pessoa: Pessoa): void {
    this.pessoas.push(pessoa);
  }
}
