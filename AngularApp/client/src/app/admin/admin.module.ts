import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';

import { AdminRoute } from './admin-route';

@NgModule({
    imports: [CommonModule],
    declarations: [AdminComponent],
    providers: [AdminRoute],
})

export class AdminModule{ }