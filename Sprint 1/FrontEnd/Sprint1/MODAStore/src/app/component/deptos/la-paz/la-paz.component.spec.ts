import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPazComponent } from './la-paz.component';

describe('LaPazComponent', () => {
  let component: LaPazComponent;
  let fixture: ComponentFixture<LaPazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaPazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaPazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
