import { initialState } from './admin.state';

import { 
    USERS_ALL,
    USERS_DELETE
 } from './admin.actions';

function allUsers(state, action){
    return Object.assign({}, state, {
        allUsers: action.users
    });
}

function deleteUser(state, action){
    const result = action.result;
    if(result.success){
        const id = action.id;
        let arrayState = Object.values(state.allUsers);
        const allUsers = arrayState.filter(user => user.id !== id);
        return Object.assign({}, state, {
            allUsers
        });
    }

    return state;
}

export function adminReducer(state = initialState, action){
    if(action.type === USERS_ALL){
        return allUsers(state, action);
    }

    if(action.type === USERS_DELETE){
        return deleteUser(state, action);
    }

    return state;
}