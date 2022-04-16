import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificateClienteComponent } from './identificate-cliente.component';

describe('IdentificateClienteComponent', () => {
  let component: IdentificateClienteComponent;
  let fixture: ComponentFixture<IdentificateClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificateClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
