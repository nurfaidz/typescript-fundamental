import { describe, expect, test } from "vitest";

// This test demonstrates the use of the 'any' data type.
describe("any data type", () => {
    test("should support any data type", () => {
        const person: any = {
            name: "John Doe",
            age: 30,
            isVip: true
        }

        expect(person.name).toBe("John Doe");
        expect(person.age).toBe(30);
        expect(person.isVip).toBe(true);
    })
});
