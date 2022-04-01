import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavBar1Component } from './nav-bar1/nav-bar1.component';
import { MenuComponent } from './component/menu/menu.component';
import { NovedadesComponent } from './component/novedades/novedades.component';
import { MujerComponent } from './component/mujer/mujer.component';
import { NinhaComponent } from './component/mujer/ninha/ninha.component';
import { HombreComponent } from './component/hombre/hombre.component';
import { NinhoComponent } from './component/hombre/ninho/ninho.component';
import { UnisexComponent } from './component/unisex/unisex.component';
import { OfertasComponent } from './component/ofertas/ofertas.component';
import { OutletComponent } from './component/outlet/outlet.component';
import { AdminComponent } from './component/admin/admin.component';
import { PrincipalComponent } from './component/admin/principal/principal1.component';
import { LoginComponent } from './component/admin/principal/login1/login1.component';
import { RegistroComponent } from './component/admin/principal/registro1/registro.component';
import { SecundarioComponent } from './component/admin/secundario/secundario2.component';
import { VendedorComponent } from './component/vendedor/vendedor.component';
import { CompradorComponent } from './component/comprador/comprador.component';
import { Page404Component } from './component/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar1Component,
    MenuComponent,
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
    LoginComponent,
    RegistroComponent,
    SecundarioComponent,
    VendedorComponent,
    CompradorComponent,
    Page404Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
