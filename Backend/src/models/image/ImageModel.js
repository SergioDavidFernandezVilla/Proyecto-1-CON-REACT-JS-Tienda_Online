import { connectionDB } from "../../db/connectionDB.js";


export const ImageModel = {
    AddImage: async (imageAt, image_url) => {
        const query = `
            INSERT INTO "image" (image_at, image_url, created_at) 
            VALUES ($1, $2, NOW()) 
            RETURNING id;
        `;
        const result = await connectionDB.query(query, [imageAt, image_url]);
        return result.rows[0].id;
    },

    AssociateImageWithProduct: async (productId, imageId) => {
        const query = `
            INSERT INTO "product_images" (product_id, image_id) 
            VALUES ($1, $2);
        `;
        await connectionDB.query(query, [productId, imageId]);
    }
    
};