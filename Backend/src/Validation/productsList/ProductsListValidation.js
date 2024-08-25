export const ProductsListValidationRegister = (data) => {
    const { id } = data;

    if (!id) {
        return {valid: false, message: "Campo obligatorio"};
    }

    return {valid: true, message: "Datos correctos"};
}