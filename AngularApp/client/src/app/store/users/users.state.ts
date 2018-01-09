export interface IUsersState{
    userRegistered: boolean,
    userAuthenticated: boolean,
    isAdmin: boolean,
    token: string,
    username: string,
}

export const initialState: IUsersState = {
    userRegistered: false,
    userAuthenticated: false,
    isAdmin: false,
    token: null,
    username: null,
}