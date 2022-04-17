import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent} from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'NavBar',component: NavBarComponent},
  {path: 'Fotter',component: FooterComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
