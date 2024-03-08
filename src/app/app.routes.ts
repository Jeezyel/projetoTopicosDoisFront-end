import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './frist-touch/login/login.component';
import { CadastroComponent } from './frist-touch/cadastro/cadastro.component';
import { FristTouchComponent } from './frist-touch/frist-touch.component';
import { EstadoFormComponent } from './components/estado/estado-form/estado-form.component';
import { EstadoListComponent } from './components/estado/estado-list/estado-list.component';

export const routes: Routes = [
    {path: 'frist-touche', component: FristTouchComponent, title:'frist-touche'},

    {path: 'login' , component: LoginComponent},
    
    {path: 'cadastro' , component: CadastroComponent},

    {path: 'estado/new', component: EstadoFormComponent, title:'frist-touche'},
    {path: 'estado/list', component: EstadoListComponent, title:'frist-touche'},

];
