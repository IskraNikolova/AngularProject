import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Component
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';


//Services
import { UsersService } from './users.service';
import { UsersActions } from '../store/users/users.actions';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
        ProfileComponent
    ],
    providers: [
        UsersService,
        UsersActions
    ],
})

export class UsersModule{ }