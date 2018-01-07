import { initialState } from './stat.state';

import { STATS_REQUESTED } from './stats.action';

function statsRequetsed (state, action){
    const stats = action.stats;

    return Object.assign({}, state, {
        users: stats.users,
        products: stats.products
    });
}

export function statsReducer(state = initialState, action){
    switch(action.type){
        case STATS_REQUESTED:
          return statsRequetsed(state, action);
        default:
          return state;
    }
}