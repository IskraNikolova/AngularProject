import { initialState } from './products.state';
import { 
    ADD_PRODUCT,
    ALL_PRODUCTS,
    PRODUCT_DETAILS,
    PRODUCT_LIKE
    } from './products.action';

export function addProduct(state, action){
    const result = action.result;
    return Object.assign({}, state, {
        productAdded: result.success,
        productAddedId: result.success ? result.product.id : null
    });
}

export function allProducts(state, action){
    const result = action.result;
    return Object.assign({}, state, {
        allProducts: action.products
    });
}

export function getProductDetails(state, action){
    const result = action.result;
    return Object.assign({}, state, {
        productDetails: action.product
    });
}

export function produktLike(state, action){
    if(action.result.success){
        const currentProductLikes = state.productDetails.likes;
        const productDetails = Object.assign({}, state.productDetails, {
            likes: currentProductLikes + 1
        });
    
        return Object.assign({}, state, {
            productDetails
        });
    }

    return state;
}

export function productsReducer(state = initialState, action){
    switch(action.type){
       case ADD_PRODUCT:
            return addProduct(state, action);
       case ALL_PRODUCTS:
            return allProducts(state, action);
       case PRODUCT_DETAILS:
            return getProductDetails(state, action);
       case PRODUCT_LIKE:
            return produktLike(state, action)
       default:
            return state;
    }
}