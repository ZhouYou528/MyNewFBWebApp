export class Message {
    constructor(
        public _id: String = '',
        public fromUser: string = '',
        public toUser: string = '',
        public category: number = -1,
        public status: number = -1
    ) {}
}