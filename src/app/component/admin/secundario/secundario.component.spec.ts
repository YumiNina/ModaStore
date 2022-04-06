import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundarioComponent } from './secundario.component';

describe('Secundario2Component', () => {
  let component: SecundarioComponent;
  let fixture: ComponentFixture<SecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecundarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
