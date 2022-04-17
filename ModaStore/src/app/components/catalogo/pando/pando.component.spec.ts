import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandoComponent } from './pando.component';

describe('PandoComponent', () => {
  let component: PandoComponent;
  let fixture: ComponentFixture<PandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
