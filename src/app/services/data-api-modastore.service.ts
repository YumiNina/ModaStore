import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
//import {loginInterface} from "../models/logincomprador-interface";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
/*GET
El método GET  solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.
HEAD
El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.
POST
El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
PUT
El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

DELETE
El método DELETE borra un recurso en específico.
*/


export class DataApiMODASTOREService {

  //nombre: Observable<any>;
  //nombres: Observable<any>;  


  constructor(private http:HttpClient, private AuthService:AuthService) { }

getAllComprador(){
const url_api = " ";
return this.http.get(url_api);
}


}
