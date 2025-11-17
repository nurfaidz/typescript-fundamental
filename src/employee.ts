export interface Employee {
    id: number | string;
    name: string;
    division: string;
}

export interface Manager extends Employee {
    numberOfEmployees: number;
}