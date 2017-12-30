import { User } from 'app/shared/model/user.model';
import { Comment } from 'app/shared/model/comment.interface';
import { Type } from 'class-transformer';

export class Post {
    _id: string;
    content: string;
    imageUrl: string | undefined;
    @Type(() => User)
    user: User;
    createdAt: Date;
    @Type(() => Comment)
    comments: Comment[]
}
