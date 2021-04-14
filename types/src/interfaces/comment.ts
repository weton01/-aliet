export interface AnswearAttrs {
  description: string;
  created_at: Date;
  user_id: string;
}

export interface CommentAttrs {
  like: string[];
  description: string;
  user_id: string;
  created_at: Date;
  answears: AnswearAttrs[];
}
