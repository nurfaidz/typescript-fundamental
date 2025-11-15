import { describe, expect, test } from "vitest";
import { CustomerType, type Customer } from "../src/enum";

describe("enum", () => {
    test("should support enum", () => {
        const customer: Customer = {
            id: 1,
            name: "Jane Smith",
            type: CustomerType.Premium
        }

        expect(customer.type).toBe(CustomerType.Premium);
    });
})