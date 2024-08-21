import { ProductModalWithCategory } from "../../models/ProductWithCategory/ProductModalWithCategory.js";

export const ProductControllerWithCategory = {
    AddCategoryToProduct: async (req, res) => {
        try {
            const { productId, categoryId } = req.body; // Obtener productId e imageId

            // Validar que productId e imageId estén presentes
            if (!productId || !categoryId) {
                return res.status(400).json({ message: "productId e categoryId son requeridos" });
            }

            // Intentar asociar la imagen con el producto
            await ProductModalWithCategory.associateProductWithCategory(productId, categoryId);

            // Responder con éxito
            res.status(201).json({ message: "Categoría asociada al producto con éxito" });
        } catch (error) {
            res.status(500).json({ message: "Error al asociar la categoría con el producto", error: error.message });
        }
    }
}