import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Route } from '@angular/router/src/config';

import { RegisterComponent } from './users/register.component';
import { LoginComponent } from './users/login.component';

const routes: Routes = [
    {path: 'users/register', component: RegisterComponent},
    {path: 'users/login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ProductRoutesModule{ }