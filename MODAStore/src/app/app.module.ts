/* Imports por defecto de angular*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";

/* imports de formularios de angular*/
import { FormsModule } from '@angular/forms';




/*Imports propios del proyecto */
import { NavBar1Component } from './component/nav-bar1/nav-bar1.component';
import { NovedadesComponent } from './component/novedades/novedades.component';
import { MujerComponent } from './component/mujer/mujer.component';
import { NinhaComponent } from './component/mujer/ninha/ninha.component';
import { HombreComponent } from './component/hombre/hombre.component';
import { NinhoComponent } from './component/hombre/ninho/ninho.component';
import { UnisexComponent } from './component/unisex/unisex.component';
import { OfertasComponent } from './component/ofertas/ofertas.component';
import { OutletComponent } from './component/outlet/outlet.component';
import { AdminComponent } from './component/admin/admin.component';
import { PrincipalComponent } from './component/admin/principal/principal.component';
import { Login1Component } from './component/admin/principal/login1/Login1Component';
import { Registro1Component } from './component/admin/principal/registro1/registro1.component';
import { SecundarioComponent } from './component/admin/secundario/secundario.component';
import { VendedorComponent } from './component/vendedor/vendedor.component';
import { CompradorComponent } from './component/comprador/comprador.component';
import { Page404Component } from './component/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { Login2Component } from './component/admin/secundario/login2/login2.component';
import { Registro2Component } from './component/admin/secundario/registro2/registro2.component';
import { Login3Component } from './component/comprador/login3/login3.component';
import { Registro3Component } from './component/comprador/registro3/registro3.component';
import { Login4Component } from './component/vendedor/login4/login4.component';
import { Registro4Component } from './component/vendedor/registro4/registro4.component';

//services
import { DataApiMODASTOREService } from './services/data-api-modastore.service';
@NgModule({
   declarations: [
    NavBar1Component,
    NovedadesComponent,
    MujerComponent,
    NinhaComponent,
    HombreComponent,
    NinhoComponent,
    UnisexComponent,
    OfertasComponent,
    OutletComponent,
    AdminComponent,
    PrincipalComponent,
    Login1Component,
    Registro1Component,
    Login2Component,
    Registro2Component,
    Login3Component,
    Registro3Component,
    Login4Component,
    Registro4Component,
    SecundarioComponent,
    VendedorComponent,
    CompradorComponent,
    Page404Component
  ],
  imports: [


    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule],


  providers: [DataApiMODASTOREService],
  bootstrap: [AppComponent]
})
export class AppModule { }

