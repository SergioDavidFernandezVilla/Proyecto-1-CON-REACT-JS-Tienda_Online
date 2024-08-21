import espress from "express";

const router = espress.Router();

import { AuthorizationRoleMiddleware } from "../../middlewares/AuthorizationRoleMiddleware.js";
import { ProductControllerWithCategory } from "../../controllers/ProductWithCategory/ProductControllerWithCategory.js";


// Crear ruta para asociar producto con categoría
router.post("/add-category-product", AuthorizationRoleMiddleware, ProductControllerWithCategory.AddCategoryToProduct);

export { router as ProductRouterWithCategory };