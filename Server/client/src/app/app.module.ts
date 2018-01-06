import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IAppState } from './store';

//Modules
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { ProductRoutesModule } from './routes.module';

//Components
import { AppComponent } from './app.component';

//Services
import { AuthService } from './core/auth.service';

import {config}  from './core/config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgReduxModule,
    ProductRoutesModule,  
    CoreModule,  
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private authService: AuthService,
    private router: Router
    ){
        this.ngRedux.provideStore(store);

        config(ngRedux, router, authService)
    }
}
