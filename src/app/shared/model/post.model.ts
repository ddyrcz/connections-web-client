import { User } from 'app/shared/model/user.model';
import { Comment } from 'app/shared/model/comment.interface';

export class Post {
    id: number;
    content: string;
    imageUrl: string;
    user: User;
    createdAt: Date;
    comments: Comment[]
}
