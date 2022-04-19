import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLogInComponent } from './cliente-log-in.component';

describe('ClienteLogInComponent', () => {
  let component: ClienteLogInComponent;
  let fixture: ComponentFixture<ClienteLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
