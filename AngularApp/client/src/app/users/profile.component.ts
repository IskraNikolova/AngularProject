import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from './../store';

import { ProductsAction } from './../store/products/products.action';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{
    products: Array<object> = [];

    constructor (
        private router: Router,
        private ngRedux: NgRedux<IAppState>,
        private productsAction: ProductsAction
    ) { }

    ngOnInit(){
        this.productsAction.mine();
        this.ngRedux
            .select(state => state.products.myProducts)
            .subscribe(products => {
                this.products = products;
            })
    }

    delete (id) {
        this.productsAction.delete(id);
    }
}