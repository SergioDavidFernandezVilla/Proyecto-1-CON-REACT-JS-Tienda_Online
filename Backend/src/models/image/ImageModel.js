import { connectionDB } from "../../db/connectionDB.js";


export const ImageModel = {
    createImage: async ({ product_id, image_at, url_image }) => {
        // Lógica para insertar la imagen en la base de datos
        const newImage = await connectionDB.query(`
            INSERT INTO image (product_id, image_at, url_image)
            VALUES ($1, $2, $3)
            RETURNING id`, [product_id, image_at, url_image]);
        return newImage.rows[0];
    }
};
