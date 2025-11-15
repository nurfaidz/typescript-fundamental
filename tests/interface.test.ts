import { describe, expect, test } from "vitest";
import type { Seller } from "../src/interface";

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

    test("should suppor0t extending interfaces", () => {
        
    })
})