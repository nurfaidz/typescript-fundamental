// This file defines an enum and a type that uses the enum.
export enum CustomerType {
    Regular,
    Premium,
    VIP
}

export type Customer = {
    id: number | string;
    name: string;
    type: CustomerType;
}