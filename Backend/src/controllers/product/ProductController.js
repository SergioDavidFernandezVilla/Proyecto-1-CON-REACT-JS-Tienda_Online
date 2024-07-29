import { ProductModel } from "../../models/product/productModel.js";
import { ProductValidationRegister } from "../../Validation/product/ProductValidation.js";

export const ProductController = {
       GetProducts: async (req, res) => {
        res.send("Productos");
    },

        CreateProduct: async (req, res) => {
        const { title, description, price, stock, category, marca } = req.body;

        const validation = ProductValidationRegister(req.body);

        if (!validation.valid) {
            return res.status(400).json({ message: validation.message });
        }

        try {
            const product = await ProductModel.CreateProduct(title, description, price, stock, category, marca);
            res.status(201).json({ message: "Se ha registrado correctamente el producto", product: product });
        } catch (error) {
            console.error("Error al registrar el producto:", error);
            res.status(500).json({ message: "Error del servidor" });
        }
    },
}