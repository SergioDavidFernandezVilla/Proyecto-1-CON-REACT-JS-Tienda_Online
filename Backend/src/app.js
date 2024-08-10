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
import { UserRouter } from "./routers/user/UserRouter.js";
import { ProductRouter } from "./routers/product/ProductRouter.js";
import { ImageUploadRouter } from "./routers/image/imageUpload/ImageUploadRouter.js";
import { CategoryRouter } from "./routers/category/CategoryRouter.js";

// Conexión a la base de datos
import { connectionDB } from "./db/connectionDB.js";

// App
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json()); // Solo esta línea es suficiente para parsear JSON
app.use(cors(
  {
    origin: `http://localhost:${process.env.PORT_FRONTEND} || http://localhost:3000`,
    credentials: true,
  }
)); // Permite que los requests se envíen desde cualquier origen

// Guardar token en cookie
app.use(cookieParser());

// Conexión a la base de datos
connectionDB.connect();

// Rutas
app.use("/api/v1", UserRouter);
app.use("/api/v1", ProductRouter);
app.use("/api/v1",ImageUploadRouter);
app.use("/api/v1",CategoryRouter);

// Puerto
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
