import mongoose from "mongoose";
import { UserTypes } from "@aliet/types";

interface UserAttrs  {
  name: string;
  type: string;
  active: boolean;
}

interface UserDoc extends mongoose.Document {
  name: string;
  type: string;
  active: boolean;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: Object.values(UserTypes),
      default: UserTypes.User,
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
