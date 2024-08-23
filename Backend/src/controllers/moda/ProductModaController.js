import { ProductModaModel } from "../../models/moda/ProductModaModel.js";
import { ModaValidationRegister } from "../../Validation/moda/ModaValidation.js";

export const ProductControllerModa = {
    CreateProductModa: async (req, res) => {
        try {
            const { name, description } = req.body;

           //Validar datos
           const Validation = ModaValidationRegister(req.body);

            if (!Validation.valid) {
                return res.status(400).json({ message: Validation.message });
            }
           
            const ProductModa = await ProductModaModel.createProductModa(name, description);
           
            res.status(201).json({ message: 'Producto creado con éxito', ProductModa: ProductModa });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el producto', error: error.message });
        }
    },
}