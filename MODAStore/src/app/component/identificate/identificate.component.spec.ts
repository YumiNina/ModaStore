import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificateComponent } from './identificate.component';

describe('IdentificateComponent', () => {
  let component: IdentificateComponent;
  let fixture: ComponentFixture<IdentificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
