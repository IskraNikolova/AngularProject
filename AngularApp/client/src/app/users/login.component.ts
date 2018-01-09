import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { UsersActions } from '../store/users/users.actions';

import { AuthService } from '../core/auth.service';

import { LoginUser } from './login-user.model';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent{
    user: LoginUser = new LoginUser();

    constructor(
        private usersActions: UsersActions,
        private authService: AuthService,
        private ngRedux: NgRedux<IAppState>,
        private router: Router
    ){ }

    login(){
        this.usersActions.login(this.user);
        this.ngRedux
        .select(state => state.users)
        .subscribe(user => {
            if(user.userAuthenticated){
                if(user.isAdmin){ 
                    this.authService.saveAdminSession();
                }

                this.authService.authenticateUser(user.token);
                this.authService.saveUser(user.username);
                this.router.navigateByUrl('')
            }
        });
    }
}