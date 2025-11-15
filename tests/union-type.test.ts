import { describe, expect, test } from "vitest";

// This test demonstrates the use of union types.
describe("union type", () => {
    test("should support union types", () => {
        let sample: string | number | boolean;
        sample = "Hello, World!";
        sample = 42;
        sample = true;

        expect(sample).toBe(true);
    });

    test("should handle union types in functions", () => {

        function process(value: string | number | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 5;
            } else {
                return !value;
            }
        }

        process("test");
        process(42);
        process(false);

        expect(process("test")).toBe("TEST");
        expect(process(42)).toBe(47);
        expect(process(false)).toBe(true);

    });
})