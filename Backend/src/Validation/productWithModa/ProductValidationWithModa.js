export const ProductValidationWithModa = (data) => {
    const { productId, marcaId } = data;

    if (!productId || !marcaId) {
        return {valid: false, message: "productId e marcaId son requeridos"};
    }

    // No puede asociar una imagen a un producto que no existe
    if (!productId) {
        return {valid: false, message: "El producto no existe"};
    }


    // No puede asociar una producto a una imagen que no existe
    if (!marcaId) {
        return {valid: false, message: "La marca no existe"};
    }


    return {valid: true, message: "Datos correctos"};
}