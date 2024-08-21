import espress from "express";

const router = espress.Router();

import { AuthorizationRoleMiddleware } from "../../middlewares/AuthorizationRoleMiddleware.js";
import { ProductControllerModa} from "../../controllers/moda/ProductModaController.js";

// Crear moda
router.post("/create-moda", AuthorizationRoleMiddleware, ProductControllerModa.CreateProductModa);

export { router as ProductRouterModa };