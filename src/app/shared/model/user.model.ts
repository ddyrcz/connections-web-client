export class User {
    _id: string;
    name: string;
    lastname: string;
    private _avatarUrl: string | undefined;
    following: [string]
    email: string
    password: string
    createdAt: Date

    get avatarUrl(): string {
        if (this._avatarUrl) {
            return this._avatarUrl
        }
        return "https://image.freepik.com/free-icon/emoticon-square-smiling-face-with-closed-eyes_318-58597.jpg";
    }

    set avatarUrl(url: string) {
        this._avatarUrl = url
    }
}
