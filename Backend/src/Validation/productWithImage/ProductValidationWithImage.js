export const ProductValidationWithImage = (data) => {
    const { productId, imageId } = data;

    if (!productId || !imageId) {
        return {valid: false, message: "productId e imageId son requeridos"};
    }

    // No puede asociar una imagen a un producto que no existe
    if (!productId) {
        return {valid: false, message: "El producto no existe"};
    }


    // No puede asociar una producto a una imagen que no existe
    if (!imageId) {
        return {valid: false, message: "La imagen no existe"};
    }


    return {valid: true, message: "Datos correctos"};
}