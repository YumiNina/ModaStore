import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SantaCruzComponent } from './component/deptos/santa-cruz/santa-cruz.component';
import { IdentificateClienteComponent } from './component/identificate-cliente/identificate-cliente.component';
import { AccesoriosComponent } from './component/accesorios/accesorios.component';
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
import { UnisexComponent } from './component/unisex/unisex.component';
import { Login2Component } from './component/admin/secundario/login2/login2.component';
import { Registro2Component } from './component/admin/secundario/registro2/registro2.component';
import { Login3Component } from './component/comprador/login3/login3.component';
import { Login4Component } from './component/vendedor/login4/login4.component';
import { Registro4Component } from './component/vendedor/registro4/registro4.component';
import { VendedorComponent } from './component/vendedor/vendedor.component';
import { NavBar1Component } from './component/nav-bar1/nav-bar1.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { FooterComponent } from './component/footer/footer.component';
import { DeptosComponent } from './component/deptos/deptos.component';
import { IdentificateVendedorComponent } from './component/identificate-vendedor/identificate-vendedor.component';
import { BeniComponent } from './component/deptos/beni/beni.component';
import { CochabambaComponent } from './component/deptos/cochabamba/cochabamba.component';
import { PandoComponent } from './component/deptos/pando/pando.component';
import { TarijaComponent } from './component/deptos/tarija/tarija.component';
import { PotosiComponent } from './component/deptos/potosi/potosi.component';
import { TodosComponent } from './component/deptos/todos/todos.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: '/', component: InicioComponent},
  { path: "main",  component: AppComponent},
  { path: 'NavBar', component: NavBar1Component },
  { path: 'Footer',component: FooterComponent},
  { path: "Administrador", component: AdminComponent },
  { path: "Admin/Principal", component: PrincipalComponent },
  { path: "Admin/Principal/Login1", component: Login1Component },
  { path: "Admin/Principal/Registro1", component: Registro1Component },
  { path: "Admin/Secundario", component: SecundarioComponent },
  { path: "Admin/Secundario/Login2", component: Login2Component },
  { path: "Admin/Secundario/Registro2", component: Registro2Component },
  { path: "Comprador", component: CompradorComponent },
  { path: "Comprador/Login3", component: Login3Component },
  { path: "Hombre", component: HombreComponent },
  { path: "Hombre/Ninho", component: NinhoComponent },
  { path: "Mujer", component: MujerComponent },
  { path: "Mujer/Ninha", component: NinhaComponent },
  { path: "Novedades", component: NovedadesComponent },
  { path: "Ofertas", component: OfertasComponent },
  { path: "Outlet", component: OutletComponent },
  { path: "Unisex", component: UnisexComponent },
  { path: "Vendedor", component: VendedorComponent },
  { path: "Vendedor/Login", component: Login4Component },
  { path: "Vendedor/Registro", component: Registro4Component },
  { path: "Iniciar", component: InicioComponent},
  { path: "Deptos", component: DeptosComponent},
  { path: "Accesorios", component: AccesoriosComponent},
  { path: "IdentificateCliente", component: IdentificateClienteComponent},
  { path: "IdentificateVendedor", component: IdentificateVendedorComponent},
  { path: "Deptos/Beni", component: BeniComponent },
  { path: "Deptos/Cochabamba", component: CochabambaComponent},
  { path: "Deptos/Tarija", component: TarijaComponent},
  { path: "Deptos/Potosi", component: PotosiComponent },
  { path: "Deptos/Todos", component: TodosComponent },

  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]



})
export class AppRoutingModule { }

