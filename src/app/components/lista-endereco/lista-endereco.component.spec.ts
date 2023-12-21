import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEnderecoComponent } from './lista-endereco.component';

describe('ListaEnderecoComponent', () => {
  let component: ListaEnderecoComponent;
  let fixture: ComponentFixture<ListaEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEnderecoComponent]
    });
    fixture = TestBed.createComponent(ListaEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
