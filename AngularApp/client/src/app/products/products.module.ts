import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Router } from '@angular/router';

import { AddProductComponent } from './add-product.component';
import { ListProductsComponent } from './list-products.component';
import { ProductDetailsComponent } from './product-details.component';

import { ProductsService } from './products.service';

import { ProductsAction } from './../store/products/products.action';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ],
    providers: [
        ProductsService,
        ProductsAction
    ],
    declarations: [
        AddProductComponent,
        ListProductsComponent,
        ProductDetailsComponent
    ]
})

export class ProductsModule{ }