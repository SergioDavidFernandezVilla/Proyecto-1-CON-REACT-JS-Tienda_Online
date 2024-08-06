import { ImageValidationRegister } from "../../../Validation/image/ImageValidation.js";
import { ImageModel } from "../../../models/image/ImageModel.js";
import path from 'path';

export const ImageUploadController = {
    UploadImage: async (req, res) => {
        const { file } = req;

        // Asegúrate de que `file` exista
        if (!file) {
            return res.status(400).json({ message: "No se ha proporcionado un archivo o el ID del producto" });
        }

        const imageAT = file.filename; // Nombre del archivo

        try {
            // Validación de datos adicionales si es necesario
            const validation = ImageValidationRegister(req);

            if (!validation.valid) {
                // Si la validación falla, puedes eliminar el archivo subido si es necesario
                return res.status(400).json({ message: validation.message });
            }

            // Crear la imagen en la base de datos
            const image = await ImageModel.createImage({
                image_at: imageAT, // Nombre del archivo
                url_image: imageAT // Guarda solo el nombre del archivo
            });

            res.status(201).json({ 
                message: "Se ha subido correctamente la imagen",
                filename: imageAT, // Devolver el nombre del archivo
                id: image.id // Devolver el ID de la imagen
            });
        
        } catch (error) {
            console.error("Error al subir la imagen:", error);
            res.status(500).json({ message: "Error del servidor" });
        }
    }
};
