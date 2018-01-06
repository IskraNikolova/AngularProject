import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Component
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';


//Services
import { UsersService } from './users.service';
import { UsersActions } from '../store/users/users.actions';

@NgModule({
    imports: [FormsModule],
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    providers: [
        UsersService,
        UsersActions
    ],
    exports: []
})

export class UsersModule{ }