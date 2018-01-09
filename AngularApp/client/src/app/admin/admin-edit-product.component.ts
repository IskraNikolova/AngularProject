import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from './../store/app.state';

import { EditProduct } from './edit-product.model';
import { AdminActions } from '../store/admin/admin.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-product',
  templateUrl: './admin-edit-product.component.html'
})

export class AdminEditProductComponent implements OnInit{
    product: EditProduct = new EditProduct();
    
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private router: Router,
        private adminActions: AdminActions,
        private route: ActivatedRoute
    ) { }

    ngOnInit(){
        this.route.params
            .subscribe(params => {
                const id = params['id'];              
                this.adminActions.getEdit(id);              
                this.ngRedux
                    .select(state => state.admin)
                    .subscribe(product => {
                        this.product = product.editProduct;                       
                    });
            });
    }

    postEdit (product){
        this.adminActions.postEdit(this.product);
        this.router.navigateByUrl('');
    }
}