import { ProductModelWithModa } from "../../models/productWithModa/ProductModelWithModa.js";

export const ProductControllerWithModa = {
    AddModaToProduct: async (req,res) => {
        try {
            const { productId, marcaId } = req.body; // Obtener productId e imageId

            // Validar que productId e imageId estén presentes
            if (!productId || !marcaId) {
                return res.status(400).json({ message: "productId e marcaId son requeridos" });
            }

            // Intentar asociar la imagen con el producto
            await ProductModelWithModa.associateProductWithModa(productId, marcaId);

            // Responder con éxito
            res.status(201).json({ message: "Moda asociada al producto con éxito" });
        } catch (error) {
            res.status(500).json({ message: "Error al asociar la moda con el producto", error: error.message });
        }
    }
}