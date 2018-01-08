import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

import { ProductsAction } from './../store/products/products.action';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit{
    private productId: number;
    product: object = {};

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private route: ActivatedRoute,
        private productsAction: ProductsAction
    ) { }

    ngOnInit(){
        this.route.params
            .subscribe(params => {
                const id = params['id'];
                this.productsAction.details(id);
                this.ngRedux
                    .select(state => state.products.productDetails)
                    .subscribe(product => this.product = product)
            })
    }

    like() {
        this.productsAction.like(this.product['id']);
    }
}