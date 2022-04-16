import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificateAdminComponent } from './identificate-admin.component';

describe('IdentificateAdminComponent', () => {
  let component: IdentificateAdminComponent;
  let fixture: ComponentFixture<IdentificateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificateAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
