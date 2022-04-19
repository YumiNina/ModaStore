import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSignUpComponent } from './cliente-sign-up.component';

describe('ClienteSignUpComponent', () => {
  let component: ClienteSignUpComponent;
  let fixture: ComponentFixture<ClienteSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
