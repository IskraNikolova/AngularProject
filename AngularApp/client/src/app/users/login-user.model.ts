export class LoginUser{
    constructor(
        public email?: string,
        public password?: string,
        public isAdmin?: boolean
    ){ }
}