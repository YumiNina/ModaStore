import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinhaComponent } from './ninha.component';

describe('NinhaComponent', () => {
  let component: NinhaComponent;
  let fixture: ComponentFixture<NinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
