import { User } from 'app/shared/model/user.model';

export class Post {
    constructor(
        public id: number,
        public content: string,
        public image: string,
        public user: User,
        public creationDate: Date
    ) { }
}
