import { connectionDB } from "../../db/connectionDB.js";


export const ImageModel = {
    UploadImage: async (product_id, url_image, image_at) => {
        try {
            const imageQuery = `INSERT INTO "image" (product_id, image_at, url_image) VALUES ($1, $2, $3)`;
          
            await connectionDB.query(imageQuery, [product_id, image_at, url_image]);
    
            return { message: "Imagen subida exitosamente" };
        } catch (error) {
            console.error('Error al subir la imagen:', error.message);
            throw error;
        }
    }
    
};