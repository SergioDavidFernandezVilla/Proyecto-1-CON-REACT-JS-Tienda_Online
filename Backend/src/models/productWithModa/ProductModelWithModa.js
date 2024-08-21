import { connectionDB } from "../../db/connectionDB.js";

export const ProductModelWithModa = {
    associateProductWithModa: async (productId, marcaId) => {
        const query = `
            INSERT INTO "product_marcas" (product_id, marca_id)
            VALUES ($1, $2);
        `;
        await connectionDB.query(query, [productId, marcaId]);
    }
    
}