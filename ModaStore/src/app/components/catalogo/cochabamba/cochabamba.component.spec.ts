import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochabambaComponent } from './cochabamba.component';

describe('CochabambaComponent', () => {
  let component: CochabambaComponent;
  let fixture: ComponentFixture<CochabambaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochabambaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochabambaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
