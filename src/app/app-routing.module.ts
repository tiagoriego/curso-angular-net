import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { rolesGuard } from './guards/roles.guard';
import { Erro401Component } from './components/erro401/erro401.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: 'cliente-lista',
    component: ClienteListaComponent,
    canActivate: [authGuard, rolesGuard],
    data: { roles: ['LISTAR_CLIENTE'] },
  },
  {
    path: 'cadastro-cliente',
    component: ClienteCadastroComponent,
    canActivate: [authGuard, rolesGuard],
    data: { roles: ['CADASTRAR_CLIENTE'] },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: '401',
    component: Erro401Component,
    canActivate: [authGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
