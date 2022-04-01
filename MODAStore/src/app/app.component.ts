import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
///import { NgxSpinnerService } from 'ngx-spinner';
@Component({
    selector: 'app-root',
    templateUrl: './nav-bar1/nav-bar1.component.html',
    styleUrls: ['./nav-bar1/nav-bar1.component.css']
})
export class AppComponent {
    title = 'MODAStore';
    imgLogo = '/MODAStore/src/app/assets/logo-empresa.png';
}