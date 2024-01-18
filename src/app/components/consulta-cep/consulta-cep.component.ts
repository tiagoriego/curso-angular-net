import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConsultaCep } from 'src/app/interfaces/consulta-cep';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css']
})
export class ConsultaCepComponent {
  endereco: ConsultaCep | undefined
  cep: string = ''
  error: string = ''
  constructor(private consultaCepService: ConsultaCepService) {}

  onConsultaCEP(): void {
    this.consultaCepService.obterPorCep(this.cep).subscribe({
      next: (result: ConsultaCep) => {
        this.endereco = result
        this.error = ''
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.error = 'CEP não localizado.'
        } else {
          this.error = 'Falha ao consultar o CEP.'
        }        
      }
    })
  }
}
