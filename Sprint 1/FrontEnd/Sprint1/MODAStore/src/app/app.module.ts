/* Imports por defecto de angular*/
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//import { Ng5SliderModule } from 'ng5-slider';
//import { NgxPermissionsModule } from 'ngx-permissions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* imports de formularios de angular*/
import { FormsModule } from '@angular/forms';
/* Import Router */
import { RouterModule, Routes } from '@angular/router';
/*Imports propios del proyecto */
import { AppComponent } from './app.component';
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
import { HttpClientModule } from '@angular/common/http';
import { Login2Component } from './component/admin/secundario/login2/login2.component';
import { Registro2Component } from './component/admin/secundario/registro2/registro2.component';
import { Login3Component } from './component/comprador/login3/login3.component';
import { Login4Component } from './component/vendedor/login4/login4.component';
import { Registro4Component } from './component/vendedor/registro4/registro4.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { FooterComponent } from './component/footer/footer.component';
//services
import { DataApiMODASTOREService } from './services/data-api-modastore.service';

import { firstValueFrom } from 'rxjs';
import { AccesoriosComponent } from './component/accesorios/accesorios.component';
import { BuildingComponent } from './component/building/building.component';
import { DeptosComponent } from './component/deptos/deptos.component';
import { IdentificateVendedorComponent } from './component/identificate-vendedor/identificate-vendedor.component';
import { IdentificateClienteComponent } from './component/identificate-cliente/identificate-cliente.component';
import { LaPazComponent } from './component/deptos/la-paz/la-paz.component';
import { CochabambaComponent } from './component/deptos/cochabamba/cochabamba.component';
import { SantaCruzComponent } from './component/deptos/santa-cruz/santa-cruz.component';
import { TarijaComponent } from './component/deptos/tarija/tarija.component';
import { PotosiComponent } from './component/deptos/potosi/potosi.component';
import { PandoComponent } from './component/deptos/pando/pando.component';
import { BeniComponent } from './component/deptos/beni/beni.component';
import { OruroComponent } from './component/deptos/oruro/oruro.component';
import { ChuquisacaComponent } from './component/deptos/chuquisaca/chuquisaca.component';
import { TodosComponent } from './component/deptos/todos/todos.component';
import { IdentificateAdminComponent } from './component/identificate-admin/identificate-admin.component';
import { MainComponent } from './main/main.component';






// Esto es un Array de objetos
const appRoutes:Routes=[
  //Aca se deben defirnir y crear un objeto por cada ruta
  { path: 'main',  component: AppComponent, pathMatch: 'full' },
  { path: "", component: InicioComponent, pathMatch: 'full'},
  { path: 'NavBar', component: NavBar1Component, pathMatch: 'full'  },
  { path: "Footer",component: FooterComponent, pathMatch: 'full' },
  { path: "Administrador", component: AdminComponent, pathMatch: 'full'  },
  { path: "Admin/Principal", component: PrincipalComponent, pathMatch: 'full'  },
  { path: "Admin/Principal/Login", component: Login1Component, pathMatch: 'full'  },
  { path: "Admin/Principal/Registro", component: Registro1Component, pathMatch: 'full'  },
  { path: "Admin/Secundario", component: SecundarioComponent, pathMatch: 'full'  },
  { path: "Admin/Secundario/Login", component: Login2Component, pathMatch: 'full'  },
  { path: "Admin/Secundario/Registro", component: Registro2Component, pathMatch: 'full'  },
  { path: "Comprador", component: CompradorComponent, pathMatch: 'full'  },
  { path: "Comprador/Login", component: Login3Component, pathMatch: 'full'  },
  { path: "Hombre", component: HombreComponent, pathMatch: 'full'  },
  { path: "Hombre/Ninho", component: NinhoComponent, pathMatch: 'full'  },
  { path: "Mujer", component: MujerComponent, pathMatch: 'full'  },
  { path: "Mujer/Ninha", component: NinhaComponent, pathMatch: 'full'  },
  { path: "Novedades", component: NovedadesComponent, pathMatch: 'full'  },
  { path: "Ofertas", component: OfertasComponent, pathMatch: 'full'  },
  { path: "Outlet", component: OutletComponent, pathMatch: 'full'  },
  { path: "Unisex", component: UnisexComponent, pathMatch: 'full'  },
  { path: "Vendedor", component: VendedorComponent, pathMatch: 'full'  },
  { path: "Vendedor/Login", component: Login4Component, pathMatch: 'full'  },
  { path: "Vendedor/Registro", component: Registro4Component, pathMatch: 'full'  },
  { path: "Deptos",component: DeptosComponent, pathMatch: 'full' },
  { path: "Build",component: BuildingComponent, pathMatch: 'full' },
  { path: "Accesorios",component: AccesoriosComponent, pathMatch: 'full' },
  { path: "IdentificateCliente", component: IdentificateClienteComponent, pathMatch: 'full' },
  { path: "IdentificateVendedor", component: IdentificateVendedorComponent, pathMatch: 'full' },
  { path: "Deptos/Beni", component: BeniComponent, pathMatch: 'full' },
  { path: "Deptos/Cochabamba", component: CochabambaComponent, pathMatch: 'full' },
  { path: "Deptos/Tarija", component: TarijaComponent, pathMatch: 'full' },
  { path: "Deptos/Todos", component: TodosComponent, pathMatch: 'full' },
  { path: "IdentificateAdmin", component: IdentificateAdminComponent,pathMatch: 'full'},



  { path: '', redirectTo: '/', pathMatch: 'full' },

  
];

@NgModule({
   declarations: [
    InicioComponent,
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
    Login4Component,
    Registro4Component,
    SecundarioComponent,
    VendedorComponent,
    CompradorComponent,

    FooterComponent,
    AccesoriosComponent,
    BuildingComponent,
    DeptosComponent,
    BuildingComponent,
    DeptosComponent,
    AdminComponent,
    IdentificateVendedorComponent,
    IdentificateClienteComponent,
    LaPazComponent,
    CochabambaComponent,
    SantaCruzComponent,
    TarijaComponent,
    PotosiComponent,
    PandoComponent,
    BeniComponent,
    OruroComponent,
    ChuquisacaComponent,
    CochabambaComponent,
    TodosComponent,
    IdentificateAdminComponent,
    AppComponent,
    MainComponent
  ],
  imports: [




    

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
   
    BrowserAnimationsModule,

  ],


  providers: [/*[DataApiMODASTOREService*/],
  bootstrap: [AppComponent]// En esta linea se esta modificando el acceso a la ruta, es decir, a la pagina de incio
})
export class AppModule {


}


