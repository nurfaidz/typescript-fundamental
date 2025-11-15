// Interfaces are preferred over types in complex systems due to their extensibility and ability to merge declarations.
export interface Seller {
    id: number | string;
    name: string;
    address?: string;
}