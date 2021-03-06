import { Injectable } from '@angular/core';

import { CanActivate, 
         ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../core/auth.service';

@Injectable()
export class AdminRoute implements CanActivate{
    constructor(private authService: AuthService,
                private router: Router){ }
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | 
                                          Observable<boolean> | Promise<boolean> {

        return this.authService.isAdmin();
    }
    
}