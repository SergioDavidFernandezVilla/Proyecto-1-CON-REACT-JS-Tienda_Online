// Cargar variables de entorno
import dotenv from "dotenv";
dotenv.config();

// Librerías 
import express from "express";
import morgan from "morgan";
import cors from 'cors';

// Routers
import { UserRouter } from "./routers/user/UserRouter.js";

// Conexión a la base de datos
import { connectionDB } from "./db/connectionDB.js";

// App
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json()); // Solo esta línea es suficiente para parsear JSON
app.use(cors(
  {
    origin: `http://localhost:${process.env.PORT_FRONTEND}`,
    credentials: true,
  }
)); // Permite que los requests se envíen desde cualquier origen

// Conexión a la base de datos
connectionDB.connect();

// Rutas
app.use("/api/v1", UserRouter);

// Puerto
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
