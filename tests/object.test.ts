import { describe, expect, test } from "vitest";

// This test demonstrates the use of inline object types versus type aliases
describe("object type", () => {
    test("should support object types", () => {
        const person: { name: string; age:number | string; isVip: boolean, hobbies?: string[] } = {
            name: "John Doe",
            age: 30,
            isVip: true,
            hobbies: ["reading", "traveling"]
        }

        expect(person.name).toBe("John Doe");
        expect(person.age).toBe(30);
        expect(person.isVip).toBe(true);
        expect(person.hobbies).toEqual(["reading", "traveling"]);
    });
});