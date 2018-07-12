import { Comment } from './comment'
export class Post {
    constructor(
        public _id: String = '',
        public body: string = '',
        public createdBy: string = '',
        public createdAt: Date = null, // need take care initial value
        public likes: number = 0,
        public likedBy: Array<String> = [],
        public comments: Array<Comment> = [],
        public img: string = ''
    ) { }
}