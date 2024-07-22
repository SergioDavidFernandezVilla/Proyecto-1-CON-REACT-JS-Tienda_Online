// Cargar variables de entorno
import dotenv from "dotenv";
dotenv.config();

// Librerías 
import express from "express";
import morgan from "morgan";


// Routers
import { UserRouter } from "./routers/user/UserRouter.js";

// Conexión a la base de datos
import { connectionDB } from "./db/connectionDB.js";
// App
const app = express();

// Middlewares morgan
app.use(morgan("dev"));
app.use(express.json());

// Conexión a la base de datos
connectionDB.connect();

// Rutas
app.use("/api/v1", UserRouter);

// Puerto
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
