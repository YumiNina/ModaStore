import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/observable';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import { isNullOrUndefined } from 'util';
import { UserInterface } from '../models/user-interface';
import { isNull, isNullOrUndefined } from 'util';
import { Login3Component } from './../component/comprador/login3/login3.component';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { loginCompradorInterface } from 'src/app/models/logincomprador-interface';

@Injectable({

  providedIn: 'root'

})

export class AuthService {
  static registro3comprador: any;
  
    constructor(private htttp: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": " application/json"
  });

  registro3comprador(nombre: string, apellido: string, ci: string,password: string, email: string, celular: string, ciudad: string, direccion: string) {
    const url_api = "http://localhost:3000/api/registro3";
    return this.htttp
      .post<UserInterface>(
        url_api,
        {
          nombre: nombre,
          apellido: apellido,
          ci: ci,
          password: password,
          email: email,
          celular: celular,
          ciudad: ciudad,
          direccion: direccion
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }
  login3comprador(ci: string, password: string): Observable<any> {
    const url_api = "http://localhost:3000/api/comprador/login3?include=user";
    return this.htttp
      .post<UserInterface>(
        url_api,
        { ci, password},
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }
  setComprador(Comprador: UserInterface):void {
    let comprador_string = JSON.stringify(Comprador);
    localStorage.setItem("currentUser", comprador_string);
  }
setToken(token: string) :void{
    localStorage.setItem("accessToken", token);
}

  getToken() {
    return localStorage.getItem("accessToken");
  }
/*
  getCurrentUser():UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    }else{
      return null;
    }
  }
  */
  logoutComprador() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = `http://localhost:3000/api/comprador/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.htttp.post<UserInterface>(url_api, { headers: this.headers });
  }
}



