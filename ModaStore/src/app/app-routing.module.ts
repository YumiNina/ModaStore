import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent} from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent} from './components/sign-up/sign-up.component';
import { ClienteLogInComponent } from './components/log-in/cliente-log-in/cliente-log-in.component';
import { ClienteSignUpComponent } from './components/sign-up/cliente-sign-up/cliente-sign-up.component';
const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'NavBar',component: NavBarComponent},
  {path: 'Fotter',component: FooterComponent},
  {path: 'catalogo',component: CatalogoComponent},
  {path: 'logIn', component: LogInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'logInCliente', component: ClienteLogInComponent},
  {path: 'signUpCliente', component: ClienteSignUpComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
