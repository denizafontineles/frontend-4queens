import Subcategory from "./Subcategory";

export default interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    media: string;
    date: string;
    subcategory: Subcategory | null;
}