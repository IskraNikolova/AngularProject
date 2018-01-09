import { Component, OnInit, state } from '@angular/core';
import { Router } from '@angular/router';

import { NgRedux } from 'ng2-redux';
import { IAppState } from './../store/app.state';

import { AuthService } from './auth.service';
import { UsersActions } from './../store/users/users.actions';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit{
    authenticated: boolean = false;
    isAdmin: boolean = false;
    username: string = null;

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private router: Router,
        private authService: AuthService,
        private usersActions: UsersActions
    ){ }

    ngOnInit(){      
        this.ngRedux.select(state => state.users)
        .subscribe(users => {
            console.log(users)
            this.authenticated = users.userAuthenticated;
            this.username = users.username;
            this.isAdmin = users.isAdmin;          
        });
        this.isAdmin = this.authService.isAdmin();
    }

    logout(){
        this.usersActions.logout();
        this.authService.deauthenticateUser();
        this.authService.removeUser();
        this.authService.clearAdminSession();
        this.router.navigateByUrl('');
    }
 }