import { connectionDB } from "../../db/connectionDB.js";

export const ProductModel = {
    getProducts: async () => {
        const query = `SELECT * FROM "product";`;
        const result = await connectionDB.query(query);
        return result.rows;
    },

    CreateProduct: async (title, description, price, stock, category, marca) => {
        try {
            const categoryQuery = `SELECT id FROM "categorys" WHERE name = $1`;
            const categoryResult = await connectionDB.query(categoryQuery, [category]);
            if (categoryResult.rows.length === 0) {
                throw new Error(`Categoría no encontrada: ${category}`);
            }
            const categoryId = categoryResult.rows[0].id;
    
            const productQuery = `
                INSERT INTO "product" (title, description, price, stock, category, marca) 
                VALUES ($1, $2, $3, $4, $5, $6) 
                RETURNING id, title, description, price, stock, category, marca
            `;
            const productResult = await connectionDB.query(productQuery, [title, description, price, stock, categoryId, marca]);
    
            return productResult.rows[0];
        } catch (error) {
            console.error('Error al registrar el producto:', error.message);
            throw error;
        }
    }
    
}
