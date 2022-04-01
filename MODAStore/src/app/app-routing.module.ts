import { NgModule } from '@angular/core';
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
import { Page404Component } from './component/page404/page404.component';
import { UnisexComponent } from './component/unisex/unisex.component';
import { Login2Component } from './component/admin/secundario/login2/login2.component';
import { Registro2Component } from './component/admin/secundario/registro2/registro2.component';
import { Login3Component } from './component/comprador/login3/login3.component';
import { Registro3Component } from './component/comprador/registro3/registro3.component';
import { Login4Component } from './component/vendedor/login4/login4.component';
import { Registro4Component } from './component/vendedor/registro4/registro4.component';
import { VendedorComponent } from './component/vendedor/vendedor.component';
import { NavBar1Component } from './component/nav-bar1/nav-bar1.component';

const routes: Routes = [

  { path: " ", component: NavBar1Component },
  { path: "administrador", component: AdminComponent },
  { path: "admin/principal", component: PrincipalComponent },
  { path: "admin/principal/login1", component: Login1Component },
  { path: "admin/principal/registro1", component: Registro1Component },
  { path: "admin/secundario", component: SecundarioComponent },
  { path: "admin/secundario/login2", component: Login2Component },
  { path: "admin/secundario/registro2", component: Registro2Component },
  { path: "comprador", component: CompradorComponent },
  { path: "comprador/login3", component: Login3Component },
  { path: "comprador/registro3", component: Registro3Component },
  { path: "hombre", component: HombreComponent },
  { path: "hombre/ninho", component: NinhoComponent },
  { path: "mujer/ninha", component: MujerComponent },
  { path: "mujer/ninha", component: NinhaComponent },
  { path: "novedades", component: NovedadesComponent },
  { path: "ofertas", component: OfertasComponent },
  { path: "outlet", component: OutletComponent },
  { path: "**", component: Page404Component },
  { path: "unisex", component: UnisexComponent },
  { path: "vendedor", component: VendedorComponent },
  { path: "vendedor/login4", component: Login4Component },
  { path: "vendedor/registro4", component: Registro4Component },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



})
export class AppRoutingModule { }
