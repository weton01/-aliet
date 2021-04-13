export interface AnswearAttrs {
    description: string;
    created_at: string;
    user_id: string;
}
export interface CommentAttrs {
    like: string[];
    description: string;
    user_id: string;
    answears: AnswearAttrs[];
}
