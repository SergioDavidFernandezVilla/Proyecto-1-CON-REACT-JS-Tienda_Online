import { connectionDB } from "../../db/connectionDB.js";

export const ProductModel = {
    getProducts: async () => {
        const query = `SELECT * FROM "product";`;
        const result = await connectionDB.query(query);
        return result.rows;
    },

    CreateProduct: async (title, description, price, stock, marca) => {
        try {    
            const productQuery = `
                INSERT INTO "product" (title, description, price, stock, marca) 
                VALUES ($1, $2, $3, $4, $5) 
                RETURNING id, title, description, price, stock, marca
            `;
            const productResult = await connectionDB.query(productQuery, [title, description, price, stock,marca]);
    
            return productResult.rows[0];
        } catch (error) {
            console.error('Error al registrar el producto:', error.message);
            throw error;
        }
    }
    
}
