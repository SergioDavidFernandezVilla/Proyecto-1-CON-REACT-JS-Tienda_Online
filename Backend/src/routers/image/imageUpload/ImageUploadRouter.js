import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs"; // Asegúrate de importar 'fs' aquí

import { ImageUploadController } from "../../../controllers/image/ImageUpload/ImageUploadController.js";

const router = express.Router();

// Definición de __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Verifica si la carpeta 'uploads' existe, si no, la crea
const uploadPath = path.join(__dirname, '../../../uploads');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Configuración de multer para el almacenamiento de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../../uploads')); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename); // Genera un nombre único para cada archivo
    }
});

const upload = multer({ storage }); // Inicializa multer con la configuración de almacenamiento

// Ruta para subir la imagen
router.post("/upload-image", upload.single("image"), ImageUploadController.UploadImage);

export { router as ImageUploadRouter };
