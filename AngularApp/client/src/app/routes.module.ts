import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Route } from '@angular/router/src/config';
import { PrivateRoute } from './core/private-route';

import { StatsComponent } from './stats/stats.component';
import { RegisterComponent } from './users/register.component';
import { LoginComponent } from './users/login.component';
import { AddProductComponent } from './products/add-product.component';
import { ListProductsComponent } from './products/list-products.component';
import { ProductDetailsComponent } from './products/product-details.component';

const routes: Routes = [
    {path: '', component: StatsComponent},
    {path: 'users/register', component: RegisterComponent},
    {path: 'users/login', component: LoginComponent},
    {path: 'products/add', component: AddProductComponent, canActivate: [PrivateRoute]},
    {path: 'products/all', component: ListProductsComponent},
    {path: 'products/details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ProductRoutesModule{ }