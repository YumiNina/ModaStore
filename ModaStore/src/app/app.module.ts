import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LapazComponent } from './components/catalogo/lapaz/lapaz.component';
import { CochabambaComponent } from './components/catalogo/cochabamba/cochabamba.component';
import { SantacruzComponent } from './components/catalogo/santacruz/santacruz.component';
import { PandoComponent } from './components/catalogo/pando/pando.component';
import { BeniComponent } from './components/catalogo/beni/beni.component';
import { OruroComponent } from './components/catalogo/oruro/oruro.component';
import { PotosiComponent } from './components/catalogo/potosi/potosi.component';
import { TarijaComponent } from './components/catalogo/tarija/tarija.component';
import { SucreComponent } from './components/catalogo/sucre/sucre.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ClienteLogInComponent } from './components/log-in/cliente-log-in/cliente-log-in.component';
import { ClienteSignUpComponent } from './components/sign-up/cliente-sign-up/cliente-sign-up.component';
import { VendedorLogInComponent } from './components/log-in/vendedor-log-in/vendedor-log-in.component';
import { VendedorSignUpComponent } from './components/sign-up/vendedor-sign-up/vendedor-sign-up.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLogInComponent } from './components/admin/admin-log-in/admin-log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    CatalogoComponent,
    LapazComponent,
    CochabambaComponent,
    SantacruzComponent,
    PandoComponent,
    BeniComponent,
    OruroComponent,
    PotosiComponent,
    TarijaComponent,
    SucreComponent,
    LogInComponent,
    ClienteLogInComponent,
    ClienteSignUpComponent,
    SignUpComponent,
    VendedorLogInComponent,
    VendedorSignUpComponent,
    AdminComponent,
    AdminLogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
