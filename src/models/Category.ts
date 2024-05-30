import Subcategory from "./Subcategory";

export default interface Category {
    id: number;
    name: string;
    description?: string;
    subcategory: Subcategory | null;
}