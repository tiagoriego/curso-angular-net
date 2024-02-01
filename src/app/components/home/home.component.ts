import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user-token';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public user: User | null = null;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser()
  }
}
