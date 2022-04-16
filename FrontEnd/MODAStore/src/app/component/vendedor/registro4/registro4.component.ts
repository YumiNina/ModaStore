import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import {ServiceService} from 'src/app/Service/service.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro4.component.html',
  styleUrls: ['./registro4.component.css']
})
export class Registro4Component implements OnInit {

  //constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  /*Guardar(persona:Persona){
    this.service.CreatePersona(persona)
    .subscribe(data=>{
      alert("Se Agrego con Exito ...!");
      this.router.navigate(["listar"]);
    })
  }*/

}
