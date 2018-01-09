import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from './../store';

import { AdminActions } from '../store/admin/admin.actions';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit{ 
    users: Array<object> = [];

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private router: Router,
        private adminAction: AdminActions
    ){ }

    ngOnInit(){
        this.adminAction.allUsers();
        
        this.ngRedux
            .select(state => state.admin.allUsers)
            .subscribe(users => {       
                this.users = Object.values(users)
            });
    }

    delete (id) {
        this.adminAction.delete(id);
        this.router.navigateByUrl('/users/all');
    }
}