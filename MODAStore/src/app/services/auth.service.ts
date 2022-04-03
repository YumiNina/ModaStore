import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map } from 'rxjs/operators';
import { Login3 } from './../component/comprador/login3/login3.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private http: HttpClient) { }
  headers : HttpHeaders = new  HttpHeaders({
"Content-Type" : " application/json"
  });

  registro3(nombre: string, apellido:string, ci:number, contraseña:string, email: string, celular:number, ciudad:string, direccion:string)
}
getAllComprador(){
const url_api ="http://localhost:4200/api/modastore";
return this.http
.post(url_api, { 
  nombre:nombre,
  apellido:apellido,
  ci:ci,
  contraseña:contraseña,
  email:email,
  celular:celular,
  ciudad:ciudad,
  direccion:direccion 
 },
{Headers: this.headers  }
)
.pipe(map(data => data));
}
Login3(ci:number, contraseña:string): Observable<any>{
  const url_api = http://localhost:3000/api/users/login;
  return this.http.post(url_api,{ci, contraseña},
    {Headers: this.headers}
    ).pipe(map(data => data ));
}

setUser(user){
  let user_string = JSON.stringify(user);
  localStorage.setItem("currentUser", user_string);
}

setToken(token){
localStorage.setItem("accessToken", token);
}

 getToken(){
return localStorage.getItem("accessToken"); 

 }
}
function getAllComprador() {
  throw new Error('Function not implemented.');
}

function Login3(ci: any, number: any, contraseña: any, string: any) {
  throw new Error('Function not implemented.');
}

function ci(ci: any, number: any, contraseña: any, string: any) {
  throw new Error('Function not implemented.');
}

function contraseña(ci: any, number: any, contraseña: any, string: any) {
  throw new Error('Function not implemented.');
}

function url_api(url_api: any) {
  throw new Error('Function not implemented.');
}

function setToken() {
  throw new Error('Function not implemented.');
}

function getToken() {
  throw new Error('Function not implemented.');
}

