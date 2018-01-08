import { initialState } from './products.state';

import { 
    ADD_PRODUCT,
    ALL_PRODUCTS,
    PRODUCT_DETAILS,
    MINE_PRODUCTS,
    PRODUCT_LIKE,
    PRODUCT_ADD_REVIEW,
    PRODUCT_ALL_REVIEWS,
    PRODUCT_DELETE
    } from './products.action';

import { ProductReview } from '../../products/product-review.model';

export function addProduct(state, action) {
    const result = action.result;
    return Object.assign({}, state, {
        productAdded: result.success,
        productAddedId: result.success ? result.product.id : null
    });
}

export function allProducts (state, action) {
    const result = action.result;
    return Object.assign({}, state, {
        allProducts: action.products
    });
}

export function getProductDetails(state, action) {
    const result = action.result;

    return Object.assign({}, state, {
        productDetails: action.product
    });
}

export function mineProducts(state, action) {
    return Object.assign({}, state, {
        myProducts: action.products
    })
}

export function productLike(state, action) {
    if (action.result.success) {
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

function addReview(state, action) {
    const result = action.result;
    if(result.success) {
        const review = result.review;
        const productReviews = state.productReviews;

        return Object.assign({}, state, {
            productReviews: [...productReviews, review]
        });
    }

    return state;
}

function productAllReviews(state, action) {
    return Object.assign({}, state, {
        productReviews: action.reviews
    });
}

function productDelete(state, action) {
    const result = action.result;
    if(result.success){
        const id = action.id;
        const productIndex = state.myProducts.findIndex(pr => pr.id === id);

        if(productIndex >= 0){
            const myProducts = state.myProducts.filter(product => product.id !== id);
            return Object.assign({}, state, {
                myProducts
            });
        }
    }

    return state;
}

export function productsReducer(state = initialState, action) {
    switch(action.type) {
       case ADD_PRODUCT:
            return addProduct(state, action);
       case ALL_PRODUCTS:
            return allProducts(state, action);
       case PRODUCT_DETAILS:
            return getProductDetails(state, action);
       case MINE_PRODUCTS:
            return mineProducts(state, action);
       case PRODUCT_LIKE:
            return productLike(state, action);
       case PRODUCT_ADD_REVIEW:
            return addReview(state, action);
       case PRODUCT_ALL_REVIEWS:
          return productAllReviews(state, action);
       case PRODUCT_DELETE:
          return productDelete(state, action);
       default:
            return state;
    }
}