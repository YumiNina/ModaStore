import { FooterComponent } from './component/footer/footer.component';
import { NavBar1Component } from './component/nav-bar1/nav-bar1.component';
import { TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
//import { AppComponent } from "./app.component";


import { InicioComponent} from "./component/inicio/inicio.component"

describe('AppComponent', () => {
  beforeEach(async () => {
     TestBed.configureTestingModule({
       imports:[
     //   RouterTestingModule
        NavBar1Component
      ] ,
         declarations: [
       // AppComponent,
       InicioComponent,
        NavBar1Component,
        FooterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(    /*AppComponent*/    InicioComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MODAStore'`, () => {
    const fixture = TestBed.createComponent(    /*AppComponent*/    InicioComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MODAStore');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(    /*AppComponent*/    InicioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('# MODA STORE');
  });
});
