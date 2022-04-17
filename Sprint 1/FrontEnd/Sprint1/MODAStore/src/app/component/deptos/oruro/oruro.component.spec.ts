import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OruroComponent } from './oruro.component';

describe('OruroComponent', () => {
  let component: OruroComponent;
  let fixture: ComponentFixture<OruroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OruroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OruroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
