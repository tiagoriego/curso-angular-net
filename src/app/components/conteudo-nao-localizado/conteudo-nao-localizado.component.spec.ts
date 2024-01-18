import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoNaoLocalizadoComponent } from './conteudo-nao-localizado.component';

describe('ConteudoNaoLocalizadoComponent', () => {
  let component: ConteudoNaoLocalizadoComponent;
  let fixture: ComponentFixture<ConteudoNaoLocalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConteudoNaoLocalizadoComponent]
    });
    fixture = TestBed.createComponent(ConteudoNaoLocalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
