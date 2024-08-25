import { connectionDB } from "../../db/connectionDB.js";

export const ProductsListModel = {
    getProductsList: async (req, res) => {
        const query = `SELECT p.id AS product_id, p.title AS product_title, p.description AS product_description, p.price AS product_price, p.stock AS product_stock, c.id AS category_id, c.name AS category_name, m.id AS marca_id, m.name AS marca_name, i.id AS image_id, i.image_at AS image_at, i.image_url AS image_url FROM "product" p JOIN "product_categories" pc ON pc.product_id = p.id JOIN "categories" c ON c.id = pc.category_id JOIN "product_images" pi ON pi.product_id = p.id JOIN "image" i ON i.id = pi.image_id JOIN "product_marcas" pm ON pm.product_id = p.id JOIN "marcas" m ON m.id = pm.marca_id;;`;
        const result = await connectionDB.query(query);
        return result.rows;
    }
}