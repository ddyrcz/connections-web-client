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
        return "https://image.freepik.com/free-icon/emoticon-square-smiling-face-with-closed-eyes_318-58597.jpg";
    }

    set AvatarUrl(url: string) {
        this.avatarUrl = url
    }

    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}
