import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erro401Component } from './erro401.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Erro401Component', () => {
  let component: Erro401Component;
  let fixture: ComponentFixture<Erro401Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Erro401Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(Erro401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
