import { describe, expect, test } from "vitest";

describe('If Statement', () => {
    // if statement
    test('should support if statement', () => {
        const score = 85;

        if (score >= 90) {
            console.log('A');
        } else if (score >= 80) {
            console.log('B');
        } else if (score >= 70) {
            console.log('C');
        } else {
            console.log('D');
        }
    })
})