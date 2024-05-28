import Category from "./Category";

export default interface Subcategory {
    id: number;
    name: string;
    description?: string;
    category: Category | null;
}