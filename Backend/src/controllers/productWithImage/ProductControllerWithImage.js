import { ProductModalWithImage } from "../../models/productWithImage/ProductModalWithImage.js";

export const ProductControllerWithImage = {
    AddImageToProduct: async (req, res) => {
        try {
            const { productId, imageId } = req.body; // Obtener productId e imageId

            // Validar que productId e imageId estén presentes
            if (!productId || !imageId) {
                return res.status(400).json({ message: 'productId e imageId son requeridos' });
            }

            // Intentar asociar la imagen con el producto
            await ProductModalWithImage.associateImageWithProduct(productId, imageId);

            // Responder con éxito
            res.status(201).json({ message: 'Imagen asociada al producto con éxito' });
        } catch (error) {
            // Manejar errores y responder con un mensaje de error
            res.status(500).json({ message: 'Error al asociar la imagen con el producto', error: error.message });
        }
    },
};
