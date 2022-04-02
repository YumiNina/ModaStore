import { DataApiMODASTOREService } from './data-api-modastore.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/observable';
@Injectable({
  providedIn: 'root'
})
export class DataApiMODASTOREService {
 Compradores: Observable<any>;
 Comprador: Observable<any>;



  constructor(private http: HttpComprador) { }
 getAllComprador(){
const url_api ="http://localhost:4200/api/modastore";
return this.http.get(url_api);

 }

}
