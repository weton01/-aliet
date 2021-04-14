import mongoose from "mongoose";
import { CommentAttrs, AnswearAttrs } from "@aliet/types";

interface CommentDoc extends mongoose.Document {
  like: string[];
  description: string;
  user_id: string;
  answears: AnswearAttrs[];
}

interface CommentModel extends mongoose.Model<CommentDoc> {
  build(attrs: CommentAttrs): CommentDoc;
}

const commentSchema = new mongoose.Schema(
  {
    like: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    created_at: {
      type:  mongoose.Schema.Types.Date
    },
    answears: {
      type: Array,
      required: true,
    }
  },
  { 
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
        delete ret.active;
      },
    },
  }
);

commentSchema.statics.build = (attrs: CommentAttrs) => {
  return new Comment(attrs);
};

const Comment = mongoose.model<CommentDoc, CommentModel>(
  "Comment",
  commentSchema
);

export { Comment };
