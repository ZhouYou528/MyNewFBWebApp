import { Comment } from './comment'
export class Post {
    constructor(
        public _id: String = '',
        public body: string = '',
        public createdBy: string = '',
        public createdByAvatar: string = 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg',
        public createdAt: Date = null, // need take care initial value
        public likes: number = 0,
        public likedBy: Array<String> = [],
        public comments: Array<Comment> = [],
        public img: string = ''
    ) { }
}