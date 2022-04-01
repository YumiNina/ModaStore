import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { CompradorComponent } from './component/comprador/comprador.component';
import { HombreComponent } from './component/hombre/hombre.component';
import { MenuComponent } from './component/menu/menu.component';
import { MujerComponent } from './component/mujer/mujer.component';
import { NovedadesComponent } from './component/novedades/novedades.component';
import { OfertasComponent } from './component/ofertas/ofertas.component';
import { OutletComponent } from './component/outlet/outlet.component';
import { Page404Component } from './component/page404/page404.component';
import { UnisexComponent } from './component/unisex/unisex.component';
import { VendedorComponent } from './component/vendedor/vendedor.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';

const routes: Routes = [

{ path:"", component:NavBar1Component },
{ path: "admin/principal/login",component:AdminComponent},
{ path: "admin/principal/registro",component:AdminComponent},
{ path: "admin/secundario/login",component:AdminComponent},
{ path: "admin/secundario/registro",component:AdminComponent},
{ path: "comprador/login",component:CompradorComponent},
{ path: "comprador/registro",component:CompradorComponent},
{ path: "hombre/ninho",component:HombreComponent},
{ path: "menu",component:MenuComponent},
{ path: "mujer/ninha",component:MujerComponent},
{ path: "novedades",component:NovedadesComponent},
{ path: "ofertas",component:OfertasComponent},
{ path: "outlet",component:OutletComponent},
{ path: "**",component:Page404Component},
{ path: "unisex",component:UnisexComponent},
{ path: "vendedor/login",component:VendedorComponent},
{ path: "vendedor/registro",component:VendedorComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
