import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { ListaEnderecoComponent } from './components/lista-endereco/lista-endereco.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { CasosComponent } from './components/casos/casos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    ListaEnderecoComponent,
    ClienteComponent,
    CasosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
