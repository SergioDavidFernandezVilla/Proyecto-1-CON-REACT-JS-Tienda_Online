import { CategoryValidationRegister } from "../../Validation/category/CategoryValidation.js";
import { CategoryModel } from "../../models/category/CategoryModel.js";

export const CategoryController = {
       GetCategories: async (req, res) => {
        res.send("Categorías");
    },

    CreateCategory: async (req, res) => {
        const { name, description } = req.body;

        const validation = CategoryValidationRegister(req.body);

        if (!validation.valid) {
            return res.status(400).json({ message: validation.message });
        }

        try {
            const category = await CategoryModel.CreateCategory(name, description);
            res.status(201).json({ message: "Se ha registrado correctamente la categoría", category: category });
        } catch (error) {
            console.error("Error al registrar la categoría:", error);
            res.status(500).json({ message: "Error del servidor" });
        }
    },
}