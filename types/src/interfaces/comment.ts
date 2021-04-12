export interface AnswearAttrs {
  like: boolean;
  description: string;
}

export interface CommentAttrs {
  like: boolean;
  description: string;
  answears: AnswearAttrs[];
}
