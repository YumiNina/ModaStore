
import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from './services/auth.service';



//import { RouterModule, Router, NavigationEnd } from '@angular/router';
///import { NgxSpinnerService } from 'ngx-spinner';
@Component({
    selector: 'app-root',

   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
    title = 'MODAStore';
    constructor(private authservice: AuthService, private router: Router){

    }

        ngOnInit(){

        }
        
        onLogOut():void{
            this.authservice.logoutComprador();
        }
       
    }







function Identificate() {
    throw new Error('Function not implemented.');
}

function onLogOut() {
    throw new Error('Function not implemented.');
}

function ngOnInit() {
    throw new Error('Function not implemented.');
}

