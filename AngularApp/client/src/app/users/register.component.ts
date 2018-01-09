import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

import { RegisterUser } from './register-user.model';

import { AuthService } from './../core/auth.service';

import { UsersActions } from '../store/users/users.actions';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent{
    user: RegisterUser = new RegisterUser();

    constructor(
        private authService: AuthService,
        private usersActions: UsersActions,
        private ngRedux: NgRedux<IAppState>,
        private router: Router
    ){ }

    register(){   
        if(!this.authService.hasAdmin()){
            this.authService.setAdmin(this.user.name);
            this.authService.saveAdminSession();
            this.user.isAdmin = true;
        }else{
            this.user.isAdmin = false;
        }

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