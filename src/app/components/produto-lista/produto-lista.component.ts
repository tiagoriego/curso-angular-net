import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css'],
})
export class ProdutoListaComponent implements OnInit {

  produtos: Produto[] = []

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos(): void {
    this.produtos = this.produtoService.obterTodos()
  }
}
