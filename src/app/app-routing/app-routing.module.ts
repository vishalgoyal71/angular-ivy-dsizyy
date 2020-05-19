import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {HomeComponent} from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Route } from '@angular/router';
const routes:Routes=[
  {
    path:'/home' ,component:HomeComponent},
    {path:'/aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent}];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }