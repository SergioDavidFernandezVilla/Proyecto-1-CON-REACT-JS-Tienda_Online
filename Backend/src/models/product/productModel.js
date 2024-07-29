import { connectionDB } from "../../db/connectionDB.js";

export const ProductModel = {
    getProducts: async () => {
        const query = `SELECT * FROM "product";`;
        const result = await connectionDB.query(query);
        return result.rows;
    },

   CreateProduct : async (title, description, price,stock,category,marca) => {
        const query = `INSERT INTO "product" (title, description, price, stock, category, marca) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const result = await connectionDB.query(query, [title, description, price, stock, category, marca]);
        return result.rows[0];
    },
}