import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutusComponent, ContactusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
