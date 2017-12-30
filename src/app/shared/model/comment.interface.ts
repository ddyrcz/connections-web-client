import { User } from 'app/shared/model/user.model';
import { Type } from 'class-transformer';

export class Comment {
    id: number;
    content: string;
    @Type(() => User)
    user: User;
    createdAt: Date;
}
