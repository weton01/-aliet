import mongoose from 'mongoose';
import { ProductsTypes, ProductAttrs } from '@aliet/types';

interface ProductDoc extends mongoose.Document {
    name: string;
    quantity: number;
    value: number;
    type: ProductsTypes;
    active: boolean
}
 

interface ProductModel extends mongoose.Model<ProductDoc> { 
    build(attrs: ProductAttrs): ProductDoc;
}

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:  true
        },
        quantity: {
            type: Number,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true,
            enum: Object.values(ProductsTypes)
        },
        images: {
            type: [String],
            required: true
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

productSchema.statics.build = (attrs: ProductAttrs) => {
    return new Product(attrs);
};
 
const Product = mongoose.model<ProductDoc, ProductModel>('Product', productSchema);

export { Product };