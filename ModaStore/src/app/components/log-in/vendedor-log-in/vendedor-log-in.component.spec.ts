import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorLogInComponent } from './vendedor-log-in.component';

describe('VendedorLogInComponent', () => {
  let component: VendedorLogInComponent;
  let fixture: ComponentFixture<VendedorLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
