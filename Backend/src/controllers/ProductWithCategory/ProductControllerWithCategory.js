import { ProductModalWithCategory } from "../../models/ProductWithCategory/ProductModalWithCategory.js";
import { ProductValidationWithCategory } from "../../Validation/ProductWithCategory/ProductValidationWithCategory.js";

export const ProductControllerWithCategory = {
    AddCategoryToProduct: async (req, res) => {
        try {
            const { productId, categoryId } = req.body; // Obtener productId e imageId

            // Validar que productId e imageId estén presentes
           const validation = ProductValidationWithCategory({productId, categoryId});

            if (!validation.valid) {
                return res.status(400).json({ message: validation.message });
            }

            // Intentar asociar la imagen con el producto
            const ProductWithCategory = await ProductModalWithCategory.associateProductWithCategory(productId, categoryId);

            // Responder con éxito
            res.status(201).json({ message: "Categoría asociada al producto con éxito", ProductWithCategory: ProductWithCategory });
        } catch (error) {
            res.status(500).json({ message: "Error al asociar la categoría con el producto", error: error.message });
        }
    }
}