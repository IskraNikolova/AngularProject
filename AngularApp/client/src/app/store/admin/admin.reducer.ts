import { initialState } from './admin.state';

import { 
    USERS_ALL,
    USERS_DELETE,
    EDIT_PRODUCT,
    POST_EDIT_PRODUCT
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

function getEditProduct (state, action){
    let product = action.result;
    return Object.assign({}, state, {
        editProduct: product
    });
}

function postEditProduct (state, action){
    const result = action.result;
    if(result.success) {     
        console.log(result);      
        return Object.assign({}, state, {
            editProduct: result.product
        });
    }

    return state;
}

export function adminReducer(state = initialState, action){
    switch(action.type){
        case USERS_ALL:
            return allUsers(state, action); 
        case USERS_DELETE:
            return deleteUser(state, action);
        case EDIT_PRODUCT:
            return getEditProduct(state, action);
        case POST_EDIT_PRODUCT:
            return postEditProduct(state, action);
        default:
            return state;
    }
}