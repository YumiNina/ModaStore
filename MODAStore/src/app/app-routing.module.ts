

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { Login1Component } from "./component/admin/principal/login1/Login1Component";
import { PrincipalComponent } from './component/admin/principal/principal.component';
import { Registro1Component } from './component/admin/principal/registro1/registro1.component';
import { SecundarioComponent } from './component/admin/secundario/secundario.component';
import { CompradorComponent } from './component/comprador/comprador.component';
import { HombreComponent } from './component/hombre/hombre.component';
import { NinhoComponent } from './component/hombre/ninho/ninho.component';
import { MujerComponent } from './component/mujer/mujer.component';
import { NinhaComponent } from './component/mujer/ninha/ninha.component';
import { NovedadesComponent } from './component/novedades/novedades.component';
import { OfertasComponent } from './component/ofertas/ofertas.component';
import { OutletComponent } from './component/outlet/outlet.component';
//import { Page404Component } from './component/page404/page404.component';
import { UnisexComponent } from './component/unisex/unisex.component';
import { Login2Component } from './component/admin/secundario/login2/login2.component';
import { Registro2Component } from './component/admin/secundario/registro2/registro2.component';
import { Login3Component } from './component/comprador/login3/login3.component';
import { Registro3Component } from './component/comprador/registro3/registro3.component';
import { Login4Component } from './component/vendedor/login4/login4.component';
import { Registro4Component } from './component/vendedor/registro4/registro4.component';
import { VendedorComponent } from './component/vendedor/vendedor.component';
import { NavBar1Component } from './component/nav-bar1/nav-bar1.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { FooterComponent } from './component/footer/footer.component';
import { IdentificateComponent } from './component/identificate/identificate.component';
import { DeptosComponent } from './component/deptos/deptos.component';

const routes: Routes = [
  { path: "Identificate", component: IdentificateComponent},
  { path: "NavBar", component: NavBar1Component },
  { path: "Footer",component: FooterComponent},
  { path: "Administrador", component: AdminComponent },
  { path: "Admin/Principal", component: PrincipalComponent },
  { path: "Admin/Principal/Login", component: Login1Component },
  { path: "Admin/Principal/Registro", component: Registro1Component },
  { path: "Admin/Secundario", component: SecundarioComponent },
  { path: "Admin/Secundario/Login", component: Login2Component },
  { path: "Admin/Secundario/Registro", component: Registro2Component },
  { path: "Comprador", component: CompradorComponent },
  { path: "Comprador/Login", component: Login3Component },
  { path: "Comprador/Registro", component: Registro3Component },
  { path: "Hombre", component: HombreComponent },
  { path: "Hombre/Ninho", component: NinhoComponent },
  { path: "Mujer", component: MujerComponent },
  { path: "Mujer/Ninha", component: NinhaComponent },
  { path: "Novedades", component: NovedadesComponent },
  { path: "Ofertas", component: OfertasComponent },
  { path: "Outlet", component: OutletComponent },
  //{ path: "**", component: Page404Component },
  { path: "Unisex", component: UnisexComponent },
  { path: "Vendedor", component: VendedorComponent },
  { path: "Vendedor/Login", component: Login4Component },
  { path: "Vendedor/Registro", component: Registro4Component },
  { path: "Iniciar", component: InicioComponent},
  { path: "Deptos", component: DeptosComponent},




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],



})
export class AppRoutingModule { }

