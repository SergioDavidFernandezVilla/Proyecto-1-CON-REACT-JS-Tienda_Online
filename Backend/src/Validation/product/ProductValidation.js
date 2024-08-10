export const ProductValidationRegister = (data) => {
    const { title, description, price, stock, category, marca } = data;

    if (!title || !description || !price || !stock || !category || !marca) {
        return {valid: false, message: "Datos obligatorios"};
    }

    const XDdata = {
        "title": "Smartphone X100",
        "description": "Teléfono inteligente de última generación con cámara de alta resolución y batería de larga duración.",
        "price": 699.99,
        "stock": 150,
        "categoryName": "Electrónica",
        "marca": "TechBrand",
        "imageUrl": "https://example.com/images/smartphone_x100.jpg"
      }
      

    if (title.length > 100) {
        return {valid: false, message: "El título no puede tener más de 100 caracteres"};
    }

    if (description.length > 500) {
        return {valid: false, message: "La descripción no puede tener más de 500 caracteres"};
    }

    if (marca.length > 50) {
        return {valid: false, message: "La marca no puede tener más de 50 caracteres"};
    }
   
    if (category.length > 50) {
        return {valid: false, message: "La categoría no puede tener más de 50 caracteres"};
    }

    return {valid: true, message: "Datos correctos"};
}

