import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AddProduct } from './add-product.model';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

import { ProductsAction } from './../store/products/products.action';
import { productsReducer } from '../store/products/products.reducer';

@Component({
    selector: 'add-product',
    templateUrl: './add-product.component.html'
})

export class AddProductComponent{
    product: AddProduct = new AddProduct();

    constructor (
        private router: Router,
        private ngRedux: NgRedux<IAppState>,
        private productsAction: ProductsAction
    ) { }

    addProduct () {
        this.productsAction
            .addProduct(this.product);
        this.ngRedux
            .select(state => state.products)
            .subscribe(products => {
                const productId = products.productAddedId;
                if(products.productAdded){
                    this.router.navigateByUrl(`/products/details/${productId}`);
                }
            });
    }
}