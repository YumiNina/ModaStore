import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarijaComponent } from './tarija.component';

describe('TarijaComponent', () => {
  let component: TarijaComponent;
  let fixture: ComponentFixture<TarijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
