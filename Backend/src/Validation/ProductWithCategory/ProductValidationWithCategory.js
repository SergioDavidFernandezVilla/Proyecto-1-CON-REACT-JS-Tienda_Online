export const ProductValidationWithCategory = (data) => {
    const { productId, categoryId } = data;

    if (!productId || !categoryId) {
        return {valid: false, message: "productId e categoryId son requeridos"};
    }

    // No puede asociar una imagen a un producto que no existe
    if (!productId) {
        return {valid: false, message: "El producto no existe"};
    }


    // No puede asociar una producto a una imagen que no existe
    if (!categoryId) {
        return {valid: false, message: "La categoría no existe"};
    }


    return {valid: true, message: "Datos correctos"}

}