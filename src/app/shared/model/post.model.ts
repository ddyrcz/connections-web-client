import { User } from 'app/shared/model/user.model';
import { Comment } from 'app/shared/model/comment.interface';

export class Post {
    _id: string;
    content: string;
    imageUrl: string | undefined;
    user: User;
    createdAt: Date;
    comments: Comment[]
}
