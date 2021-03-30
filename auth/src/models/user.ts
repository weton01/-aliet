import mongoose from 'mongoose';
import { Password } from '../services/password';
import { UserTypes, UserAttrs } from '@aliet/types';

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    last_name: string;
    cpf: string;
    type: string;
    active: boolean;
}
  
// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> { 
    build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: { 
            type: String,
            required: true
        },
        name: {
            type: String,
            required:  true
        },
        last_name: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            enum: Object.values(UserTypes),
            default: UserTypes.User
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
                delete ret.password;
                delete ret.__v;
                delete ret.active
            }
        }
    }
)

userSchema.pre('save', async function(done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};
 
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };