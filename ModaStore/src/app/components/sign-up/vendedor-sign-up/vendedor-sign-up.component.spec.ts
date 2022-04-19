import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorSignUpComponent } from './vendedor-sign-up.component';

describe('VendedorSignUpComponent', () => {
  let component: VendedorSignUpComponent;
  let fixture: ComponentFixture<VendedorSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
