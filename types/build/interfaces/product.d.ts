import { ProductsTypes } from '../types/product';
export interface ProductAttrs {
    name: string;
    quantity: number;
    value: number;
    type: ProductsTypes;
}
