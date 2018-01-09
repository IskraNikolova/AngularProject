import { Injectable } from '@angular/core';

import { NgRedux } from "ng2-redux";
import { IAppState } from "../app.state";

import { AdminService } from "../../admin/admin.service";

export const USERS_ALL = "users/ALL";

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
}
