import { initialState } from './admin.state';

import { USERS_ALL } from './admin.actions';

function allUsers(state, action){
    return Object.assign({}, state, {
        allUsers: action.users
    });
}

export function adminReducer(state = initialState, action){
    if(action.type === USERS_ALL){
        return allUsers(state, action);
    }

    return state;
}