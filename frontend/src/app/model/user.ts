export class User {
    constructor(
        public _id: String = '',
        public username: string = '',
        public password: string = '',
        public email   : string = '',
        public nickname: string = '',
        public gender  : string = '',
        public dob     : Date = new Date(),
        public avatar: string = ''
    ) {}
}