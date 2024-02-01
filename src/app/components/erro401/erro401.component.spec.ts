import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erro401Component } from './erro401.component';

describe('Erro401Component', () => {
  let component: Erro401Component;
  let fixture: ComponentFixture<Erro401Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Erro401Component]
    });
    fixture = TestBed.createComponent(Erro401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
