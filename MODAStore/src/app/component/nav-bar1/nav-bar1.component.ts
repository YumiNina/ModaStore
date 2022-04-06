//import { DataApiMODASTOREService } from '../../services/data-api-modastore.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IdentificateComponent } from '../identificate/identificate.component';
@Component({

  selector: 'app-nav-bar1',
  templateUrl: './nav-bar1.component.html',
  styleUrls: ['./nav-bar1.component.css']
})
export class NavBar1Component  {
  constructor(private authservice :AuthService ,  private router:Router){

  }

  ngOnInit() {
  }

OnLogout():void{
this.authservice.logoutComprador();

}

  Identificate(){
        this.router.navigate([IdentificateComponent])
  }

  }

