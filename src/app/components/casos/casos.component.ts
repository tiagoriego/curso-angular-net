import { Component } from '@angular/core';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent {
  numero: number = 0;

  onMudarNumero(): void {
    this.numero = Math.floor(Math.random() * 10);
  }
}
