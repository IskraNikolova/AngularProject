import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Route } from '@angular/router/src/config';
import { PrivateRoute } from './core/private-route';

import { StatsComponent } from './stats/stats.component';
import { RegisterComponent } from './users/register.component';
import { LoginComponent } from './users/login.component';
import { AddProductComponent } from './products/add-product.component';

const routes: Routes = [
    {path: '', component: StatsComponent},
    {path: 'users/register', component: RegisterComponent},
    {path: 'users/login', component: LoginComponent},
    {path: 'products/add', component: AddProductComponent, canActivate: [PrivateRoute]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ProductRoutesModule{ }