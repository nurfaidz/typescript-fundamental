import { describe, expect, test } from "vitest";
import type { Seller } from "../src/interface";
import type { Employee, Manager } from "../src/employee";

describe("Interface", () => {
    test("should support interface", () => {
        const seller: Seller = {
            id: "1",
            name: "Seller 1",
            address: "123 Main St"
        }

        expect(seller.name).toBe("Seller 1");
        expect(seller.address).toBe("123 Main St");
    });

    // You can also define function types using interfaces 
    test("should support function interface", () => {
        interface AddFunction {
            (value: number, value2:number): number;
        }

        const add: AddFunction = (value: number, value2:number): number => {
            return value + value2;
        }

        expect(add(2, 998)).toBe(1000);
    })

    // you can define indexable types using interfaces
    test("should support indexable interface", () => {
        interface StringArray {
            [index: number]: string;
        }

        const myArray: StringArray = ["Alice", "Bob", "Charlie"];

        expect(myArray[0]).toBe("Alice");
        expect(myArray[1]).toBe("Bob");
        expect(myArray[2]).toBe("Charlie");
    });

    test("should support indexable interface for non-number index", () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const myDictionary: StringDictionary = {
            "name": "Bonnie",
            "city": "New York"
        }

        expect(myDictionary["name"]).toBe("Bonnie");
        expect(myDictionary["city"]).toBe("New York");
    })

    // defineing interface inheritance
    test("should support extending interfaces", () => {
        const employee : Employee = {
            id: 1,
            name: "Jane Doe",
            division: "Sales"
        }

        expect(employee.name).toBe("Jane Doe");
        expect(employee.division).toBe("Sales");

        const manager: Manager = {
            id: 2,
            name: "John Smith",
            division: "Marketing",
            numberOfEmployees: 10
        }

        expect(manager.name).toBe("John Smith");
        expect(manager.numberOfEmployees).toBe(10);
    })

    // intersection types using interfaces
    test('should support intersection types', () => {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: number | string;
        }

        type Person = HasName & HasId;

        const person: Person = {
            id: 1,
            name: "John Doe"
        }

        expect(person.id).toBe(1);
        expect(person.name).toBe("John Doe");
    })

    test('should support type assertion with interfaces', () => {
        const employee: any = {
            id: 3,
            name: "Alice Johnson",
            division: "HR"
        }

        const emp: Employee = employee as Employee;

        expect(emp.name).toBe("Alice Johnson");
        expect(emp.division).toBe("HR");
    })
})