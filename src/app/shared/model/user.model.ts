export class User {
    _id: string;
    name: string;
    lastname: string;
    private avatarUrl: string | undefined;
    following: [string]
    email: string
    password: string
    createdAt: Date

    // to include "avatarUrl" field in JSON object
    get AvatarUrl(): string {
        if (this.avatarUrl) {
            return this.avatarUrl
        }
        return "https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png";
    }

    set AvatarUrl(url: string) {
        this.avatarUrl = url
    }

    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}
