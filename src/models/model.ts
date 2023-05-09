export class Content {
    title: string;
    description: string;
    author: string;
    created: string;

    constructor(
        title: string,
        description: string,
        author: string,
        created: string
    ) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.created = created;
    }
}
