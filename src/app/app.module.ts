import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { ListaEnderecoComponent } from './components/lista-endereco/lista-endereco.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { CasosComponent } from './components/casos/casos.component';
import { EmitterOneComponent } from './components/emitter-one/emitter-one.component';
import { EmitterTwoComponent } from './components/emitter-two/emitter-two.component';
import { PipesComponent } from './components/pipes/pipes.component';
import localePT from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { DetalheProdutoComponent } from './components/detalhe-produto/detalhe-produto.component';
import { ConteudoNaoLocalizadoComponent } from './components/conteudo-nao-localizado/conteudo-nao-localizado.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaCepComponent } from './components/consulta-cep/consulta-cep.component'

registerLocaleData(localePT)

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    ListaEnderecoComponent,
    ClienteComponent,
    CasosComponent,
    EmitterOneComponent,
    EmitterTwoComponent,
    PipesComponent,
    ProdutoListaComponent,
    DetalheProdutoComponent,
    ConteudoNaoLocalizadoComponent,
    ConsultaCepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
