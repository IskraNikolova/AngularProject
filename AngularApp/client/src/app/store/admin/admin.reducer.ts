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
    console.log(action)
    return state;
}

export function adminReducer(state = initialState, action){
    if(action.type === USERS_ALL){
        return allUsers(state, action);
    }

    if(action.type === USERS_DELETE){
        return deleteUser(state, action);
    }

    if(action.type === EDIT_PRODUCT){
        return getEditProduct(state, action);
    }

    if(action.type === POST_EDIT_PRODUCT){
        return postEditProduct(state, action);
    }

    return state;
}