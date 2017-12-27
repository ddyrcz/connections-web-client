import { User } from 'app/shared/model/user.model';

export class Comment {
    id: number;
    content: string;
    user: User;
    createdAt: Date;
}
