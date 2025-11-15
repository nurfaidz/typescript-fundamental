import { describe, expect, test } from "vitest";

// This test demonstrates the use of basic data types.
describe("data types", () => {
    test("should must declare", () => {
        let name: string = "John Doe";
        let age: number = 30;
        let isVip: boolean = true;

        expect(name).toBe("John Doe");
        expect(age).toBe(30);
        expect(isVip).toBe(true);
    });

});