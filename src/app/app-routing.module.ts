import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EmitterOneComponent } from './components/emitter-one/emitter-one.component';
import { CasosComponent } from './components/casos/casos.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { DetalheProdutoComponent } from './components/detalhe-produto/detalhe-produto.component';
import { ConteudoNaoLocalizadoComponent } from './components/conteudo-nao-localizado/conteudo-nao-localizado.component';
import { ConsultaCepComponent } from './components/consulta-cep/consulta-cep.component';

const routes: Routes = [
  { path: 'primeiro-componente', component: PrimeiroComponent },
  { path: 'segundo-componente', component: SegundoComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'evento-pai-filho', component: EmitterOneComponent },
  { path: 'casos', component: CasosComponent },
  { path: 'produto-lista', component: ProdutoListaComponent },
  { path: 'detalhe-produto/:id', component: DetalheProdutoComponent },
  { path: 'consulta-cep', component: ConsultaCepComponent  },
  { path: '**', component: ConteudoNaoLocalizadoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
