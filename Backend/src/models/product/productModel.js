import { connectionDB } from "../../db/connectionDB.js";

export const ProductModel = {
    getProducts: async () => {
        const query = `SELECT * FROM "product";`;
        const result = await connectionDB.query(query);
        return result.rows;
    },

    CreateProduct: async (title, description, price, stock, category, marca, imageUrl) => {
        // Paso 1: Buscar el id de la categoría por su nombre
        const categoryQuery = `SELECT id FROM "categorys" WHERE name = $1`;
        const categoryResult = await connectionDB.query(categoryQuery, [category]);
        if (categoryResult.rows.length === 0) {
            throw new Error(`Categoría no encontrada: ${category}`);
        }
        const categoryId = categoryResult.rows[0].id;
    
        // Paso 2: Insertar el producto en la tabla "product"
        const productQuery = `INSERT INTO "product" (title, description, price, stock, category, marca) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;
        const productResult = await connectionDB.query(productQuery, [title, description, price, stock, categoryId, marca]);
        const productId = productResult.rows[0].id;
    
        // Paso 3: Insertar la imagen en la tabla "image", asociándola con el product_id
        const imageQuery = `INSERT INTO "image" (product_id, image_at, url_image) VALUES ($1, $2, $3)`;
        const imageAt = "main"; // Puedes ajustar según tu lógica
        await connectionDB.query(imageQuery, [productId, imageAt, imageUrl]);
    
        return productResult.rows[0];
    }
    
    
}