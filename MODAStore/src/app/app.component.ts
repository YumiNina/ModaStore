import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
///import { NgxSpinnerService } from 'ngx-spinner';
@Component({
    selector: 'app-root',
    templateUrl: './component/inicio/inicio.component.html',
    styleUrls: ['./component/inicio/inicio.component.css']
})
export class AppComponent {
    title = 'MODAStore';
    imgLogo = '/MODAStore/src/app/assets/logo-empresa.png';
}
