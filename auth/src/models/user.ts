import mongoose from 'mongoose';
import { Password } from '../services/password';

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
        lastName: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
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
            }
        }
    }
)


const User = mongoose.model('User', userSchema);


export { User };