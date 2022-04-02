import { NavBar1Component } from './component/nav-bar1/nav-bar1.component';
import { TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  beforeEach(async () => {
     TestBed.configureTestingModule({
       imports:[
     //   RouterTestingModule
        NavBar1Component
      ] ,
         declarations: [
        AppComponent,
        NavBar1Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MODAStore'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MODAStore');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('# MODA STORE');
  });
});
