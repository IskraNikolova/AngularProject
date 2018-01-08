import { Injectable } from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { IAppState } from './../app.state';

import { ProductsService } from '../../products/products.service';

export const ADD_PRODUCT = 'products/ADD';
export const ALL_PRODUCTS = 'products/ALL';
export const PRODUCT_DETAILS = 'products/DETAILS';
export const PRODUCT_LIKE = 'products/LIKE';

@Injectable()
export class ProductsAction{
    constructor(
        private productsService: ProductsService,
        private ngRedux: NgRedux<IAppState>
    ){ }

    addProduct (product){
        this.productsService
            .addProduct(product)       
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: ADD_PRODUCT,
                    result
            });
        });    
    } 

    allProducts (page = 1, search = null){
        this.productsService
            .allProducts(page, search)
            .subscribe(products => {
                this.ngRedux.dispatch({
                    type: ALL_PRODUCTS,
                    products
            });
        });
    }

    details (id){
        this.productsService
         .details(id)
         .subscribe(product => {
            this.ngRedux.dispatch({
                type: PRODUCT_DETAILS,
                product
            });
        });
    }

    like (id){
        this.productsService
            .like(id)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: PRODUCT_LIKE,
                    result
                });
            });
    }
}