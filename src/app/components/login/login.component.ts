import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessToken } from 'src/app/interfaces/user-token';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public formLogin: FormGroup;
  public showError = false;

  constructor(private loginService: LoginService, private router: Router) {
    this.formLogin = this.getForm();
  }

  getForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.min(6), Validators.required]),
      password: new FormControl('', [Validators.min(6), Validators.required]),
    });
  }

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }

  onLogin() {
    if (this.email?.invalid || this.password?.invalid) {
      this.email?.markAsDirty();
      this.password?.markAsDirty();
      return;
    }

    this.loginService.auth(this.email?.value, this.password?.value).subscribe({
      next: (data: AccessToken) => {
        this.loginService.saveToken(data);
        this.loginService.saveUser(data.user);
        this.router.navigate(['/home']);
      },
      error: (error: HttpErrorResponse) => {
        console.error(
          'Ocorreu um erro ao tentar autenticar o usuário.',
          error.message
        );
        this.showError = true;
      },
    });
  }
}
