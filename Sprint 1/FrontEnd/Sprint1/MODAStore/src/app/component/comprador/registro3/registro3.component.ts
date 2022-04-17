import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../models/user-interface';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
//import { isError } from 'util';

@Component({
  selector: 'app-registro',
  templateUrl: './registro3.component.html',
  styleUrls: ['./registro3.component.css']
})
export class Registro3Component implements OnInit {
  router: any;

  constructor(public authService: AuthService, router:Router) { }
  public Comprador: UserInterface = {
    nombre: '',
    apellido: '',
    ci: '',
    password: '',
    email: '',
    celular: '',
    ciudad: '',
    direccion: '',
    id: ''
  };

public isError = false;
public msgError ='';
  ngOnInit() { 
  }
  OnRegistro3(form:NgForm):void  {
    
    if(form.valid){
      this.authService.registro3comprador(

        this.Comprador.nombre,
        this.Comprador.apellido,
        this.Comprador.ci,
        this.Comprador.password,
        this.Comprador.email,
        this.Comprador.celular,
        this.Comprador.ciudad,
        this.Comprador.direccion
      ).subscribe((user: UserInterface) => {
        this.authService.setComprador(user);
        let token= user.id;
        this.authService.setToken(token);
         this.router.navigate(['/comprador'])
    },
    res=> {
      
      
      this.msgError = res.error.error.details.messages.email;
      this.onIsError(); 
    }
    );
    } else {

this.onIsError();
    }
    
  }
  onIsError():void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}
