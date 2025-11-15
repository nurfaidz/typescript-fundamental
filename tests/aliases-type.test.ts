import { describe, expect, test } from "vitest";
import type { Category, Product } from "../src/aliases-type";

// This test demonstrates the use of type aliases.
describe("alias type", () => {
    test("should support type aliases", () => {
        const category: Category = {
            id: 1,
            name: "Electronics"
        }

        const product: Product = {
            id: "prod-001",
            name: "Smartphone",
            price: 699,
            category: category
        }

        expect(product.category.name).toBe("Electronics");
        expect(product.price).toBe(699);
    })
})