import { Component, OnInit } from '@angular/core';

Component(
  {
    selector:'app-Registro',
    templateUrl: '.registro.component.html',
    styleUrls: ['.registro.component.css']
  })
export class RegistroComponent implements OnInit {

  constructor(private authService : AuthService){}
  private user: MODAStoreInterface ={
    ci:"",
    nombre:"",
    email:"",
    password:""
  };
  ngOnInit():  {}
  onRegistro(): void{

    this.authService.registerUser(
this.user.ci,
this.user.nombre,
this.user.email,
this.user.password,
    )
.subcribe(MODAStorder {
console.log(MODAStorder);
})
  }
}

function MODAStorder(MODAStorder: any) {
  throw new Error('Function not implemented.');
}

