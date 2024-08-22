import { ProductModelWithModa } from "../../models/productWithModa/ProductModelWithModa.js";
import { ProductValidationWithModa } from "../../Validation/productWithModa/ProductValidationWithModa.js";

export const ProductControllerWithModa = {
    AddModaToProduct: async (req,res) => {
        try {
            const { productId, marcaId } = req.body; // Obtener productId e imageId

            // Validar que productId e imageId estén presentes
            const validation = ProductValidationWithModa({productId, marcaId});

            if (!validation.valid) {
                return res.status(400).json({ message: validation.message });
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