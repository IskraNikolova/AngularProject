export interface IAdminState{
    allUsers: Array<object>
    editProduct: object
}

export const initialState: IAdminState = {
    allUsers: [],
    editProduct: {}
}