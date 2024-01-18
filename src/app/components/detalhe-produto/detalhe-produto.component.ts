import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css'],
})
export class DetalheProdutoComponent implements OnInit {
  produto: Produto | undefined;

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarProduto();
    console.log(this.produto)
  }

  carregarProduto(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.produto = this.produtoService.obterPorId(params['id']);
      if (!this.produto) {
        this.router.navigate(['produto-lista'])
      }
    });
  }
}
