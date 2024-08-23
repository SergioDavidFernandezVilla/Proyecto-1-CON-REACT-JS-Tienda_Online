import { connectionDB } from "../../db/connectionDB.js";

export const ProductModel = {
    createProduct: async (title, description, price, stock) => {
        const query = `
            INSERT INTO "product" (title, description, price, stock) 
            Values ($1, $2, $3, $4)
            RETURNING id;
        `;
        const result = await connectionDB.query(query, [title, description, price, stock]);
        return result.rows[0].id;
    },
    getProductById: async (productId) => {
        const query = `SELECT * FROM "product" WHERE id = $1`;
        const result = await connectionDB.query(query, [productId]);
        return result.rows[0];
    }
    
}
