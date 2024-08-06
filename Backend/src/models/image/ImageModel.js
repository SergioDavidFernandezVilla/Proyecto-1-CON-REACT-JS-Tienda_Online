import { connectionDB } from "../../db/connectionDB.js";


export const ImageModel = {
    createImage: async ({image_at, url_image }) => {
        // Lógica para insertar la imagen en la base de datos
        const newImage = await connectionDB.query(`
            INSERT INTO image (image_at, url_image)
            VALUES ($1, $2)
            RETURNING id`, [image_at, url_image]);
        return newImage.rows[0];
    }
};