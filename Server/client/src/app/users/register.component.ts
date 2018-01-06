import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

import { RegisterUser } from './register-user.model';

import { UsersActions } from '../store/users/users.actions';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent{
    user: RegisterUser = new RegisterUser();

    constructor(
        private usersActions: UsersActions,
        private ngRedux: NgRedux<IAppState>,
        private router: Router
    ){ }

    register(){
        this.usersActions.register(this.user);
        this.ngRedux
         .select(state => state.users.userRegistered)
         .subscribe(userRegistered => {
             if(userRegistered){
                this.router.navigateByUrl('users/login')
             }
         });
    }
}