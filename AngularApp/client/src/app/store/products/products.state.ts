export interface IProductsState{
    productAdded: boolean
    productAddedId: number
    allProducts: Array<object>
    productDetails: object
    productReviews: Array<object>
    myProducts: Array<object>
}

export const initialState: IProductsState = {
    productAdded: false,
    productAddedId: null,
    allProducts: [],
    productDetails: {},
    productReviews: [],
    myProducts: []
}