import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListaComponent } from './produto-lista.component';

describe('ProdutoListaComponent', () => {
  let component: ProdutoListaComponent;
  let fixture: ComponentFixture<ProdutoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoListaComponent]
    });
    fixture = TestBed.createComponent(ProdutoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
