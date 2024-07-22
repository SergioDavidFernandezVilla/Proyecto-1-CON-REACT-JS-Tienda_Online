export const UserValidationRegister = (data) => {
    const { email, password, name } = data;

    if (!email || !password || !name) {
        return {valid: false, message: "Son campos obligatorios"};
    }
    return {valid: true, message: "Datos correctos"};
}

export const UserValidationLogin = (data) => {
    const { email, password } = data;

    if (!email || !password) {
        return {valid: false, message: "Campos obligatorios"};
    }

    if (email.includes("@")) {
        return {valid: false, message: "El correo debe contener un @"};
    }

    if (email.length < 8) {
        return {valid: false, message: "El correo debe contener un mínimo de 8 caracteres"};
    }

    if (password.length < 8) {
        return {valid: false, message: "La contraseña debe tener al menos 8 caracteres"};
    }

    return {valid: true, message: "Datos correctos"};
}