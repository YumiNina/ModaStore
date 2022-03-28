import { Component, OnInit } from '@angular/core';

Component(
  {
    selector:'app-register',
    templateUrl: '.registro.component.html',
    styleUrls: ['.registro.component.css']
  })
export class registroComponent implements OnInit {

  constructor(private authService : AuthService){}
  private user: UserInterface ={
    ci:"",
    nombre:"",
    email:"",
    password:""
  };
  ngOnInit():  {}
  onRegister(): void{

    this.authService.registerUser(
this.user.ci,
this.user.nombre,
this.user.email,
this.user.password,
    )
.subcribe(user {
console.log(user);
})
  }
}

