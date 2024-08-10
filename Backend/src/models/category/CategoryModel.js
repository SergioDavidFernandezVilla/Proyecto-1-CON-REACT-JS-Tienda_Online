import { connectionDB } from "../../db/connectionDB.js";

export const CategoryModel = {
    CreateCategory: async (name, description) => {
        try {
            const categoryQuery = `INSERT INTO "categorys" (name, description) VALUES ($1, $2)`;
            await connectionDB.query(categoryQuery, [name, description]);
    
            return { message: "Categoría creada exitosamente" };
        } catch (error) {
            console.error('Error al crear la categoría:', error.message);
            throw error;
        }
    }
}