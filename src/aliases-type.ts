// Type Aliases Example with Optional property
export type ID = string | number;

export type Category = {
    id: ID;
    name: string;
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    description?: string;
    category: Category;
}