import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

import { ProductsAction } from './../store/products/products.action';

import { ProductReview } from './product-review.model';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit{
    private productId: number;
    product: object = {};
    reviews: Array<object> = [];
    review: ProductReview = new ProductReview(5);

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
                this.productsAction.allReviews(id);
                this.ngRedux
                    .select(state => state.products)
                    .subscribe(products => {
                        this.product = products.productDetails;
                        this.reviews = products.productReviews;
                    });
            });
    }

    like() {
        this.productsAction
            .like(this.product['id']);
    }

    submitReview (){
        this.productsAction
            .submitReview(this.product['id'], this.review);
    }
}