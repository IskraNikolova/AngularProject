import { initialState } from './users.state';

import { 
    USER_REGISTERED,
    USER_LOGGED_IN,
    USER_LOGOUT
   } from './users.actions';

export function userRegistration(state, action){
    const isAdmin = action.user.isAdmin;
    const result = action.result;
    return Object.assign({}, state, {      
        userRegistered: result.success,
        isAdmin: isAdmin
    });
}

export function userLogin(state, action){
    const isAdmin = action.result.user.isAdmin;
    const result = action.result;
    return Object.assign({}, state, {
        userAuthenticated: result.success,
        token: result.token,
        username: result.user ? result.user.name : null,
        isAdmin: isAdmin
    })
}

export function userLogout(state, action){
    return Object.assign({}, state, {
        userAuthenticated: false,
        isAdmin: false,
        token: null,
        username: null
    });
}

export function usersReducer(state=initialState, action){
    switch(action.type){
        case USER_REGISTERED:
           return userRegistration(state, action);
        case USER_LOGGED_IN:
           return userLogin(state, action);
        case USER_LOGOUT:
           return userLogout(state, action);
        default:
           return state;
    }
}