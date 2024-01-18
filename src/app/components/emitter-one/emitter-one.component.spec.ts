import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterOneComponent } from './emitter-one.component';

describe('EmitterOneComponent', () => {
  let component: EmitterOneComponent;
  let fixture: ComponentFixture<EmitterOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmitterOneComponent]
    });
    fixture = TestBed.createComponent(EmitterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
