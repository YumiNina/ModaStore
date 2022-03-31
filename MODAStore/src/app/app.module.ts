import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavBar1Component } from './nav-bar1/nav-bar1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
