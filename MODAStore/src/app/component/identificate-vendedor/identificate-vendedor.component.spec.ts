import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificateVendedorComponent } from './identificate-vendedor.component';

describe('IdentificateVendedorComponent', () => {
  let component: IdentificateVendedorComponent;
  let fixture: ComponentFixture<IdentificateVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificateVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificateVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
