import { connectionDB } from "../../db/connectionDB.js";

export const ProductModalWithCategory = {
    associateProductWithCategory: async (productId, categoryId) => {
        const query = `
            INSERT INTO "product_categories" (product_id, category_id)
            VALUES ($1, $2);
        `;
        await connectionDB.query(query, [productId, categoryId]);
    }
    
}