import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map } from 'rxjs/operators';
//import { Login3 } from './../component/comprador/login3/login3.component';
import { isNullOrUndefined } from 'util';
import { UserInterface } from '../models/user-interface';
import { UserInterface } from './../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private http: HttpClient) { }
  headers : HttpHeaders = new  HttpHeaders({
"Content-Type" : " application/json"
  });

  Registro3(nombre: string, apellido:string, ci:number, contraseña:string, email: string, celular:number, ciudad:string, direccion:string)
}
getAllComprador() {
const url_api ="http://localhost:4200/api/modastore";
return this.http
.post<UserInterface>(url_api, { 
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
/*Login3(ci:number, contraseña:string): Observable<any>{
  const url_api = http://localhost:3000/api/users/login;
  return this.http.post<UserInterface>(url_api,{ci, contraseña},
    {Headers: this.headers}
    ).pipe(map(data => data ));
}
*/
setUser(user: UserInterface): void{
  let user_String = JSON.stringify(user);
  localStorage.setItem("currentUser", user_string);
}

setToken(token){
localStorage.setItem("accessToken", token);
}

getToken(){
return localStorage.getItem("accessToken"); 

 }
getCurrentUser():UserInterface{
let user_string = localStorage.getItem("currentUser");
if(isNullOrUndefined(user_string)){
let user = JSON.parse(user_string);
return user;
} else{
  return null
}
}
logoutUser(){
  let accessToken = localStorage.getItem('accessToken')
  const url_api = 'http:localhost:3000/api/Users/logout?access_token=${access_token}';
  localStorage.removeItem('accessToken')
  localStorage.removeItem('currentUser')
  return this.http.post(url_api, {Headers: this.headers});
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

function setUser(user: any) {
  throw new Error('Function not implemented.');
}

function user(user: any) {
  throw new Error('Function not implemented.');
}

function token(token: any) {
  throw new Error('Function not implemented.');
}

function getCurrentUser() {
  throw new Error('Function not implemented.');
}

function logoutUser() {
  throw new Error('Function not implemented.');
}

