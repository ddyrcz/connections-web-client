import { User } from 'app/shared/model/user.model';

export interface Post {
    id: number;
    content: string;
    imageUrl: string;
    user: User;
    createdAt: Date;
}
