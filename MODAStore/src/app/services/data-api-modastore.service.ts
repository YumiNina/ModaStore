import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataApiMODASTOREService {

  constructor(private http:HttpClient) { }

getAllComprador(){
const url_api = " ";
return this.http.get(url_api);
}
}
