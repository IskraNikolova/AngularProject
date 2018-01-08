import { Component, OnInit} from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { IAppState } from './../store'
import { StatsAction } from './../store/stats/stats.action';

import { StatsModel } from './stats.model';

@Component({
    selector: 'stats',
    templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit{
    stats: StatsModel = new StatsModel();
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private statsAction: StatsAction
    ){ }

    ngOnInit(){
        this.statsAction.get();
        this.ngRedux.select(state => state.stats)
        .subscribe(stats => this.stats = stats)        
    }
}