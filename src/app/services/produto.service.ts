import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[] = [];

  constructor() {
    this.produtos.push(
      {
        id: '10',
        nome: 'Camiseta Preta',
        descricao: 'Uma bela camiseta preta',
        valor: 10.95,
      },
      {
        id: '20',
        nome: 'Camiseta Branca',
        descricao: 'Uma bela camiseta branca',
        valor: 9.35,
      }
    );
  }

  obterTodos(): Produto[] {
    return this.produtos
  }

  obterPorId(id: string): Produto | undefined {
    return this.produtos.find(p => p.id === id)
  }
}
