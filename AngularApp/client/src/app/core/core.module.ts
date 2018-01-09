import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//Components
import { NavbarComponent } from './navbar.component';
import { MessageHandlerComponent } from './message.handler.component';

//Services
import { HttpService } from './http.service';
import { AuthService} from './../core/auth.service';

import { PrivateRoute } from './private-route';
import { AdminRoute } from './admin-route';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavbarComponent,
        MessageHandlerComponent
    ],
    providers: [
        HttpService,
        AuthService,
        PrivateRoute,
        AdminRoute
    ],
    exports: [
        NavbarComponent,
        MessageHandlerComponent
    ]
})

export class CoreModule{

}