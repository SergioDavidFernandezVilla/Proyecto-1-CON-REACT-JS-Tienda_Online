import { ProductModalWithImage } from "../../models/productWithImage/ProductModalWithImage.js";
import { ProductValidationWithImage } from "../../Validation/productWithImage/ProductValidationWithImage.js";

export const ProductControllerWithImage = {
    AddImageToProduct: async (req, res) => {
        try {
            const { productId, imageId } = req.body; // Obtener productId e imageId

            // Validaciones de datos
            const validation = ProductValidationWithImage({productId, imageId});

            if (!validation.valid) {
                return res.status(400).json({ message: validation.message });
            }
            

            // Intentar asociar la imagen con el producto
            const ProductWithImage = await ProductModalWithImage.associateImageWithProduct(productId, imageId);

            // Responder con éxito
            res.status(201).json({ message: 'Imagen asociada al producto con éxito', ProductWithImage: ProductWithImage });
        } catch (error) {
            // Manejar errores y responder con un mensaje de error
            res.status(500).json({ message: 'Error al asociar la imagen con el producto', error: error.message });
        }
    },
};
