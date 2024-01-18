import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterTwoComponent } from './emitter-two.component';

describe('EmitterTwoComponent', () => {
  let component: EmitterTwoComponent;
  let fixture: ComponentFixture<EmitterTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmitterTwoComponent]
    });
    fixture = TestBed.createComponent(EmitterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
