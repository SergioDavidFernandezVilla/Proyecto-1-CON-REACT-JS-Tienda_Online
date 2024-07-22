// Cargar variables de entorno
import dotenv from "dotenv";
dotenv.config();

// Librerías 
import express from "express";
import morgan from "morgan";


// Routes
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

console.log(process.env.PGUSER);
console.log(process.env.PGPASSWORD);
console.log(process.env.PGHOST);
console.log(process.env.PGPORT);
console.log(process.env.PGDATABASE);

// Puerto
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
