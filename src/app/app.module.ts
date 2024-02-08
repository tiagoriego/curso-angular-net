import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { HttpClientModule } from '@angular/common/http'
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { HttpInterceptorProviders } from './interceptors/http-interceptor';
import { Erro401Component } from './components/erro401/erro401.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DestaqueDirective } from './directives/destaque.directive';
import { UserDirective } from './directives/user.directive';
import { TelefonePipe } from './pipes/telefone.pipe';
import { FiltrarListaPipe } from './pipes/filtrar-lista.pipe';
import { ClienteEditarComponent } from './components/cliente-editar/cliente-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListaComponent,
    ClienteCadastroComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    HomeComponent,
    LoginComponent,
    Erro401Component,
    LogoutComponent,
    DestaqueDirective,
    UserDirective,
    TelefonePipe,
    FiltrarListaPipe,
    ClienteEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
