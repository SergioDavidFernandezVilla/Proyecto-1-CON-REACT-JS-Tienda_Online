import { ImageValidationRegister } from "../../../Validation/image/ImageValidation.js";
import { ImageModel } from "../../../models/image/ImageModel.js";
import path from 'path'; // Asegúrate de tener path importado

export const ImageUploadController = {
    UploadImage: async (req, res) => {
        const { file } = req;
        const { product_id } = req.body;

        // Asegúrate de que `file` y `product_id` existan
        if (!file || !product_id) {
            return res.status(400).json({ message: "No se ha proporcionado un archivo o el ID del producto" });
        }

        const imageAT = file.filename; // Nombre del archivo
        const imageURL = file.path; // Ruta del archivo

        try {
            // Validación de datos adicionales si es necesario
            const validation = ImageValidationRegister(req);

            if (!validation.valid) {
                // Si la validación falla, puedes eliminar el archivo subido si es necesario
                return res.status(400).json({ message: validation.message });
            }

            // Crear la imagen en la base de datos
            const image = await ImageModel.createImage({
                product_id,
                image_at: imageAT, // Asumiendo que esto es lo que quieres almacenar
                url_image: imageURL // Ruta de la imagen
            });

            res.status(201).json({ 
                message: "Se ha subido correctamente la imagen",
                filename: imageAT, // Devolver el nombre del archivo
                path: imageURL, // Devolver la ruta del archivo
                id: image.id // Devolver el ID de la imagen
            });
        
        } catch (error) {
            console.error("Error al subir la imagen:", error);
            res.status(500).json({ message: "Error del servidor" });
        }
    }
};
