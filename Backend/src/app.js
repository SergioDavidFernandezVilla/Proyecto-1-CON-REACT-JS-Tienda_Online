// Cargar variables de entorno
import dotenv from "dotenv";
dotenv.config();

// Librerías 
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import cookieParser from "cookie-parser";
import multer from "multer";

// Routers

// Usuario
import { UserRouter } from "./routers/user/UserRouter.js";

//Imagen
import { ImageUploadRouter } from "./routers/image/imageUpload/ImageUploadRouter.js";

//Producto
import { ProductRouter } from "./routers/product/ProductRouter.js";

//Producto con imagen
import { ProductRouterWithImage } from "./routers/productWithImage/ProductRouterWithImage.js";

//Categoría
import { CategoryRouter } from "./routers/category/CategoryRouter.js";

//Producto con categoría
import { ProductRouterWithCategory } from "./routers/productWithCategory/ProductRouterWithCategory.js";

//Moda
import { ProductRouterModa } from "./routers/moda/ProductModaRouter.js";

//Producto con Moda
import { ProductRouterWithModa } from "./routers/productWithModa/ProductRouterWithModa.js";

// Conexión a la base de datos
import { connectionDB } from "./db/connectionDB.js";

// App
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json()); // Solo esta línea es suficiente para parsear JSON
app.use(cors(
  {
    //Ruta de acceso a la aplicación
    origin: `http://localhost:${process.env.PORT_FRONTEND} || http://localhost:3000`,
    credentials: true,
  }
)); // Permite que los requests se envíen desde cualquier origen

// Guardar token en cookie
app.use(cookieParser());

// Conexión a la base de datos
connectionDB.connect();

// Rutas

// Usuario
app.use("/api/v1", UserRouter);

// Producto
app.use("/api/v1", ProductRouter);

//Imagen
app.use("/api/v1",ImageUploadRouter);

//Categoría
app.use("/api/v1",CategoryRouter);

//Producto con imagen
app.use("/api/v1",ProductRouterWithImage);

//Moda
app.use("/api/v1",ProductRouterModa);

//Producto con Moda
app.use("/api/v1",ProductRouterWithModa);

//Producto con categoría
app.use("/api/v1",ProductRouterWithCategory);

// Puerto
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
