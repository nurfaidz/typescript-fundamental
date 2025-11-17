import { describe, expect, test } from "vitest";

describe('Switch Statement', () => {
    // switch statement
    test('should support switch statement', () => {
        const fruit = "Apple";
        let color: string;
        switch (fruit) {
            case "Apple":
                color = "Red";
                break;
            case "Banana":
                color = "Yellow";
                break;
            case "Grapes":
                color = "Purple";
                break;
            default:
                color = "Unknown";
        }
        expect(color).toBe("Red");
    });
});