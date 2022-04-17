import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantacruzComponent } from './santacruz.component';

describe('SantacruzComponent', () => {
  let component: SantacruzComponent;
  let fixture: ComponentFixture<SantacruzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantacruzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SantacruzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
