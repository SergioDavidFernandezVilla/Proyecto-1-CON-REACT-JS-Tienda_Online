import espress from "express";

const router = espress.Router();

import { AuthorizationRoleMiddleware } from "../../middlewares/AuthorizationRoleMiddleware.js";
import { ProductControllerWithImage} from "../../controllers/productWithImage/ProductControllerWithImage.js";


// Crear ruta para asociar producto con imagen
router.post("/add-image-product", AuthorizationRoleMiddleware, ProductControllerWithImage.AddImageToProduct);

export { router as ProductRouterWithImage };