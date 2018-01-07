import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsComponent } from './stats.component';

import { StatsService } from './stats.service';

import { StatsAction } from './../store/stats/stats.action';

@NgModule({
    declarations: [StatsComponent],
    providers: [
        StatsService,
        StatsAction
    ],
    imports: [CommonModule]
})

export class StatsModule{ }