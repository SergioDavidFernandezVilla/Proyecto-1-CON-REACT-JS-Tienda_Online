import { connectionDB } from "../../db/connectionDB.js";

export const ProductModalWithImage = {
    associateImageWithProduct : async (productId, imageId) => {
        const query = `
            INSERT INTO "product_images" (product_id, image_id) 
            VALUES ($1, $2);
        `;
        await connectionDB.query(query, [productId, imageId]);
    }
    
}