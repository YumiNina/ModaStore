import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/observable';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { isNull, nullSafeIsEquivalent, NULL_EXPR, TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserInterface } from '../models/user-interface';

@Injectable({

  providedIn: 'root'

})

export class AuthService {
  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": " application/json"
  });

  compradorregistro3(nombre: string, apellido: string, ci: number, contraseña: string, email: string, celular: number, ciudad: string, direccion: string) {
    const url_api = "http://localhost:3000/api/registro3";
    return this.http
      .post<UserInterface>(
        url_api,
        {
          nombre: nombre,
          apellido: apellido,
          ci: ci,
          contraseña: contraseña,
          email: email,
          celular: celular,
          ciudad: ciudad,
          direccion: direccion
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }
  compradorlogin3(ci: number, contraseña: string): Observable<any> {
    const url_api = "http://localhost:3000/api/comprador/login3?include=user";
    return this.http
      .post<UserInterface>(
        url_api,
        { ci, contraseña },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }
  setcomprador(comprador: UserInterface): void {
    let comprador_string = JSON.stringify(comprador);
    localStorage.setItem("currentUser", comprador_string);
  }
//  setToken(token): void {
  //  localStorage.setItem("accessToken", token);
//  }

  getToken() {
    return localStorage.getItem("accessToken");
  }
/*
  getCurrentComprador():UserInterface {
    let comprador_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(comprador_string)) {
      let comprador: UserInterface = JSON.parse(comprador_string);
      return comprador;
    }
    else {


          return null;

        }

  }*/

  logoutComprador(): Observable<UserInterface> {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = `http://localhost:3000/api/comprador/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post<UserInterface>(url_api, { headers: this.headers });
  }

  /*getPersona(){
    return this.http.get<Persona[]> (this.Url);

  }

  CreatePersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona)}*/
}



