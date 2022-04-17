import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapazComponent } from './lapaz.component';

describe('LapazComponent', () => {
  let component: LapazComponent;
  let fixture: ComponentFixture<LapazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LapazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
