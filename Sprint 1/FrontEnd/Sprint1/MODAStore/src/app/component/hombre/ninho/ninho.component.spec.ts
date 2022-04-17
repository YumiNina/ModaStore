import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinhoComponent } from './ninho.component';

describe('NinhoComponent', () => {
  let component: NinhoComponent;
  let fixture: ComponentFixture<NinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
