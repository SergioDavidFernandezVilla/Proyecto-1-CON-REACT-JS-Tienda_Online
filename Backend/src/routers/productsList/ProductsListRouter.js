import espress from "express";

const router = espress.Router();

import { AuthorizationRoleMiddleware } from "../../middlewares/AuthorizationRoleMiddleware.js";
import { ProductsListController } from "../../controllers/productsList/ProductsListController.js";

// Ruta para obtener la página principal
router.get("/get-products-list", AuthorizationRoleMiddleware, ProductsListController.GetProductsList);

export { router as ProductsListRouter };