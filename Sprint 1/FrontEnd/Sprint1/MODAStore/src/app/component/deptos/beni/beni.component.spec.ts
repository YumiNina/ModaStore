import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeniComponent } from './beni.component';

describe('BeniComponent', () => {
  let component: BeniComponent;
  let fixture: ComponentFixture<BeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
