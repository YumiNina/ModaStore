import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import { Login3 } from './../component/comprador/login3/login3.component';
//import { isNullOrUndefined } from 'util';
import { UserInterface } from '../models/user-interface';
/*
//parte comentada
//import { Login3 } from './../component/comprador/login3/login3.component';
/*
import { UserInterface } from '../models/logincomprador-interface';
import { UserInterface } from '../models/user-interface';*/
import { Registro3Component } from './../component/comprador/registro3/registro3.component';

@Injectable({

  providedIn: 'root'

})

export class AuthService {
  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": " application/json"
  });

  compradorregistro3(nombre: string, apellido: string, ci: number, contraseña: string, email: string, celular: number, ciudad: string, direccion: string){
    const url_api = "http://localhost:3000/api/registro3";
    return this.http
      .post<UserInterface>(
        url_api,
        {
          nombre: nombre,
          apellido: apellido,
          ci: ci,
          contraseña:contraseña,
          email:email,
          celular:celular,
          ciudad:ciudad,
          direccion:direccion
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));

  }
}




/*

//parte comentada

getAllComprador() {
  const url_api = "http://localhost:4200/api/modastore";
  return this.http
    .post<UserInterface>(url_api, {
      nombre: nombre,
      apellido: apellido,
      ci: ci,
      contraseña: contraseña,
      email: email,
      celular: celular,
      ciudad: ciudad,
      direccion: direccion
    },
      { Headers: this.headers }
    )
    .pipe(map(data => data));
}

*/
//parte comentada

/*
Login3(ci:number, contraseña:string): Observable<any>{
  const url_api = http://localhost:3000/api/users/login;
  return this.http.post<UserInterface>(url_api,{ci, contraseña},
    {Headers: this.headers}
    ).pipe(map(data => data ));
}

*/
/*
setUser(user: UserInterface): void {
  let user_String = JSON.stringify(user);
  localStorage.setItem("currentUser", user_string);
}

setToken(token){
  localStorage.setItem("accessToken", token);
}

getToken(){
  return localStorage.getItem("accessToken");

}
getCurrentUser(): UserInterface {
  let user_string = localStorage.getItem("currentUser");
  if (isNullOrUndefined(user_string)) {
    let user: UserInterface = JSON.parse(user_string);
    return user;
  } else {
    return null
  }
}
logoutUser(){
  let accessToken = localStorage.getItem('accessToken')
  const url_api = 'http:localhost:3000/api/Users/logout?access_token=${access_token}';
  localStorage.removeItem('accessToken')
  localStorage.removeItem('currentUser')
  return this.http.post<UserInterface>(url_api, { Headers: this.headers });
}

function user_string(arg0: string, user_string: any) {
  throw new Error('Function not implemented.');
}*/}