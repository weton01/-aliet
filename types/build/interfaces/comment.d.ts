export interface AnswearAttrs {
    description: string;
    created_at: Date;
    user: string;
}
export interface CommentAttrs {
    like: string[];
    description: string;
    user: string;
    created_at: Date;
    answears: AnswearAttrs[];
}
