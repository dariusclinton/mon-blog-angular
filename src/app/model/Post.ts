export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title, content) {
        this.created_at = new Date();
        this.title = title;
        this.content = content;
    }
}
