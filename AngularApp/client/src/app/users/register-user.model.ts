export class RegisterUser{
    constructor(
        public name?: string,
        public email?: string,
        public password?: string,
        public confirm?: string,
        public isAdmin?: boolean
    ){ }
}