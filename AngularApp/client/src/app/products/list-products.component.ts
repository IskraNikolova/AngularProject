import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

import  { ProductsAction } from './../store/products/products.action';
import { AdminActions } from './../store/admin/admin.actions';
import { AuthService } from './../core/auth.service';
import { AdminRoute } from '../admin/admin-route';

@Component({
    selector: 'list-products',
    templateUrl: './list-products.component.html'
})

export class ListProductsComponent implements OnInit{
    page: number = 1;
    searchText: string = '';
    products: Array<object> = [];
    isAdmin: boolean = false;

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private route: ActivatedRoute,
        private router: Router,
        private productsAction: ProductsAction,
        private adminAction: AdminActions,
        private authService: AuthService
    ){ }

    ngOnInit(){
        this.route
            .queryParams
            .subscribe(params => {
                this.page = +params['page'] || 1;
                this.searchText = params['search'];

                this.productsAction
                    .allProducts(this.page, this.searchText);
                this.ngRedux
                    .select(state => state)
                    .subscribe(state => {
                        this.products = state.products.allProducts;
                        this.isAdmin = state.users.isAdmin;
                    });
            });
    }

    search (){
        this.router.navigateByUrl(`/products/all?search=${this.searchText}`);
    }

    prevPage (){
        if(this.page === 1){
            return;
        }

        const url = this.getUrl(this.page - 1);
        this.router.navigateByUrl(url);
    }

    nextPage (){
        if(this.products.length === 0 || this.products.length < 10){
            return;
        }
        const url = this.getUrl(this.page + 1);
        this.router.navigateByUrl(url);
    }

    delete (id) {
        this.productsAction.delete(id);
        this.router.navigateByUrl('/users/all');
    }

    private getUrl (page){
        let url = `/products/all?page=${page}`;
        if(this.searchText) {
            url += `&search=${this.searchText}`;
        }

        return url;
    }
}