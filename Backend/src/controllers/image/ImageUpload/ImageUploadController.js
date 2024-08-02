import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

import { ImageValidationRegister } from "../../../Validation/image/ImageValidation.js";

// Necesario si estás utilizando módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Controlador
export const ImageUploadController = {
    UploadImage: async (req, res) => {
        const { file } = req;
        
        const validation = ImageValidationRegister(req.body);
        
        if (!validation.valid) {
            return res.status(400).json({ message: validation.message });
        }
        try {
            
        } catch (error) {
            
        }
    }
};

