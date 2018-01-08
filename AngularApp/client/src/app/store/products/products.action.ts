import { Injectable } from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { IAppState } from './../app.state';

import { ProductsService } from '../../products/products.service';

export const ADD_PRODUCT = 'products/ADD';
export const ALL_PRODUCTS = 'products/ALL';
export const PRODUCT_DETAILS = 'products/DETAILS';
export const MINE_PRODUCTS = 'products/mine';
export const PRODUCT_LIKE = 'products/LIKE';
export const PRODUCT_ADD_REVIEW = 'products/ADD_REVIEW';
export const PRODUCT_ALL_REVIEWS = 'products/ALL_REVIEWS';
export const PRODUCT_DELETE = 'products/DELETE';

@Injectable()
export class ProductsAction{
    constructor(
        private productsService: ProductsService,
        private ngRedux: NgRedux<IAppState>
    ){ }

    addProduct (product) {
        this.productsService
            .addProduct(product)       
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: ADD_PRODUCT,
                    result
            });
        });    
    } 

    allProducts (page = 1, search = null) {
        this.productsService
            .allProducts(page, search)
            .subscribe(products => {
                this.ngRedux.dispatch({
                    type: ALL_PRODUCTS,
                    products
            });
        });
    }

    details (id) {
        this.productsService
         .details(id)
         .subscribe(product => {
            this.ngRedux.dispatch({
                type: PRODUCT_DETAILS,
                product
            });
        });
    }

    mine () {
        this.productsService
            .mine()
            .subscribe(products => {
                this.ngRedux.dispatch({
                    type: MINE_PRODUCTS,
                    products
                });
            });
    }

    like (id) {
        this.productsService
            .like(id)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: PRODUCT_LIKE,
                    result
                });
            });
    }

    submitReview (id, review) {
        this.productsService
            .submitReview(id, review)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: PRODUCT_ADD_REVIEW,
                    result
                });
            });
    }

    allReviews (id) {
        this.productsService
            .allReviews(id)
            .subscribe(reviews => {
                this.ngRedux.dispatch({
                    type: PRODUCT_ALL_REVIEWS,
                    reviews
                });
            });
    }

    delete (id) {
        this.productsService
             .delete(id)
             .subscribe(result => {
                 this.ngRedux.dispatch({
                     type: PRODUCT_DELETE,
                     result,
                     id                
                 });
             });
    }
}