import { Injectable } from '@angular/core';

import { NgRedux } from "ng2-redux";
import { IAppState } from "../app.state";

import { AdminService } from "../../admin/admin.service";

export const USERS_ALL = 'users/ALL';
export const USERS_DELETE = 'users/DELETE';
export const EDIT_PRODUCT = 'products/EDIT';
export const POST_EDIT_PRODUCT = 'products/POST_EDIT';

@Injectable()
export class AdminActions{
    constructor(private adminService: AdminService,
                private ngRedux: NgRedux<IAppState>
    ){ }

    allUsers () {
        this.adminService
            .allUsers()
            .subscribe(users => {
                this.ngRedux.dispatch({
                    type: USERS_ALL,
                    users
            });
        });
    }

    delete (id) {
        this.adminService
            .delete(id)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: USERS_DELETE,
                    result,
                    id                
                });
            });
    }

    getEdit (id) {
        this.adminService.edit(id)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: EDIT_PRODUCT,
                    result            
                });
            });
    }

    postEdit (product) {
        this.adminService
            .postEdit(product)
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: POST_EDIT_PRODUCT,
                    result
                });
            });
    }
}
