import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListaComponent } from './cliente-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppBootstrapModule } from 'src/app/app-bootstrap/app-bootstrap.module';

describe('ClienteListaComponent', () => {
  let component: ClienteListaComponent;
  let fixture: ComponentFixture<ClienteListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteListaComponent],
      imports: [HttpClientModule, AppBootstrapModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ClienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
