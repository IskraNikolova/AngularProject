import { Injectable } from '@angular/core';

import { NgRedux } from "ng2-redux";
import { IAppState } from "../app.state";

import { AdminService } from "../../admin/admin.service";

export const USERS_ALL = 'users/ALL';
export const USERS_DELETE = 'users/DELETE';

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
}
