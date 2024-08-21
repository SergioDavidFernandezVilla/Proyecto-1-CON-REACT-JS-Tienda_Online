import { ProductModaModel } from "../../models/moda/ProductModaModel.js";

export const ProductControllerModa = {
    CreateProductModa: async (req, res) => {
        try {
            const { name, description } = req.body;

            if (!name || !description) {
                return res.status(400).json({ message: 'Los campos name y description son requeridos' });
            }
           
            const ProductModa = await ProductModaModel.createProductModa(name, description);
           
            res.status(201).json({ message: 'Producto creado con éxito', ProductModa });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el producto', error: error.message });
        }
    },
}