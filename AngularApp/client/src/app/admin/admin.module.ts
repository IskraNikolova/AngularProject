import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { AdminComponent } from './admin.component';
import {AdminEditProductComponent } from './admin-edit-product.component';

import { AdminRoute } from './admin-route';
import { AdminActions } from './../store/admin/admin.actions';
import { AdminService } from './admin.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        AdminComponent,
        AdminEditProductComponent
    ],
    providers: [
        AdminService,
        AdminActions,
        AdminRoute
    ],
})

export class AdminModule{ }