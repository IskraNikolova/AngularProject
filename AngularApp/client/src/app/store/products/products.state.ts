import { allProducts } from "./products.reducer";

export interface IProductsState{
    productAdded: boolean
    productAddedId: number
    allProducts: Array<object>
    productDetails: object
}

export const initialState: IProductsState = {
    productAdded: false,
    productAddedId: null,
    allProducts: [],
    productDetails: {}
}