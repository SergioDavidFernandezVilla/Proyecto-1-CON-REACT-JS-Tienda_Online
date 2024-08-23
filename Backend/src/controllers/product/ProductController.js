import { ProductModel } from "../../models/product/productModel.js";
import { ProductValidationRegister } from "../../Validation/product/ProductValidation.js";

export const ProductController = {
    CreateProduct: async (req, res) => {
        try {
            const { title, description, price, stock} = req.body;

            //Validar datos
            const validation = ProductValidationRegister(req.body);

            if (!validation.valid) {
                return res.status(400).json({ message: validation.message });
            }

            const product = await ProductModel.createProduct(title, description, price, stock);
            res.status(201).json({ message: 'Producto creado con éxito', product: product });
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