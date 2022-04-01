import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { AppComponent } from './component/inicio/inicio.component';
=======
import { AppComponent } from "./appComponent";
>>>>>>> b51a8a261183b8f713d0db32b6d0694dedb02d31

describe('AppComponent', () => {
  beforeEach(async () => {
     TestBed.configureTestingModule({
       imports:[
     //   RouterTestingModule 
       ] ,   
         declarations: [
        AppComponent
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
