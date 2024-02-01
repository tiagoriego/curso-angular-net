import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout',
  template: '',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {
    this.loginService.logout();
    this.router.navigateByUrl('/login')
  }
}
