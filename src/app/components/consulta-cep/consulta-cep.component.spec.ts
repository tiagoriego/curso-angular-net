import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCepComponent } from './consulta-cep.component';

describe('ConsultaCepComponent', () => {
  let component: ConsultaCepComponent;
  let fixture: ComponentFixture<ConsultaCepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaCepComponent]
    });
    fixture = TestBed.createComponent(ConsultaCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
