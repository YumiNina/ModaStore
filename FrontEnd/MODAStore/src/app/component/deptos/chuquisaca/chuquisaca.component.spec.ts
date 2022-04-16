import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuquisacaComponent } from './chuquisaca.component';

describe('ChuquisacaComponent', () => {
  let component: ChuquisacaComponent;
  let fixture: ComponentFixture<ChuquisacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuquisacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuquisacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
