import { User } from 'app/shared/model/user.model';

export interface Comment {
    id: number;
    postId: number;
    content: string;
    user: User;
    createdAt: Date;
}
