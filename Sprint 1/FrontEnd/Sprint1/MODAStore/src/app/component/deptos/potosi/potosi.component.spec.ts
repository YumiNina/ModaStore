import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotosiComponent } from './potosi.component';

describe('PotosiComponent', () => {
  let component: PotosiComponent;
  let fixture: ComponentFixture<PotosiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotosiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
