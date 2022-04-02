import { DataApiMODASTOREService } from './data-api-modastore.service';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/internal/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Registro3Component } from './../component/comprador/registro3/registro3.component';

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
getAllComprador(){
const url_api ="http://localhost:4200/api/modastore";
return this.http.get(url_api);

 }

}
function getAllComprador() {
  throw new Error('Function not implemented.');
}

