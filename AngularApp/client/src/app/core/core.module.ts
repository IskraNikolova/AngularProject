import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//Components
import { NavbarComponent } from './navbar.component';
import { MessageHandlerComponent } from './message.handler.component';
import { FooterComponent } from './footer.component';

//Services
import { HttpService } from './http.service';
import { AuthService} from './../core/auth.service';

import { PrivateRoute } from './private-route';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        MessageHandlerComponent,
    ],
    providers: [
        HttpService,
        AuthService,
        PrivateRoute
    ],
    exports: [
        NavbarComponent,
        MessageHandlerComponent
    ]
})

export class CoreModule{

}