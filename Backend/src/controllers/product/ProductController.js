import { ProductModel } from "../../models/product/productModel.js";

export const ProductController = {
    CreateProduct: async (req, res) => {
        try {
            const { title, description, price, stock, marcaId, categoryId } = req.body;
            const productId = await ProductModel.createProduct(title, description, price, stock, marcaId, categoryId);
            res.status(201).json({ message: 'Producto creado con éxito', productId });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el producto', error: error.message });
        }
    },

    VerificarHealth : async (req, res) => {
        try {
           res.status(200).json({ message: 'Producto verificado' });
        } catch (error) {
            res.status(500).json({ message: 'Error al verificar el producto', error: error.message });
        }
    }
}