import espress from "express";

const router = espress.Router();

import { AuthorizationRoleMiddleware } from "../../middlewares/AuthorizationRoleMiddleware.js";
import { ProductControllerWithModa} from "../../controllers/productWithModa/ProductControllerWithModa.js";

//Asociar producto a moda
router.post("/add-moda-product", AuthorizationRoleMiddleware, ProductControllerWithModa.AddModaToProduct);

export { router as ProductRouterWithModa };