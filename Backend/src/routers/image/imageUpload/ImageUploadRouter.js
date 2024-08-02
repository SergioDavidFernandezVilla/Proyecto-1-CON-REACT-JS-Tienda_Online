import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

import { ImageUploadController } from "../../../controllers/image/ImageUpload/ImageUploadController.js";

const router = express.Router();

// Necesario si estás utilizando módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../../../uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Limite de tamaño de archivo (5MB)
    },
});

router.post("/upload-image", upload.single("file"), ImageUploadController.UploadImage);

export { router as ImageUploadRouter };
