import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';

import { AdminRoute } from './admin-route';
import { AdminActions } from './../store/admin/admin.actions';
import { AdminService } from './admin.service';

@NgModule({
    imports: [CommonModule],
    declarations: [AdminComponent],
    providers: [
        AdminService,
        AdminActions,
        AdminRoute
    ],
})

export class AdminModule{ }