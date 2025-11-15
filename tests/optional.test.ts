import { describe, expect, test } from "vitest";

describe("optional", () => {
    test("should support null and undefined", () => {
        function greet(name?: string | null) {
            if (!name) {
                return "Hello, Guest!";
            } else {
                return `Hello, ${name}!`;
            }
        }

        expect(greet()).toBe("Hello, Guest!");
        expect(greet(null)).toBe("Hello, Guest!");
        expect(greet("Alice")).toBe("Hello, Alice!");
    });
})